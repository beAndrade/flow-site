import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  protected readonly menuOpen = signal(false);

  protected readonly sections = [
    { label: 'A Flow', href: '#a-flow' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Como trabalhamos', href: '#como-trabalhamos' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
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
}
