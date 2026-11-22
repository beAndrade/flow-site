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

/** Sync with Sass `$bp-nav` in `src/styles/_breakpoints.scss` (64rem / 1024px). */
const BP_NAV = '64rem';
const desktopNavQuery = `(min-width: ${BP_NAV})`;

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
  private scrollLocked = false;
  private lockedScrollY = 0;

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly scrollProgress = signal(0);

  protected readonly sections = [
    { label: 'A Flow', href: '#a-flow' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Simule sua economia', href: '#simulacao' },
    { label: 'Como trabalhamos', href: '#como-trabalhamos' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Contato', href: '#contato' },
  ];

  constructor() {
    afterNextRender(() => {
      const query = window.matchMedia(desktopNavQuery);
      const onChange = (event: MediaQueryListEvent) => {
        this.onDesktopNavChange(event.matches);
      };

      query.addEventListener('change', onChange);

      // Estado do fundo + barra de progresso (leitura do scroll, sem excesso de updates).
      const scrollThresholdPx = 8;
      const syncScrollChrome = () => {
        // While body is position:fixed, window.scrollY ≈ 0 — freeze chrome until unlock.
        if (this.scrollLocked) {
          return;
        }

        const nextScrolled = window.scrollY > scrollThresholdPx;
        if (this.scrolled() !== nextScrolled) {
          this.scrolled.set(nextScrolled);
        }

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const raw = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
        const nextProgress = Math.min(100, Math.max(0, Math.round(raw * 10) / 10));
        if (this.scrollProgress() !== nextProgress) {
          this.scrollProgress.set(nextProgress);
        }
      };

      // Fallback when viewport crosses BP_NAV without a matchMedia "change" (e.g. some emulators).
      const syncNavBreakpoint = () => {
        if (query.matches && (this.menuOpen() || this.scrollLocked)) {
          this.onDesktopNavChange(true);
        }
      };

      syncScrollChrome();
      window.addEventListener('scroll', syncScrollChrome, { passive: true });
      window.addEventListener('resize', syncScrollChrome, { passive: true });
      window.addEventListener('resize', syncNavBreakpoint, { passive: true });

      this.destroyRef.onDestroy(() => {
        query.removeEventListener('change', onChange);
        window.removeEventListener('scroll', syncScrollChrome);
        window.removeEventListener('resize', syncScrollChrome);
        window.removeEventListener('resize', syncNavBreakpoint);
        this.unlockScroll({ restorePosition: false });
        this.setBackgroundInert(false);
      });
    });
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
      return;
    }

    this.openMenu();
  }

  /**
   * Close overlay. Default restores locked scroll (X, Escape, scrim, WhatsApp, logo).
   * Hash in-page links must use `closeMenuForHashNav()` so destination scroll is not fought.
   */
  protected closeMenu(options?: { restoreScroll?: boolean }): void {
    if (!this.menuOpen()) {
      return;
    }

    this.menuOpen.set(false);
    this.unlockScroll({ restorePosition: options?.restoreScroll !== false });
  }

  /** Close for in-page hash links: unlock styles without restoring lockedScrollY. */
  protected closeMenuForHashNav(): void {
    this.closeMenu({ restoreScroll: false });
  }

  protected closeMenuFromScrim(): void {
    if (!this.menuOpen()) {
      return;
    }

    this.closeMenu();
    this.restoreFocusToMenuButton();
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

  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.onEscape();
      return;
    }

    if (event.key === 'Tab' && this.menuOpen()) {
      this.trapFocus(event);
    }
  }

  private onEscape(): void {
    if (!this.menuOpen()) {
      return;
    }

    this.closeMenu();
    this.restoreFocusToMenuButton();
  }

  private openMenu(): void {
    this.menuOpen.set(true);
    this.lockScroll();
    this.setBackgroundInert(true);
  }

  private lockScroll(): void {
    if (this.scrollLocked || typeof document === 'undefined') {
      return;
    }

    this.lockedScrollY = window.scrollY;
    this.scrollLocked = true;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.lockedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  private unlockScroll(options?: { restorePosition?: boolean }): void {
    if (!this.scrollLocked || typeof document === 'undefined') {
      this.setBackgroundInert(false);
      return;
    }

    const restorePosition = options?.restorePosition !== false;
    const y = this.lockedScrollY;

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    this.scrollLocked = false;
    this.setBackgroundInert(false);

    if (restorePosition) {
      this.restoreScrollPositionInstant(y);
    }
  }

  /**
   * Bypass global `html { scroll-behavior: smooth }` for one restore only —
   * no permanent globals change.
   */
  private restoreScrollPositionInstant(y: number): void {
    const html = document.documentElement;
    const previousInline = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    try {
      window.scrollTo({ top: y, left: 0, behavior: 'instant' as ScrollBehavior });
    } catch {
      window.scrollTo(0, y);
    }

    // If the engine ignored `instant`, ensure we landed on y without smooth animation.
    if (Math.abs(window.scrollY - y) > 1) {
      window.scrollTo(0, y);
    }

    html.style.scrollBehavior = previousInline;
  }

  /** Inert page chrome outside the header/sheet so focus stays in the dialog. */
  private setBackgroundInert(enabled: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }

    const main = document.getElementById('conteudo');
    const footer = document.querySelector('footer');

    for (const el of [main, footer]) {
      if (!(el instanceof HTMLElement)) {
        continue;
      }
      if (enabled) {
        el.setAttribute('inert', '');
      } else {
        el.removeAttribute('inert');
      }
    }
  }

  private trapFocus(event: KeyboardEvent): void {
    const focusables = this.getMenuFocusables();
    if (focusables.length === 0) {
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (event.shiftKey) {
      if (active === first || !this.isWithinFocusTrap(active)) {
        event.preventDefault();
        last.focus();
      }
      return;
    }

    if (active === last || !this.isWithinFocusTrap(active)) {
      event.preventDefault();
      first.focus();
    }
  }

  private getMenuFocusables(): HTMLElement[] {
    const button = this.menuButton()?.nativeElement;
    const menu = this.host.nativeElement.querySelector('#site-menu');
    const items: HTMLElement[] = [];

    if (button && button.getClientRects().length > 0 && !button.disabled) {
      items.push(button);
    }

    if (!(menu instanceof HTMLElement) || menu.hasAttribute('inert')) {
      return items;
    }

    const candidates = menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    candidates.forEach((el) => {
      if (el.getClientRects().length > 0) {
        items.push(el);
      }
    });

    return items;
  }

  private isWithinFocusTrap(target: Element | null): boolean {
    if (!(target instanceof Node)) {
      return false;
    }

    const button = this.menuButton()?.nativeElement;
    if (button && target === button) {
      return true;
    }

    return this.mobileMenuContains(target);
  }

  private restoreFocusToMenuButton(): void {
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
      } else if (this.scrollLocked) {
        this.unlockScroll();
      } else {
        this.setBackgroundInert(false);
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
    return desktopNav?.contains(target) === true;
  }
}
