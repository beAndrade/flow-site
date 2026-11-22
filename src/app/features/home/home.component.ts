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
  private readonly heroVideo = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');

  /** Vídeo com frame reproduzível — esconde o poster estático. */
  protected readonly heroVideoReady = signal(false);
  /** Falha ou reduced-motion — mantém o poster como fallback. */
  protected readonly heroUsePoster = signal(false);

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

  protected buildServiceWhatsAppUrl(serviceName: string): string {
    const text = `Olá! Acessei o site da Flow Energies e gostaria de conversar sobre ${serviceName}. Poderiam me orientar?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }

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
