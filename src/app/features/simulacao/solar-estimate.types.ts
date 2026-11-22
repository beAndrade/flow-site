/** Exposure tier for the solar estimate inputs. */
export type SunExposure = 'baixa' | 'moderada' | 'alta';

/** Snapshot of user-facing simulator inputs. */
export interface SolarEstimateInput {
  monthlyBillBRL: number;
  roofAreaM2: number;
  sunExposure: SunExposure;
}

/** Pure-engine output for the provisional solar estimate. */
export interface SolarEstimateResult {
  annualSavingsBRL: number;
  /** Years until payback; `null` when annual savings are not positive. */
  paybackYears: number | null;
  systemKw: number;
  co2AvoidedKgPerYear: number;
  treesEquivalent: number;
  /**
   * True when the consumption-driven required system exceeds roof capacity
   * (`requiredSystemKw > roofCapacityKw`), so `systemKw` is clamped by area.
   * False when the informed roof area can host the required system
   * (`roofCapacityKw >= requiredSystemKw`).
   */
  roofLimited: boolean;
}
