import { Component, computed, signal } from '@angular/core';

import { DigitOdometerComponent } from './digit-odometer/digit-odometer.component';
import { estimateSolarSavings } from './solar-estimate.engine';
import { SunExposure } from './solar-estimate.types';

const MONTHLY_BILL_MIN = 100;
const MONTHLY_BILL_MAX = 5000;
const MONTHLY_BILL_STEP = 50;
const MONTHLY_BILL_DEFAULT = 450;

const ROOF_AREA_MIN = 30;
const ROOF_AREA_MAX = 500;
const ROOF_AREA_STEP = 5;
const ROOF_AREA_DEFAULT = 80;

const PAYBACK_SCALE_MIN_YEARS = 1;
const PAYBACK_SCALE_MAX_YEARS = 25;

const thousandsFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

/** BRL with comma thousands separator (e.g. "R$ 1,000"), per visual direction. */
function formatBrl(value: number): string {
  return `R$ ${thousandsFormatter.format(value)}`;
}

function fillPercent(value: number, min: number, max: number): string {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  return `${Math.min(100, Math.max(0, pct))}%`;
}

/** Same WhatsApp destination and default message as the Hero primary CTA. */
const WHATSAPP_URL =
  'https://wa.me/5522998449702?text=Ol%C3%A1!%20Conheci%20a%20Flow%20Energies%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20a%20empresa%20e%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar.';

@Component({
  selector: 'app-simulacao',
  imports: [DigitOdometerComponent],
  templateUrl: './simulacao.component.html',
  styleUrl: './simulacao.component.scss',
})
export class SimulacaoComponent {
  protected readonly whatsappUrl = WHATSAPP_URL;

  protected readonly monthlyBillMin = MONTHLY_BILL_MIN;
  protected readonly monthlyBillMax = MONTHLY_BILL_MAX;
  protected readonly monthlyBillStep = MONTHLY_BILL_STEP;

  protected readonly roofAreaMin = ROOF_AREA_MIN;
  protected readonly roofAreaMax = ROOF_AREA_MAX;
  protected readonly roofAreaStep = ROOF_AREA_STEP;

  /** Average monthly electricity spend in BRL. */
  protected readonly monthlyBillBRL = signal(MONTHLY_BILL_DEFAULT);

  /**
   * Available roof area in m².
   * Premise (H4b): 100% of the entered area is available — no utilization factor applied here.
   */
  protected readonly roofAreaM2 = signal(ROOF_AREA_DEFAULT);

  protected readonly sunExposure = signal<SunExposure>('moderada');

  protected readonly estimate = computed(() =>
    estimateSolarSavings({
      monthlyBillBRL: this.monthlyBillBRL(),
      roofAreaM2: this.roofAreaM2(),
      sunExposure: this.sunExposure(),
    }),
  );

  protected readonly monthlyBillLabel = computed(() => formatBrl(this.monthlyBillBRL()));

  protected readonly monthlyBillMinLabel = formatBrl(MONTHLY_BILL_MIN);
  protected readonly monthlyBillMaxLabel = formatBrl(MONTHLY_BILL_MAX);

  protected readonly roofAreaLabel = computed(() => `${this.roofAreaM2()} m²`);

  protected readonly monthlyBillFill = computed(() =>
    fillPercent(this.monthlyBillBRL(), MONTHLY_BILL_MIN, MONTHLY_BILL_MAX),
  );

  protected readonly roofAreaFill = computed(() =>
    fillPercent(this.roofAreaM2(), ROOF_AREA_MIN, ROOF_AREA_MAX),
  );

  protected readonly paybackFill = computed(() => {
    const years = this.estimate().paybackYears;
    return years === null
      ? '0%'
      : fillPercent(years, PAYBACK_SCALE_MIN_YEARS, PAYBACK_SCALE_MAX_YEARS);
  });

  protected onMonthlyBillInput(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isFinite(value)) {
      this.monthlyBillBRL.set(value);
    }
  }

  protected onRoofAreaInput(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isFinite(value)) {
      this.roofAreaM2.set(value);
    }
  }

  protected onSunExposureChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'baixa' || value === 'moderada' || value === 'alta') {
      this.sunExposure.set(value);
    }
  }
}
