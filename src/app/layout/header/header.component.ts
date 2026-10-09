import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);

  protected readonly sections = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre a Flow', href: '#sobre' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
