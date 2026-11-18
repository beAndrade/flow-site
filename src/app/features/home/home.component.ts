import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';

const heroPlaybackRate = 0.9;
const heroEndEarlySeconds = 1.5;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly heroVideo = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');

  /** Vídeo com frame reproduzível — esconde o poster estático. */
  protected readonly heroVideoReady = signal(false);
  /** Falha ou reduced-motion — mantém o poster como fallback. */
  protected readonly heroUsePoster = signal(false);

  constructor() {
    afterNextRender(() => {
      const video = this.heroVideo()?.nativeElement;
      if (!video) {
        this.heroUsePoster.set(true);
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.heroUsePoster.set(true);
        return;
      }

      const applyRate = () => {
        video.playbackRate = heroPlaybackRate;
      };

      const trimEnd = () => {
        const duration = video.duration;
        if (!Number.isFinite(duration) || duration <= heroEndEarlySeconds) {
          return;
        }

        if (video.currentTime >= duration - heroEndEarlySeconds) {
          video.currentTime = 0;
        }
      };

      const markReady = () => {
        applyRate();
        this.heroVideoReady.set(true);
        this.heroUsePoster.set(false);
      };

      const markFailed = () => {
        this.heroVideoReady.set(false);
        this.heroUsePoster.set(true);
      };

      applyRate();
      video.addEventListener('play', applyRate);
      video.addEventListener('playing', markReady);
      video.addEventListener('loadeddata', markReady);
      video.addEventListener('error', markFailed);
      video.addEventListener('timeupdate', trimEnd);

      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        markReady();
      }

      void video.play().catch(() => {
        // Autoplay bloqueado ou mídia indisponível: poster permanece.
        if (!this.heroVideoReady()) {
          markFailed();
        }
      });

      this.destroyRef.onDestroy(() => {
        video.removeEventListener('play', applyRate);
        video.removeEventListener('playing', markReady);
        video.removeEventListener('loadeddata', markReady);
        video.removeEventListener('error', markFailed);
        video.removeEventListener('timeupdate', trimEnd);
      });
    });
  }
}
