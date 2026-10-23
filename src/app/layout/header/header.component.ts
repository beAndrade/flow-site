import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

const desktopNavQuery = '(min-width: 56rem)';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  private focusInMobileMenu = false;
  private focusOnMenuButton = false;
  private focusInDesktopControls = false;

  protected readonly menuOpen = signal(false);

  protected readonly sections = [
    { label: 'A Flow', href: '#a-flow' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Como trabalhamos', href: '#como-trabalhamos' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  constructor() {
    afterNextRender(() => {
      const query = window.matchMedia(desktopNavQuery);
      const onChange = (event: MediaQueryListEvent) => {
        this.onDesktopNavChange(event.matches);
      };

      query.addEventListener('change', onChange);
      this.destroyRef.onDestroy(() => query.removeEventListener('change', onChange));
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:focusin', ['$event'])
  protected onFocusIn(event: FocusEvent): void {
    const target = event.target;
    if (!(target instanceof Node) || target === document.body || target === document.documentElement) {
      return;
    }

    if (!this.host.nativeElement.contains(target)) {
      this.focusOnMenuButton = false;
      this.focusInMobileMenu = false;
      this.focusInDesktopControls = false;
      return;
    }

    this.focusOnMenuButton = target === this.menuButton()?.nativeElement;
    this.focusInMobileMenu = this.mobileMenuContains(target);
    this.focusInDesktopControls = this.desktopControlsContain(target);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (!this.menuOpen()) {
      return;
    }

    this.closeMenu();

    const button = this.menuButton()?.nativeElement;
    if (button && button.getClientRects().length > 0) {
      button.focus({ focusVisible: true } as FocusOptions);
    }
  }

  private onDesktopNavChange(matches: boolean): void {
    if (matches) {
      const moveFocus = this.mobileControlIsFocused();
      if (this.menuOpen()) {
        this.closeMenu();
      }

      if (moveFocus) {
        this.focusInMobileMenu = false;
        this.focusOnMenuButton = false;
        requestAnimationFrame(() => this.focusFirstDesktopLink());
      }
      return;
    }

    if (!this.desktopControlIsFocused()) {
      return;
    }

    this.focusInDesktopControls = false;
    requestAnimationFrame(() => this.focusMenuButtonIfVisible());
  }

  private mobileControlIsFocused(): boolean {
    const active = document.activeElement;
    if (active instanceof Node && this.host.nativeElement.contains(active)) {
      const button = this.menuButton()?.nativeElement;
      if (active === button || this.mobileMenuContains(active)) {
        return true;
      }
    }

    return this.focusInMobileMenu || this.focusOnMenuButton;
  }

  private desktopControlIsFocused(): boolean {
    const active = document.activeElement;
    if (active instanceof Node && this.desktopControlsContain(active)) {
      return true;
    }

    return this.focusInDesktopControls;
  }

  private focusFirstDesktopLink(): void {
    const link = this.host.nativeElement.querySelector('.site-nav--desktop a');
    if (link instanceof HTMLAnchorElement && link.getClientRects().length > 0) {
      link.focus({ focusVisible: true } as FocusOptions);
      this.focusInDesktopControls = true;
    }
  }

  private focusMenuButtonIfVisible(): void {
    const button = this.menuButton()?.nativeElement;
    if (button && button.getClientRects().length > 0) {
      button.focus({ focusVisible: true } as FocusOptions);
      this.focusInMobileMenu = false;
    }
  }

  private mobileMenuContains(target: Node): boolean {
    return this.host.nativeElement.querySelector('#site-menu')?.contains(target) ?? false;
  }

  private desktopControlsContain(target: Node): boolean {
    const desktopNav = this.host.nativeElement.querySelector('.site-nav--desktop');
    const desktopCta = this.host.nativeElement.querySelector('.header-cta--bar');
    return desktopNav?.contains(target) === true || desktopCta === target;
  }
}
