import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

/** Built-in formatters matching the simulador result labels. */
export type DigitOdometerFormat =
  | 'currency-brl'
  | 'decimal-1'
  | 'decimal-1-dot'
  | 'integer'
  | 'co2';

type OdometerSlot =
  | { kind: 'digit'; digit: number; fromRight: number; key: string }
  | { kind: 'static'; char: string; key: string; tight: boolean };

const thousandsFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

const oneDecimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const oneDecimalDotFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const integerFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
});

const tonnesFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** CO₂ in tonnes, dot as decimal separator (e.g. 398 kg → "0.40"); unit rendered by the host. */
function formatCo2(kg: number): string {
  return tonnesFormatter.format(kg / 1000);
}

function formatValue(value: number, format: DigitOdometerFormat): string {
  switch (format) {
    case 'currency-brl':
      return `R$ ${thousandsFormatter.format(value)}`;
    case 'decimal-1':
      return oneDecimalFormatter.format(value);
    case 'decimal-1-dot':
      return oneDecimalDotFormatter.format(value);
    case 'co2':
      return formatCo2(value);
    case 'integer':
    default:
      return integerFormatter.format(value);
  }
}

/** Split formatted text into digit columns (keyed from the right) and static spans. */
function toSlots(text: string): OdometerSlot[] {
  const chars = Array.from(text);
  const digitFromRight: number[] = new Array(chars.length);
  let fromRight = 0;

  for (let i = chars.length - 1; i >= 0; i--) {
    if (/\d/.test(chars[i]!)) {
      digitFromRight[i] = fromRight++;
    }
  }

  return chars.map((char, index) => {
    if (/\d/.test(char)) {
      const fromRight = digitFromRight[index] ?? 0;
      return {
        kind: 'digit' as const,
        digit: Number(char),
        fromRight,
        key: `d-${fromRight}`,
      };
    }
    return {
      kind: 'static' as const,
      char,
      key: `s-${index}-${char}`,
      tight: char === ' ' && chars[index - 1] === '$',
    };
  });
}

/**
 * Vertical digit odometer for numeric result displays.
 * SSR-safe: static final value until the browser can opt into motion.
 */
@Component({
  selector: 'app-digit-odometer',
  templateUrl: './digit-odometer.component.html',
  styleUrl: './digit-odometer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitOdometerComponent {
  /** Numeric target; `null` shows {@link nullDisplay} without digit motion. */
  readonly value = input<number | null>(null);

  readonly format = input<DigitOdometerFormat>('integer');
  readonly prefix = input('');
  readonly suffix = input('');
  readonly nullDisplay = input('—');

  protected readonly digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

  /** Prefer no motion until `afterNextRender` (SSR + hydration safe). */
  private readonly reducedMotion = signal(true);
  private readonly browserReady = signal(false);

  protected readonly displayText = computed(() => {
    const value = this.value();
    if (value === null) {
      return this.nullDisplay();
    }
    return `${this.prefix()}${formatValue(value, this.format())}${this.suffix()}`;
  });

  protected readonly slots = computed(() => toSlots(this.displayText()));

  protected readonly animated = computed(
    () =>
      this.browserReady() &&
      !this.reducedMotion() &&
      this.value() !== null,
  );

  constructor() {
    afterNextRender(() => {
      const prefersReduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.reducedMotion.set(prefersReduce);
      this.browserReady.set(true);
    });
  }

  /** Longer transition for more-significant digits; LSD stays snappier. */
  protected digitDurationMs(fromRight: number): number {
    return 420 + fromRight * 45;
  }
}
