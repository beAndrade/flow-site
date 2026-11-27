import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

const scrollIdleMs = 900;
const scrollThumbMinPx = 40;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly scrollRail = viewChild<ElementRef<HTMLElement>>('scrollRail');
  private readonly scrollThumb = viewChild<ElementRef<HTMLElement>>('scrollThumb');

  title = 'Flow Energies';

  constructor() {
    afterNextRender(() => this.initOverlayScrollbar());
  }

  private initOverlayScrollbar(): void {
    const rail = this.scrollRail()?.nativeElement;
    const thumb = this.scrollThumb()?.nativeElement;
    if (!rail || !thumb) {
      return;
    }

    let idleTimer = 0;

    const syncThumb = (): void => {
      const view = window.innerHeight;
      const doc = document.documentElement.scrollHeight;
      if (doc <= view + 1) {
        rail.classList.remove('is-visible');
        return;
      }

      const maxScroll = doc - view;
      const thumbHeight = Math.max((view / doc) * view, scrollThumbMinPx);
      const top = (window.scrollY / maxScroll) * (view - thumbHeight);
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${top}px)`;
    };

    const onScroll = (): void => {
      syncThumb();
      rail.classList.add('is-visible');
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        rail.classList.remove('is-visible');
      }, scrollIdleMs);
    };

    syncThumb();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', syncThumb, { passive: true });

    this.destroyRef.onDestroy(() => {
      window.clearTimeout(idleTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', syncThumb);
    });
  }
}
