import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { SimulacaoComponent } from '../simulacao/simulacao.component';

const heroPlaybackRate = 0.9;
const heroEndEarlySeconds = 1.5;
const whatsappNumber = '5522998449702';

export interface SolutionCard {
  title: string;
  description: string;
  featured: boolean;
  badge?: string;
}

@Component({
  selector: 'app-home',
  imports: [SimulacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly heroVideo = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');

  /** Vídeo com frame reproduzível — esconde o poster estático. */
  protected readonly heroVideoReady = signal(false);
  /** Falha ou reduced-motion — mantém o poster como fallback. */
  protected readonly heroUsePoster = signal(false);
  /** Evita init duplicada (retry após corrida SSG/hydration). */
  private heroVideoInitialized = false;

  protected readonly solutions: SolutionCard[] = [
    {
      title: 'Energia Solar Fotovoltaica',
      description:
        'Sistemas on-grid, off-grid e híbridos. Projeto, dimensionamento, estudo de viabilidade, instalação e manutenção para empresas e residências.',
      featured: true,
      badge: 'Carro-Chefe',
    },
    {
      title: 'Projetos Elétricos e Subestações',
      description:
        'Aumento de carga, subestações, quadros de distribuição, condutores, proteções, aterramento e SPDA.',
      featured: true,
      badge: 'Alta Demanda',
    },
    {
      title: 'Regularização e Conformidade',
      description: 'ART, NR-10, laudos e exigências de concessionárias.',
      featured: false,
    },
    {
      title: 'Consultoria Energética',
      description:
        'Análise de faturamento, fator de potência, enquadramento tarifário e eficiência energética.',
      featured: false,
    },
    {
      title: 'Perícia e Assistência Técnica',
      description: 'Vistorias, análise de sinistros, laudos periciais e pareceres.',
      featured: false,
    },
    {
      title: 'Recarga de Veículos Elétricos',
      description: 'Projetos de estações de recarga e planos de negócios para investidores.',
      featured: false,
    },
    {
      title: 'Documentação Técnica',
      description: 'Memoriais, relatórios e suporte técnico para defesas jurídicas.',
      featured: false,
    },
  ];

  protected readonly featuredSolutions = this.solutions.filter((item) => item.featured);
  protected readonly standardSolutions = this.solutions.filter((item) => !item.featured);

  /** Flagship tiles — short labels for A Flow panel density (copy TBD). */
  protected readonly flagships = [
    { title: 'Solar', label: 'Carro-chefe' },
    { title: 'Elétrica', label: 'Alta demanda' },
    { title: 'ART', label: 'Conformidade' },
  ] as const;

  protected buildServiceWhatsAppUrl(serviceName: string): string {
    const text = `Olá! Acessei o site da Flow Energies e gostaria de conversar sobre ${serviceName}. Poderiam me orientar?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }

  constructor() {
    afterNextRender(() => {
      this.scheduleHeroVideoInit(false);
    });

    afterNextRender(() => {
      this.initSectionReveal();
    });
  }

  private resolveHeroVideoElement(): HTMLVideoElement | null {
    const fromView = this.heroVideo()?.nativeElement;
    if (fromView) {
      return fromView;
    }

    const fromDom = this.host.nativeElement.querySelector('video.hero__video');
    return fromDom instanceof HTMLVideoElement ? fromDom : null;
  }

  /**
   * Resolve o `<video>` após o paint. Ausência temporária (SSG/hydration)
   * agenda um único retry; ausência definitiva cai no poster.
   */
  private scheduleHeroVideoInit(isRetry: boolean): void {
    if (this.heroVideoInitialized) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.heroUsePoster.set(true);
      return;
    }

    const video = this.resolveHeroVideoElement();
    if (!video) {
      if (!isRetry) {
        queueMicrotask(() => {
          requestAnimationFrame(() => this.scheduleHeroVideoInit(true));
        });
        return;
      }

      this.heroVideoReady.set(false);
      this.heroUsePoster.set(true);
      return;
    }

    this.initHeroVideo(video);
  }

  private initHeroVideo(video: HTMLVideoElement): void {
    if (this.heroVideoInitialized) {
      return;
    }
    this.heroVideoInitialized = true;

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
  }

  private initSectionReveal(): void {
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      if (typeof IntersectionObserver === 'undefined') {
        return;
      }

      const hostEl = this.host.nativeElement as HTMLElement;
      const targets = Array.from(hostEl.querySelectorAll('[data-reveal]')).filter(
        (node): node is HTMLElement => node instanceof HTMLElement,
      );
      if (targets.length === 0) {
        return;
      }

      let observer: IntersectionObserver | null = null;

      const reveal = (el: HTMLElement): void => {
        if (el.classList.contains('is-revealed')) {
          return;
        }
        el.classList.add('is-revealed');
        observer?.unobserve(el);
      };

      const isIntersectingViewport = (el: HTMLElement): boolean => {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        return rect.bottom > 0 && rect.right > 0 && rect.top < viewportHeight && rect.left < viewportWidth;
      };

      const revealHashTarget = (): void => {
        const hash = window.location.hash;
        if (!hash || hash.length < 2) {
          return;
        }

        const id = decodeURIComponent(hash.slice(1));
        if (!id) {
          return;
        }

        const anchored = hostEl.querySelector(`#${CSS.escape(id)}`);
        if (!(anchored instanceof HTMLElement)) {
          return;
        }

        const revealEl = anchored.matches('[data-reveal]')
          ? anchored
          : anchored.closest('[data-reveal]');
        if (revealEl instanceof HTMLElement && hostEl.contains(revealEl)) {
          reveal(revealEl);
        }
      };

      const onHashChange = (): void => {
        revealHashTarget();
      };

      const onFocusIn = (event: FocusEvent): void => {
        const focusTarget = event.target;
        if (!(focusTarget instanceof Element)) {
          return;
        }

        const revealEl = focusTarget.closest('[data-reveal]:not(.is-revealed)');
        if (revealEl instanceof HTMLElement && hostEl.contains(revealEl)) {
          reveal(revealEl);
        }
      };

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
              reveal(entry.target);
            }
          }
        },
        {
          rootMargin: '0px 0px -8% 0px',
          threshold: 0.12,
        },
      );

      for (const el of targets) {
        if (isIntersectingViewport(el)) {
          reveal(el);
          continue;
        }
        observer.observe(el);
      }

      // Flush any immediate intersection records, then protect deep-link targets.
      for (const entry of observer.takeRecords()) {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          reveal(entry.target);
        }
      }
      revealHashTarget();

      window.addEventListener('hashchange', onHashChange);
      hostEl.addEventListener('focusin', onFocusIn);

      this.destroyRef.onDestroy(() => {
        observer?.disconnect();
        observer = null;
        window.removeEventListener('hashchange', onHashChange);
        hostEl.removeEventListener('focusin', onFocusIn);
      });
    } catch {
      // Progressive enhancement: leave content visible on any init failure.
    }
  }
}
