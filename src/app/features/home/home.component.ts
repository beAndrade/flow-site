import { afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';

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

  constructor() {
    afterNextRender(() => {
      const video = this.heroVideo()?.nativeElement;
      if (!video) {
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

      applyRate();
      video.addEventListener('play', applyRate);
      video.addEventListener('timeupdate', trimEnd);
      this.destroyRef.onDestroy(() => {
        video.removeEventListener('play', applyRate);
        video.removeEventListener('timeupdate', trimEnd);
      });
    });
  }
}
