import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitOdometerComponent } from './digit-odometer.component';

describe('DigitOdometerComponent', () => {
  let fixture: ComponentFixture<DigitOdometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitOdometerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DigitOdometerComponent);
  });

  it('renders null as an em dash without digit columns', () => {
    fixture.componentRef.setInput('value', null);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.textContent?.trim()).toBe('—');
    expect(host.querySelector('.digit-odometer__digit')).toBeNull();
  });

  it('formats currency-brl with stable prefix characters', () => {
    fixture.componentRef.setInput('value', 5400);
    fixture.componentRef.setInput('format', 'currency-brl');
    fixture.detectChanges();

    const root = fixture.nativeElement.querySelector('.digit-odometer') as HTMLElement;
    const label = root.querySelector('.digit-odometer__sr-only')?.textContent ?? '';
    expect(label).toBe('R$ 5,400');
    expect(label.startsWith('R$')).toBeTrue();
    expect(root.querySelectorAll('.digit-odometer__static').length).toBeGreaterThan(0);
  });

  it('formats decimal-1 with suffix', () => {
    fixture.componentRef.setInput('value', 4.511);
    fixture.componentRef.setInput('format', 'decimal-1');
    fixture.componentRef.setInput('suffix', ' anos');
    fixture.detectChanges();

    const label =
      fixture.nativeElement.querySelector('.digit-odometer__sr-only')?.textContent ?? '';
    expect(label).toBe('4,5 anos');
  });

  it('formats decimal-1-dot with a dot decimal separator', () => {
    fixture.componentRef.setInput('value', 4.511);
    fixture.componentRef.setInput('format', 'decimal-1-dot');
    fixture.detectChanges();

    const label =
      fixture.nativeElement.querySelector('.digit-odometer__sr-only')?.textContent ?? '';
    expect(label).toBe('4.5');
  });

  it('formats co2 in tonnes with a dot decimal separator', () => {
    fixture.componentRef.setInput('format', 'co2');

    fixture.componentRef.setInput('value', 398);
    fixture.detectChanges();
    let label =
      fixture.nativeElement.querySelector('.digit-odometer__sr-only')?.textContent ?? '';
    expect(label).toBe('0.40');

    fixture.componentRef.setInput('value', 1500);
    fixture.detectChanges();
    label =
      fixture.nativeElement.querySelector('.digit-odometer__sr-only')?.textContent ?? '';
    expect(label).toBe('1.50');
  });
});
