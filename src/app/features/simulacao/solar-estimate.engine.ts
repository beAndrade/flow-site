import {
  ANNUAL_GENERATION_KWH_PER_KWP,
  CO2_KG_PER_KWH,
  COST_PER_KWP_BRL,
  EXPOSURE_FACTOR,
  KG_CO2_PER_TREE_YEAR,
  KW_PER_M2,
  TARIFF_BRL_PER_KWH,
} from './solar-estimate.config';
import {
  SolarEstimateInput,
  SolarEstimateResult,
  SunExposure,
} from './solar-estimate.types';

/** Coerce to a finite non-negative number; NaN / Infinity / negatives → 0. */
function safeNonNegative(value: number): number {
  if (!Number.isFinite(value) || value < 0) {
    return 0;
  }
  return value;
}

function exposureFactorFor(exposure: SunExposure): number {
  const factor = EXPOSURE_FACTOR[exposure];
  return safeNonNegative(factor);
}

/**
 * Pure provisional solar estimate (H4c).
 * Coefficients are stubs — not Flow commercial claims.
 */
export function estimateSolarSavings(
  input: SolarEstimateInput,
): SolarEstimateResult {
  const monthlyBillBRL = safeNonNegative(input.monthlyBillBRL);
  const roofAreaM2 = safeNonNegative(input.roofAreaM2);
  const exposureFactor = exposureFactorFor(input.sunExposure);

  const roofCapacityKw = roofAreaM2 * KW_PER_M2;
  const annualBillBRL = monthlyBillBRL * 12;

  const annualConsumptionKwh =
    TARIFF_BRL_PER_KWH > 0 ? annualBillBRL / TARIFF_BRL_PER_KWH : 0;

  const generationPerKw = ANNUAL_GENERATION_KWH_PER_KWP * exposureFactor;
  const requiredSystemKw =
    generationPerKw > 0 ? annualConsumptionKwh / generationPerKw : 0;

  const systemKw = safeNonNegative(Math.min(requiredSystemKw, roofCapacityKw));

  /** Roof clamps system size when required capacity exceeds area (epsilon for float noise). */
  const roofLimited = requiredSystemKw > roofCapacityKw + 1e-9;

  const annualGenerationKwh =
    systemKw * ANNUAL_GENERATION_KWH_PER_KWP * exposureFactor;

  const annualSavingsBRL = safeNonNegative(
    Math.min(annualBillBRL, annualGenerationKwh * TARIFF_BRL_PER_KWH),
  );

  const systemCostBRL = systemKw * COST_PER_KWP_BRL;

  const paybackYears =
    annualSavingsBRL > 0
      ? safeNonNegative(systemCostBRL / annualSavingsBRL)
      : null;

  const co2AvoidedKgPerYear = safeNonNegative(
    annualGenerationKwh * CO2_KG_PER_KWH,
  );

  const treesEquivalent =
    KG_CO2_PER_TREE_YEAR > 0
      ? Math.max(0, Math.floor(co2AvoidedKgPerYear / KG_CO2_PER_TREE_YEAR))
      : 0;

  return {
    annualSavingsBRL,
    paybackYears,
    systemKw,
    co2AvoidedKgPerYear,
    treesEquivalent,
    roofLimited,
  };
}
