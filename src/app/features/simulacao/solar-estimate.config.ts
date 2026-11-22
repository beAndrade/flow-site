import { SunExposure } from './solar-estimate.types';

/**
 * PROVISIONAL stubs for the H4c solar estimate MVP.
 * Not Flow Energies tariffs, prices, or performance claims.
 * Replace when the Flow spreadsheet methodology is available.
 */

/** PROVISIONAL — kWp capacity heuristic per m² of roof. */
export const KW_PER_M2 = 0.12;

/** PROVISIONAL — annual generation (kWh) per kWp at full exposure factor 1.0. */
export const ANNUAL_GENERATION_KWH_PER_KWP = 1500;

/** PROVISIONAL — illustrative tariff (BRL/kWh) for bill ↔ kWh conversion. */
export const TARIFF_BRL_PER_KWH = 0.95;

/** PROVISIONAL — illustrative system cost (BRL/kWp) for payback only; not a Flow price. */
export const COST_PER_KWP_BRL = 4500;

/** PROVISIONAL — sun-exposure multipliers applied to generation. */
export const EXPOSURE_FACTOR: Record<SunExposure, number> = {
  baixa: 0.55,
  moderada: 0.7,
  alta: 0.8,
};

/** PROVISIONAL — illustrative CO₂ intensity (kg/kWh). */
export const CO2_KG_PER_KWH = 0.07;

/** PROVISIONAL — illustrative tree equivalence (kg CO₂ / tree·year). */
export const KG_CO2_PER_TREE_YEAR = 21;
