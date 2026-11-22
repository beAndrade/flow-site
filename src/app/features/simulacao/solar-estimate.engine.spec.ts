import {
  ANNUAL_GENERATION_KWH_PER_KWP,
  CO2_KG_PER_KWH,
  COST_PER_KWP_BRL,
  EXPOSURE_FACTOR,
  TARIFF_BRL_PER_KWH,
} from './solar-estimate.config';
import { estimateSolarSavings } from './solar-estimate.engine';
import { SolarEstimateInput, SunExposure } from './solar-estimate.types';

const DEFAULT_INPUT: SolarEstimateInput = {
  monthlyBillBRL: 450,
  roofAreaM2: 80,
  sunExposure: 'moderada',
};

function expectFiniteNonNegative(value: number): void {
  expect(Number.isFinite(value)).toBeTrue();
  expect(value).toBeGreaterThanOrEqual(0);
}

describe('estimateSolarSavings', () => {
  it('computes H4b defaults (roof-sufficient, full bill savings)', () => {
    const result = estimateSolarSavings(DEFAULT_INPUT);

    // roofCapacity=9.6; required≈5.4135 → systemKw≈5.4135
    expect(result.systemKw).toBeCloseTo(5.413533834586466, 5);
    expect(result.annualSavingsBRL).toBeCloseTo(5400, 5);
    expect(result.paybackYears).toBeCloseTo(4.511278195488722, 5);
    expect(result.co2AvoidedKgPerYear).toBeCloseTo(397.8947368421053, 5);
    expect(result.treesEquivalent).toBe(18);
  });

  it('handles monthly bill minimum (100)', () => {
    const result = estimateSolarSavings({
      ...DEFAULT_INPUT,
      monthlyBillBRL: 100,
    });

    expect(result.annualSavingsBRL).toBeCloseTo(1200, 5);
    expect(result.systemKw).toBeCloseTo(1.2030075187969924, 5);
    expect(result.paybackYears).not.toBeNull();
    expectFiniteNonNegative(result.systemKw);
    expectFiniteNonNegative(result.annualSavingsBRL);
  });

  it('handles monthly bill maximum (5000) as roof-limited', () => {
    const result = estimateSolarSavings({
      ...DEFAULT_INPUT,
      monthlyBillBRL: 5000,
    });

    // required ≈ 60.15 kWp, roofCapacity = 9.6 → clamp to roof
    expect(result.systemKw).toBeCloseTo(9.6, 5);
    expect(result.annualSavingsBRL).toBeCloseTo(9576, 5);
    expect(result.paybackYears).toBeCloseTo((9.6 * COST_PER_KWP_BRL) / 9576, 5);
  });

  it('handles roof area minimum (30) as roof-limited', () => {
    const result = estimateSolarSavings({
      ...DEFAULT_INPUT,
      roofAreaM2: 30,
    });

    expect(result.systemKw).toBeCloseTo(3.6, 5);
    expect(result.annualSavingsBRL).toBeCloseTo(3591, 5);
  });

  it('handles roof area maximum (500) as roof-sufficient', () => {
    const result = estimateSolarSavings({
      ...DEFAULT_INPUT,
      roofAreaM2: 500,
    });

    expect(result.systemKw).toBeCloseTo(5.413533834586466, 5);
    expect(result.annualSavingsBRL).toBeCloseTo(5400, 5);
  });

  it('applies baixa exposure factor (0.55)', () => {
    const result = estimateSolarSavings({
      ...DEFAULT_INPUT,
      sunExposure: 'baixa',
    });

    const factor = EXPOSURE_FACTOR.baixa;
    const annualBill = 450 * 12;
    const consumption = annualBill / TARIFF_BRL_PER_KWH;
    const required = consumption / (ANNUAL_GENERATION_KWH_PER_KWP * factor);

    expect(result.systemKw).toBeCloseTo(required, 5);
    expect(result.annualSavingsBRL).toBeCloseTo(5400, 5);
  });

  it('applies moderada exposure factor (0.70)', () => {
    const result = estimateSolarSavings({
      ...DEFAULT_INPUT,
      sunExposure: 'moderada',
    });

    expect(result.systemKw).toBeCloseTo(5.413533834586466, 5);
  });

  it('applies alta exposure factor (0.80)', () => {
    const result = estimateSolarSavings({
      ...DEFAULT_INPUT,
      sunExposure: 'alta',
    });

    const factor = EXPOSURE_FACTOR.alta;
    const annualBill = 450 * 12;
    const consumption = annualBill / TARIFF_BRL_PER_KWH;
    const required = consumption / (ANNUAL_GENERATION_KWH_PER_KWP * factor);

    expect(result.systemKw).toBeCloseTo(required, 5);
    expect(result.annualSavingsBRL).toBeCloseTo(5400, 5);
  });

  it('is roof-limited when required capacity exceeds roof', () => {
    const result = estimateSolarSavings({
      monthlyBillBRL: 5000,
      roofAreaM2: 80,
      sunExposure: 'moderada',
    });

    expect(result.systemKw).toBeCloseTo(9.6, 5);
    expect(result.systemKw).toBeLessThan(
      (5000 * 12) /
        TARIFF_BRL_PER_KWH /
        (ANNUAL_GENERATION_KWH_PER_KWP * EXPOSURE_FACTOR.moderada),
    );
  });

  it('is roof-sufficient when roof can host the required system', () => {
    const result = estimateSolarSavings(DEFAULT_INPUT);
    const roofCapacity = 80 * 0.12;

    expect(result.systemKw).toBeLessThan(roofCapacity);
    expect(result.annualSavingsBRL).toBeCloseTo(5400, 5);
  });

  it('keeps generation, savings, and CO₂ coherent', () => {
    const exposures: SunExposure[] = ['baixa', 'moderada', 'alta'];

    for (const sunExposure of exposures) {
      const input = { ...DEFAULT_INPUT, sunExposure };
      const result = estimateSolarSavings(input);
      const factor = EXPOSURE_FACTOR[sunExposure];
      const annualGeneration =
        result.systemKw * ANNUAL_GENERATION_KWH_PER_KWP * factor;
      const expectedSavings = Math.min(
        input.monthlyBillBRL * 12,
        annualGeneration * TARIFF_BRL_PER_KWH,
      );
      const expectedCo2 = annualGeneration * CO2_KG_PER_KWH;

      expect(result.annualSavingsBRL).toBeCloseTo(expectedSavings, 5);
      expect(result.co2AvoidedKgPerYear).toBeCloseTo(expectedCo2, 5);
      expect(result.annualSavingsBRL).toBeLessThanOrEqual(
        input.monthlyBillBRL * 12 + 1e-9,
      );
    }
  });

  it('sets paybackYears to systemCost / annualSavings when savings > 0', () => {
    const result = estimateSolarSavings(DEFAULT_INPUT);
    const systemCost = result.systemKw * COST_PER_KWP_BRL;

    expect(result.paybackYears).not.toBeNull();
    expect(result.paybackYears!).toBeCloseTo(
      systemCost / result.annualSavingsBRL,
      5,
    );
  });

  it('returns null payback and zero-safe outputs for invalid / zero inputs', () => {
    const cases: SolarEstimateInput[] = [
      { monthlyBillBRL: 0, roofAreaM2: 80, sunExposure: 'moderada' },
      { monthlyBillBRL: -100, roofAreaM2: 80, sunExposure: 'moderada' },
      { monthlyBillBRL: Number.NaN, roofAreaM2: 80, sunExposure: 'moderada' },
      {
        monthlyBillBRL: Number.POSITIVE_INFINITY,
        roofAreaM2: 80,
        sunExposure: 'moderada',
      },
      { monthlyBillBRL: 450, roofAreaM2: -10, sunExposure: 'moderada' },
      { monthlyBillBRL: 450, roofAreaM2: Number.NaN, sunExposure: 'moderada' },
    ];

    for (const input of cases) {
      const result = estimateSolarSavings(input);

      expectFiniteNonNegative(result.annualSavingsBRL);
      expectFiniteNonNegative(result.systemKw);
      expectFiniteNonNegative(result.co2AvoidedKgPerYear);
      expect(result.treesEquivalent).toBeGreaterThanOrEqual(0);
      expect(Number.isFinite(result.treesEquivalent)).toBeTrue();
      expect(typeof result.roofLimited).toBe('boolean');

      if (result.annualSavingsBRL > 0) {
        expect(result.paybackYears).not.toBeNull();
        expectFiniteNonNegative(result.paybackYears!);
      } else {
        expect(result.paybackYears).toBeNull();
      }
    }
  });

  describe('roofLimited saturation flag', () => {
    it('is false for default 450/80/moderada (roof sufficient)', () => {
      const result = estimateSolarSavings(DEFAULT_INPUT);
      expect(result.roofLimited).toBeFalse();
    });

    it('is true for 800/80/moderada (roof clamps required system)', () => {
      const result = estimateSolarSavings({
        monthlyBillBRL: 800,
        roofAreaM2: 80,
        sunExposure: 'moderada',
      });
      expect(result.roofLimited).toBeTrue();
    });

    it('updates when inputs cross the roof-capacity threshold', () => {
      const sufficient = estimateSolarSavings(DEFAULT_INPUT);
      expect(sufficient.roofLimited).toBeFalse();

      const limited = estimateSolarSavings({
        monthlyBillBRL: 800,
        roofAreaM2: 80,
        sunExposure: 'moderada',
      });
      expect(limited.roofLimited).toBeTrue();

      const restored = estimateSolarSavings({
        monthlyBillBRL: 450,
        roofAreaM2: 80,
        sunExposure: 'moderada',
      });
      expect(restored.roofLimited).toBeFalse();
    });
  });
});
