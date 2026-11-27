# Flow Energies — Design System

> **Status:** V1 — Escalas consolidadas (pós Fases A–E)
>
> Este documento traduz as diretrizes definidas em `docs/visual-identity-flow-energies.md` para um sistema visual técnico aplicável ao `flow-site`.
>
> **Fonte de verdade técnica:** o código commitado em `src/styles/` (`_tokens.scss`, `_typography.scss`, `_breakpoints.scss`, `_globals.scss`, `_utilities.scss`) e o entry `src/styles.scss`. Este documento descreve o estado implementado; não inventa tokens, classes ou comportamentos ausentes do código.

---

## 01 — Objetivo

O Design System estabelece regras reutilizáveis para:

- cores;
- tipografia;
- espaçamento;
- grid;
- containers;
- bordas;
- sombras;
- botões;
- CTAs;
- componentes;
- estados;
- responsividade;
- acessibilidade;
- linguagem visual;
- motion.

O objetivo é evitar decisões visuais isoladas durante a implementação.

Toda nova seção ou componente deve reutilizar o sistema existente sempre que possível.

---

## 02 — Princípios

### 01 — Clareza antes de decoração

O usuário deve compreender rapidamente:

1. onde está;
2. o que a Flow oferece;
3. por que isso importa;
4. qual ação pode realizar.

### 02 — Azul é estrutura

O azul representa a base tecnológica e institucional da marca.

### 03 — Amarelo é destaque

O amarelo/dourado representa energia e deve chamar atenção para elementos estratégicos.

### 04 — Conteúdo real tem prioridade

Fotos, projetos, equipe e informações reais devem substituir placeholders e imagens genéricas assim que estiverem disponíveis.

### 05 — Espaço é parte da identidade

Espaçamento, respiro e hierarquia devem ter prioridade sobre o preenchimento excessivo da interface.

### 06 — Mobile-first

Toda decisão deve funcionar primeiro em telas pequenas e depois ganhar complexidade em telas maiores.

### 07 — Conversão sem agressividade

O WhatsApp é o principal canal de conversão da V1, mas CTAs não devem dominar visualmente toda a interface.

### 08 — Consistência

Componentes equivalentes devem apresentar comportamento e aparência equivalentes.

### 09 — Performance

Efeitos visuais, imagens, fontes e componentes devem ser utilizados considerando o impacto sobre carregamento e Core Web Vitals.

---

## 03 — Design Tokens

Os tokens são a camada de abstração entre a identidade visual e a implementação.

Valores fundamentais ficam em `src/styles/_tokens.scss` (`:root`), consumidos via CSS Custom Properties.

### 3.1 — Brand Colors

| Token | Valor | Função |
|---|---|---|
| `--color-brand-navy` | `#102f4a` | Estrutura, fundos escuros e contraste |
| `--color-brand-blue-dark` | `#3e59a5` | Azul de marca |
| `--color-brand-blue` | `#406db3` | Azul principal |
| `--color-brand-blue-light` | `#4296ce` | Destaques e variações |
| `--color-brand-yellow` | `#dab419` | Accent, energia e **CTA do Contato** (`.contact__cta`) |
| `--color-cta-yellow` | `#eab308` | Amarelo de CTA (Hero, Soluções, overlay mobile) |
| `--color-cta-yellow-hover` | `#f0bc1a` | Hover do amarelo de CTA (`--color-cta-yellow`) |

> Os valores de azul e amarelo são referências digitais derivadas do logo atual. Devem ser refinados caso sejam disponibilizados valores oficiais da marca.
>
> **Dois amarelos intencionais:** `--color-cta-yellow` (`#eab308`) e `--color-brand-yellow` (`#dab419`) **não** são intercambiáveis. Hover do Contato usa literal `#e3c33a` (≠ `--color-cta-yellow-hover`). Contrato completo: §9 e §36.
>
> Soft Steel azul de chrome: `--color-brand-blue` (`.header-cta--bar`). Consumo Hero/Soluções/overlay: `var(--color-cta-yellow*)`.

### 3.2 — Neutral Colors

| Token | Valor | Função |
|---|---|---|
| `--color-white` | `#ffffff` | Fundo e contraste |
| `--color-background` | `#f4fcfc` | Fundo do site (`body`) |
| `--color-border` | `#e5e7eb` | Bordas e divisores |
| `--color-text` | `#17212b` | Texto principal |
| `--color-text-muted` | `#667085` | Texto secundário |

### 3.3 — Semantic Colors

A camada semântica permite alterar a implementação sem alterar os componentes.

Valores commitados:

```scss
--color-bg: var(--color-white);
--color-bg-subtle: var(--color-background);
--color-surface: var(--color-white);

--color-text-primary: var(--color-text);
--color-text-secondary: var(--color-text-muted);

--color-border-default: var(--color-border);

--color-action-primary: var(--color-brand-blue);
--color-action-accent: var(--color-brand-yellow);
--color-action-dark: var(--color-brand-navy);
```

Estados adicionais (success, warning, error, info) só devem ser definidos quando os fluxos reais do produto exigirem. Não criar uma paleta semântica extensa antecipadamente.

---

## 04 — Tipografia

### 4.1 — Fonte

A família tipográfica global é **Segoe UI**, com stack de sistema:

```scss
--font-family: "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

Aplicação: headings, body, navigation, buttons, labels, informações institucionais e componentes.

A tipografia de interface é independente do lettering do logo (ver `docs/visual-identity-flow-energies.md`).

### 4.2 — Pesos (EGP)

| Token | Valor | Uso |
|---|---|---|
| `--font-weight-normal` / `--font-weight-regular` | `400` | Body / regular |
| `--font-weight-medium` | `500` | Medium / labels — Segoe UI não tem face nativa 500; fallback aproximado ~400 (aprovado) |
| `--font-weight-semibold` | `600` | Semibold / destaque |
| `--font-weight-bold` | `700` | Bold / headings |
| `--font-weight-black` / `--font-weight-extrabold` | `900` | Display / ênfase máxima |

Evitar utilizar todos os pesos dentro de uma mesma seção sem necessidade.

### 4.3 — Escala EGP (primitivos)

Primitivos imutáveis de tamanho e leading pareado (`_tokens.scss`):

| Size token | Valor | Leading token | Valor |
|---|---|---|---|
| `--text-xs` | `0.75rem` | `--leading-xs` | `calc(1 / 0.75)` |
| `--text-sm` | `0.875rem` | `--leading-sm` | `calc(1.25 / 0.875)` |
| `--text-base` | `1rem` | `--leading-base` | `1.5` |
| `--text-lg` | `1.125rem` | `--leading-lg` | `calc(1.75 / 1.125)` |
| `--text-xl` | `1.25rem` | `--leading-xl` | `calc(1.75 / 1.25)` |
| `--text-2xl` | `1.5rem` | `--leading-2xl` | `calc(2 / 1.5)` |
| `--text-3xl` | `1.875rem` | `--leading-3xl` | `1.2` |
| `--text-4xl` | `2.25rem` | `--leading-4xl` | `calc(2.5 / 2.25)` |
| `--text-5xl` | `3rem` | `--leading-5xl` | `1` |
| `--text-6xl` | `3.75rem` | `--leading-6xl` | `1` |
| `--text-7xl` | `4.5rem` | `--leading-7xl` | `1` |

### 4.4 — Aliases semânticos

```scss
--text-body: var(--text-base);
--text-body-sm: var(--text-sm);
--text-small: var(--text-sm);
--text-body-lg: var(--text-lg);
--text-label: var(--text-xs);
--text-eyebrow: var(--text-xs);
--text-h3: var(--text-xl);
--text-h2: var(--text-3xl);
--text-cta: var(--text-sm);
--text-nav: var(--text-sm);
```

A hierarquia deve ser definida semanticamente (`h1` / `h2` / `h3` / `p`), não apenas pelo tamanho. Evitar utilizar `<div>` ou `<span>` apenas para simular títulos.

### 4.5 — Display / Hero (stepped)

Contrato em `_typography.scss` — **sem `clamp`**:

| Faixa | `--text-display` | `--leading-display` |
|---|---|---|
| default | `var(--text-4xl)` | `var(--leading-4xl)` |
| `bp-up(sm)` | `var(--text-6xl)` | `var(--leading-6xl)` |
| `bp-up(lg)` | `var(--text-7xl)` | `var(--leading-7xl)` |

`h1` usa `--text-display` / `--leading-display` com `--font-weight-black`.

### 4.6 — Exceção de marca (lockup)

O lockup tipográfico FLOW / ENERGIES no header e no footer usa tamanhos fora da escala de leitura (ex.: `1.375rem`, `0.5rem`, `1.625rem` / `0.5625rem` em `bp-up(lg)`). Não criar tokens EGP para esses valores de marca.

---

## 05 — Espaçamento

Escala commitada (múltiplos de 4px), tokens `--space-*`:

| Token | Valor |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |
| `--space-30` | `120px` |

Não existe step `28px` no token set. Não criar `--space-*` para `28px` — ver exceções intencionais (§36).

### Uso conceitual

```text
4–12px     micro espaçamento
16–24px    elementos próximos
32–48px    agrupamentos
64–96px    seções internas
96–120px   grandes separações
```

Não criar valores arbitrários para resolver pequenos problemas locais sem antes verificar se um token existente atende à necessidade.

---

## 06 — Grid e Containers

### 6.1 — Princípio

O site utiliza layout responsivo com abordagem mobile-first.

O conteúdo deve permanecer legível e controlado em telas grandes.

### 6.2 — Container

Valores commitados:

```scss
--container-max-width: 1280px;
--container-padding-mobile: 20px;
--container-padding-tablet: 32px;
--container-padding-desktop: 32px;
```

Shell global (`.site-shell` em `_globals.scss`):

- `width: min(100%, var(--container-max-width))`;
- `margin-inline: auto`;
- padding-inline mobile → tablet em `bp-up(md)` → desktop em `bp-up(lg)`.

Acima de 1280px o conteúdo deixa de expandir além do teto.

### 6.3 — Grid

O grid deve ser utilizado para organizar:

- serviços;
- benefícios;
- informações institucionais;
- provas sociais;
- blocos de conteúdo.

Evitar transformar toda seção em uma grade rígida.

Composição assimétrica pode ser utilizada quando melhorar hierarquia e narrativa.

---

## 07 — Border Radius

Valores commitados:

```scss
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 999px;
--radius-pill: 999px;
--radius-link: var(--radius-md); /* 10px — padrão de CTAs e links de ação */
```

Direção:

- componentes pequenos → `sm`;
- **CTAs e links de ação → `link` (`--radius-link` = `md` / 10px)** — referência visual: Hero `.hero__secondary` / `.hero__cta`;
- inputs e botões → `md` (ou `link` quando forem âncoras/CTAs);
- cards → `lg`;
- blocos especiais → `xl`;
- círculos / controles circulares → `full`;
- badges → `pill`.

Utilities globais em `_utilities.scss`: `.radius-sm`, `.radius-md`, `.radius-lg`, `.radius-xl`, `.radius-full`.

Evitar utilizar `pill` / `full` indiscriminadamente. Exceções de radius literal pós-D: ver §36.

---

## 08 — Sombras

A interface deve depender principalmente de:

- contraste;
- espaçamento;
- bordas;
- hierarquia.

Sombras devem ser discretas.

Valores commitados:

```scss
--shadow-sm: 0 1px 2px rgba(16, 47, 74, 0.06);
--shadow-md: 0 8px 24px rgba(16, 47, 74, 0.08);
--shadow-lg: 0 16px 40px rgba(16, 47, 74, 0.1);
```

Evitar:

- sombras pesadas;
- excesso de cards flutuantes;
- efeito glassmorphism como linguagem dominante;
- múltiplas camadas de sombra no mesmo componente.

---

## 09 — Botões e CTAs (padrões implementados)

Contrato visual V1 dos botões/CTAs **já em produção** (Header, Hero, Soluções, Contato). Sem redesign; inventário = fonte de verdade. Sem Angular `Button`, sem `_buttons.scss`, sem tokens novos.

Princípios:

- hierarquia clara por superfície (não um único “botão primário” global);
- WhatsApp é o canal de conversão; CTAs não devem dominar toda a interface (§02 princípio 07);
- **dois amarelos** e Soft Steel azul são famílias distintas — não unificar;
- `.solutions-cta__secondary` é **link textual**, não botão;
- navy em Contato = **superfície do painel** (`.contact__panel`), **não** botão fill;
- exceções literais preservadas — ver §36.

Tokens de apoio: `--touch-target: 2.75rem`, `--control-height: 48px` (existem em `_tokens.scss`; consumo via `var()` ainda não é universal — ver §36).

### 9.1 — Famílias e inventário (H1/H2, P1/S1, P2/T1, C1/C2)

| ID | Família | Classe(s) | Fill / look | Superfície |
|---|---|---|---|---|
| **H1** | Header chrome (desktop) | `a.header-cta.header-cta--bar` | Soft Steel `--color-brand-blue`; texto branco | Barra ≥ `$bp-nav` / 64rem (oculto abaixo) |
| **H2** | Header chrome (overlay) | `a.header-cta` em `.site-nav--mobile` | `--color-cta-yellow`; texto navy; full-width | Overlay mobile |
| **P1** | Primary CTA (amarelo CTA) | `a.hero__cta` | `--color-cta-yellow`; texto navy; altura 48px; `radius-link` | Hero full-bleed |
| **S1** | Secondary outline (hero) | `a.hero__secondary` | Outline clara / fundo transparente | `.hero__actions` |
| **P2** | Primary CTA (amarelo CTA) | `a.solutions-cta__primary` | **Mesmo look/regras de P1** (seletores SCSS compartilhados) | Micro-CTA pós-Soluções |
| **T1** | Text secondary | `a.solutions-cta__secondary` | Texto sublinhado; **não é botão** | Ao lado de P2 |
| **C1** | Primary Contato (amarelo brand) | `a.contact__cta` | `--color-brand-yellow` (`#dab419`); texto navy; `radius-link`; padding vertical `14px` | Painel navy `#contato` |
| **C2** | Secondary outline (contato) | `a.contact__email` | Outline branco; fundo transparente; texto branco | Mesmo painel |

**Soft Steel** = `--color-brand-blue` no chrome desktop (H1). Não confundir com navy do painel de Contato.

### 9.2 — Hierarquia conceitual (Primary / Secondary / Tertiary)

Mantém-se a orientação de produto:

| Nível | Papel | Implementação V1 |
|---|---|---|
| **Primary** | Ação principal; alto contraste; toque adequado; hover/focus/active definidos | P1/P2 (amarelo CTA); C1 (amarelo brand); H1/H2 como chrome persistente (azul Soft Steel desktop / amarelo overlay) |
| **Secondary** | Complementar; menor peso; não rivalizar com o amarelo | S1 (outline no hero); C2 (outline no painel navy) |
| **Tertiary** | Baixa prioridade; preferência por texto / underline | T1 (`.solutions-cta__secondary`) |

A cor do primário **varia por contexto** (azul Soft Steel no header desktop; amarelo CTA no conteúdo/overlay; amarelo brand no Contato) — isso é intencional, não inconsistência a “corrigir”.

### 9.3 — Estados por família (somente os existentes)

| ID | Default | Hover | Focus | Active / motion |
|---|---|---|---|---|
| **H1** | Fill (trial WhatsApp `#25D366` no bar); texto branco; `min-height: 2.75rem`; padding `var(--space-3) 1.125rem`; **`radius-link` (10px)** | Texto branco; hover bar `#1ebe57` | `:focus-visible` global (`--focus-ring` + halo) | — |
| **H2** | Fill `--color-cta-yellow`; texto navy; `radius-link`; divisor `::before` | `--color-cta-yellow-hover`; texto navy | Global `:focus-visible` | Transition 0.2s; reduced-motion zera transition |
| **P1 / P2** | Fill `--color-cta-yellow`; navy; 48px; 14px bold; letter-spacing 0.01em | `--color-cta-yellow-hover` + `translateY(-2px)` + sombra `0 8px 20px / 22%` | Outline + `--focus-ring-halo` (explícito no SCSS da Home) | `:active` (P1): hover yellow, `transform: none`. Reduced-motion: sem transition/lift/sombra |
| **S1** | Outline `rgb(250 253 251 / 22%)`; texto `/78%`; mesma caixa 48px | Fundo `/8%`; borda `/32%`; texto `/92%` | Mesmo anel de focus | `:active` → fundo `/12%`, texto `/70%`. Reduced-motion: sem transition |
| **T1** | `--color-text-secondary`; `--text-body-sm` / medium; underline | Cor → `--color-brand-navy` | Global `:focus-visible` | — |
| **C1** | Fill `--color-brand-yellow`; navy; `min-height: 2.75rem`; padding `14px` / `--space-5`; **`border-radius: 8px`** | Literal **`#e3c33a`** (≠ `--color-cta-yellow-hover`) | Global `:focus-visible` | — |
| **C2** | Outline branco `/70%`; texto branco; mesma geometria de C1 | Borda branca sólida; fundo branco `/8%` | Global `:focus-visible` | — |

Não inventar estados ausentes (ex.: hover de fundo em H1, disabled, loading).

### 9.4 — Hierarquia de conversão (por superfície)

```text
1. Primário de página (amarelo CTA)
   → .hero__cta | .solutions-cta__primary
   → Token: --color-cta-yellow (+ --color-cta-yellow-hover)

2. Primário de fechamento (Contato)
   → .contact__cta
   → --color-brand-yellow + hover literal #e3c33a
   → Parente visual do Hero, não idêntico (geometria + amarelo distintos)

3. Secundário de botão (outline)
   → .hero__secondary | .contact__email

4. Secundário / terciário de texto
   → .solutions-cta__secondary (underline; não tratar como botão)

5. Chrome de header
   → .header-cta--bar (Soft Steel, desktop)
   → .site-nav--mobile .header-cta (amarelo CTA, mobile)
   → Persistente; não redefine a hierarquia das seções
```

**Regra de uso:** um primário amarelo por agrupamento de ações; secundário outline ou texto conforme a superfície; header azul no desktop para não duplicar o amarelo do Hero no primeiro viewport.

### 9.5 — Montagem e destinos (referência)

Rótulos e destinos são contrato de produto (`docs/discovery.md` §12); não alterar copy aqui.

| ID | Rótulo (implementado) | Destino |
|---|---|---|
| H1 / H2 | Falar no WhatsApp | `wa.me` padrão |
| P1 | Falar com um especialista | `wa.me` padrão |
| S1 | Simule sua economia | `#simulacao` |
| P2 | Falar no WhatsApp | `wa.me` padrão |
| T1 | Entre em contato | `#contato` |
| C1 | Falar no WhatsApp | `wa.me` padrão |
| C2 | Enviar e-mail | `mailto:washington@flowenergies.com` |

### 9.6 — Exceções literais e normalização

Ver §36. Em especial para botões/CTAs:

- Contato: `border-radius: var(--radius-link)`; padding vertical `14px`; hover `#e3c33a`;
- Header CTA: `border-radius: var(--radius-link)`; padding horizontal `1.125rem`;
- **Não** migrar C1 para `--color-cta-yellow` / `--color-cta-yellow-hover` (mudaria o look);
- **Não** inventar hover de fundo em `.header-cta--bar`;
- Literais de contraste do `.hero__secondary` (RGBA no hero escuro) permanecem fora do par Soft Steel / amarelo CTA.

Normalização SCSS só é válida quando o literal já equivale a um token existente **sem** mudança visual. Avaliação N2: fills in-scope já consomem tokens onde há equivalência; nenhuma migração neutra restante neste inventário.

### 9.7 — Fora de escopo / não confundir

Não absorver nestas famílias:

- `.simulacao__cta` (Simulador);
- `.solution-card__link` (link de card);
- `.menu-button` (controle de menu);
- skip-link e demais chrome de navegação não listados acima.

---

## 10 — CTA e Conversão

O objetivo comercial principal da V1 é gerar contatos. O WhatsApp é o principal destino de conversão.

Esta seção define o **porquê** e o ritmo de conversão. O **como** implementado (classes, tokens, estados) está em §9.

Hierarquia editorial recomendada:

```text
Contexto
   ↓
Problema / necessidade
   ↓
Benefício
   ↓
CTA
```

O CTA deve aparecer nos pontos em que o usuário já possui contexto suficiente para agir.

Evitar:

- botão de WhatsApp em todas as linhas da página;
- múltiplos CTAs concorrentes;
- chamadas genéricas sem benefício;
- excesso de urgência artificial;
- tratar chrome Soft Steel do header (H1) como o mesmo papel visual do primário amarelo de conteúdo (P1/P2);
- tratar `.solutions-cta__secondary` como botão.

Alinhamento com o inventário §9: um primário amarelo por agrupamento; outline ou texto como complementar; dualidade header desktop azul / overlay amarelo preservada.

---

## 11 — Links

Links devem apresentar diferença visual suficiente em relação ao texto comum.

Estados:

```text
Default
Hover
Focus
Visited (quando aplicável)
Disabled (quando aplicável)
```

O estado `focus` nunca deve ser removido sem substituição acessível.

Foco global (`:focus-visible` em `_globals.scss`): anel dual com `--focus-ring`, `--focus-ring-offset` e `--focus-ring-halo` (outline branco + halo navy).

---

## 12 — Forms e Inputs

Quando formulários forem necessários:

- labels devem ser explícitos;
- campos devem possuir área de toque adequada;
- mensagens de erro devem ser textuais;
- foco deve ser visível;
- placeholders não devem substituir labels;
- campos devem funcionar corretamente em mobile.

O formulário não deve ser introduzido na V1 apenas porque o componente existe. O WhatsApp continua sendo o canal principal de conversão.

---

## 13 — Cards

Cards são componentes de organização, não uma linguagem obrigatória para todo conteúdo.

Utilizar cards quando houver:

- agrupamento lógico;
- comparação;
- destaque de serviço;
- benefício independente;
- informação que precisa ser visualmente separada.

Evitar:

```text
Título
→ card

Texto
→ card

Imagem
→ card

Outro texto
→ card
```

A página deve possuir variação de ritmo visual.

---

## 14 — Iconografia

Ícones devem seguir uma linguagem consistente.

Direção:

- simples;
- técnica;
- contemporânea;
- traços consistentes;
- sem excesso de detalhes.

Ícones devem reforçar significado, não servir apenas como decoração.

Quando um ícone possuir significado funcional, não depender exclusivamente da forma visual para transmitir a informação.

---

## 15 — Imagens

Prioridade:

1. instalações reais;
2. equipe real;
3. projetos reais;
4. equipamentos reais;
5. atendimento real;
6. imagens de apoio;
7. banco de imagens somente quando necessário.

### Tratamento

As imagens devem parecer:

- naturais;
- profissionais;
- limpas;
- contemporâneas.

Evitar filtros excessivos ou tratamentos que descaracterizem as imagens reais.

### Performance

Imagens devem:

- utilizar formatos apropriados;
- possuir dimensões adequadas ao contexto;
- utilizar `width` e `height` quando possível;
- evitar carregar imagens maiores que o necessário;
- utilizar lazy loading quando não forem críticas para o carregamento inicial.

A imagem principal do Hero deve ser tratada como elemento potencialmente crítico de performance.

---

## 16 — Linguagem Gráfica

A linguagem visual pode utilizar elementos derivados do conceito de `flow`.

Possibilidades:

- curvas;
- linhas de movimento;
- ondas sutis;
- diagonais;
- gradientes controlados;
- recortes inspirados no elemento do logo.

### Regra

O grafismo deve complementar:

- conteúdo;
- imagem;
- hierarquia;
- marca.

Não deve competir com:

- títulos;
- serviços;
- fotos;
- CTAs.

---

## 17 — Gradientes

Gradientes podem ser utilizados para ampliar a linguagem da marca, especialmente a partir das variações de azul do logo.

Uso recomendado:

- hero;
- backgrounds;
- detalhes gráficos;
- transições.

Evitar:

- gradientes em todos os componentes;
- gradientes muito saturados;
- textos sobre gradientes de baixo contraste;
- transformar o site em uma estética genérica de SaaS.

---

## 18 — Responsividade e breakpoints

A implementação parte do mobile.

### 18.1 — Escala Sass (fonte de verdade em `@media`)

Arquivo: `src/styles/_breakpoints.scss`.

| Nome | Sass | rem | Uso típico |
|---|---|---|---|
| `sm` | `$bp-sm` | `40rem` | Tipografia display stepped |
| `md` | `$bp-md` | `48rem` | Layout tablet / grids 2 col |
| `nav` | `$bp-nav` | `64rem` | Corte do menu desktop / Brand Overlay Sheet (`$bp-nav: $bp-lg`) |
| `lg` | `$bp-lg` | `64rem` | Desktop (padding, display, grids); mesmo valor que `$bp-nav` |

Mixin:

```scss
@include bp-up($name) { /* min-width */ }
```

Regras:

1. Mobile-first (`min-width` via `bp-up`).
2. Um propósito por corte.
3. **Proibido** usar `var(--bp-*)` dentro de `@media`.
4. `$bp-nav` deve permanecer alinhado a `BP_NAV = '64rem'` em `header.component.ts` (`matchMedia`). Abaixo desse corte: Brand Overlay Sheet (painel navy + scrim + burger→X).
5. Espelhos CSS em `_tokens.scss` (`--bp-sm`, `--bp-nav`, `--bp-tablet`, `--bp-desktop`) existem para docs/JS — não para `@media`.

`angular.json` define `stylePreprocessorOptions.includePaths: ["src/styles"]`, permitindo `@use "breakpoints" as *` nos SCSS de componentes.

### 18.2 — Comportamento por faixa

### Mobile

Priorizar:

- leitura vertical;
- navegação simples;
- CTAs acessíveis;
- imagens responsivas;
- espaçamento controlado;
- conteúdo essencial.

### Tablet

Permitir:

- aumento de escala;
- grids de duas colunas;
- maior respiro.

### Desktop

Permitir:

- composições assimétricas;
- grids maiores;
- maior área de respiro;
- elementos decorativos adicionais;
- hero mais elaborado.

O desktop não deve ser simplesmente uma versão ampliada do mobile.

---

## 19 — Acessibilidade

O Design System deve considerar acessibilidade desde a implementação.

Requisitos mínimos:

- contraste adequado;
- foco visível;
- navegação por teclado;
- HTML semântico;
- labels em controles;
- `alt` apropriado para imagens;
- tamanho adequado de áreas de toque;
- não depender apenas de cor para transmitir informação;
- respeitar preferências de redução de movimento quando houver animações.

---

## 20 — Motion

Movimento deve comunicar hierarquia e interação.

Tokens commitados:

```scss
--duration-fast: 200ms;
--duration-mid: 220ms;
--duration-slow: 350ms;
--duration-header: 400ms;
--easing-standard: ease;
```

Consumo observado (Fase E): transições do header (scroll/background), hovers de CTA/secondary e cards na Home usam esses tokens.

Pode ser utilizado em:

- hover;
- entrada de elementos;
- transições;
- pequenos elementos de fluxo;
- feedback de interação.

Evitar:

- animações contínuas sem propósito;
- parallax pesado;
- excesso de elementos se movendo simultaneamente;
- animações que prejudiquem performance;
- efeitos necessários para compreender o conteúdo.

`prefers-reduced-motion: reduce` é respeitado globalmente em `_globals.scss` (força `scroll-behavior: auto` e durações de transition/animation próximas de zero).

---

## 21 — Header

O Header deve priorizar:

- identificação imediata da Flow;
- navegação simples;
- acesso ao CTA principal;
- boa leitura em mobile.

No mobile, a navegação deve ser simplificada.

No desktop (`bp-up(nav)` / `BP_NAV`), o Header apresenta navegação horizontal.

O logo / lockup tipográfico deve permanecer visualmente dominante em relação aos elementos secundários.

Token de apoio: `--header-height: 5rem` (valor atual em `_tokens.scss`).

---

## 22 — Hero

O Hero é uma das áreas mais importantes da V1 e já está implementado na Home.

Objetivos:

1. comunicar rapidamente o posicionamento;
2. estabelecer confiança;
3. apresentar a principal proposta de valor;
4. conduzir ao próximo passo.

Estrutura conceitual:

```text
Eyebrow / contexto
        ↓
Headline (h1 / --text-display stepped)
        ↓
Supporting text
        ↓
Primary CTA
        ↓
Secondary context / proof
```

Evitar Hero puramente decorativo. Substituição da imagem temporária do Hero exige autorização explícita.

---

## 23 — Seções

Cada seção deve possuir uma função clara.

Pergunta de validação:

> "O que o visitante precisa entender ou fazer depois desta seção?"

Se a resposta não for clara, a seção deve ser revisada.

O ritmo da página deve alternar:

- texto;
- imagem;
- espaço;
- destaque;
- prova;
- ação.

Evitar páginas compostas exclusivamente por blocos idênticos.

---

## 24 — Footer

O Footer deve concentrar:

- identificação da empresa;
- informações de contato;
- WhatsApp;
- localização quando relevante;
- links institucionais;
- redes sociais quando aplicável;
- informações legais necessárias.

A linguagem visual pode utilizar o `Deep Navy` como base. O rodapé atual da Home V1 é compacto (marca tipográfica, linha legal, voltar ao topo) conforme o Incremento 5 — esta seção descreve a orientação do sistema, não obriga a reintrodução de contatos no footer.

---

## 25 — Arquitetura SCSS

Estado real (HEAD):

```text
src/
├── styles/
│   ├── _tokens.scss        # CSS custom properties (:root)
│   ├── _typography.scss    # body/h1–h3 + display stepped
│   ├── _breakpoints.scss   # $bp-* map + mixin bp-up (Sass)
│   ├── _globals.scss       # reset, shell, trust-bar, contact, reduced-motion
│   └── _utilities.scss     # .radius-*
└── styles.scss             # entry: @use tokens → typography → globals → utilities
```

Entry (`src/styles.scss`):

```scss
@use "styles/tokens";
@use "styles/typography";
@use "styles/globals";
@use "styles/utilities";
```

`_breakpoints.scss` **não** é importado no entry; consumers usam `@use "breakpoints" as *` (via `includePaths: ["src/styles"]`).

### Responsabilidades

`_tokens.scss`
- cores, tipografia (primitivos/aliases), spacing, radius, shadows, containers, breakpoints espelhados, motion, focus, header-height, touch/control.

`_typography.scss`
- base tipográfica do `body` / headings;
- contrato stepped de `--text-display`.

`_breakpoints.scss`
- escala Sass e mixin `bp-up`.

`_globals.scss`
- estilos base globais e seções compartilhadas (ex.: `.site-shell`, trust bar, contato).

`_utilities.scss`
- apenas utilities `.radius-*` justificadas.

`styles.scss`
- entry point global.

Evitar criar um arquivo SCSS global para cada componente sem necessidade. Não introduzir Cascade Layers, Tailwind ou framework utilitário amplo nesta V1.

---

## 26 — CSS Custom Properties

Valores do sistema utilizam CSS Custom Properties em `:root` (`_tokens.scss`).

Os componentes devem consumir os tokens em vez de repetir valores diretamente, salvo exceções intencionais documentadas (§36).

Exemplo (trecho representativo — lista completa no código):

```scss
:root {
  --color-brand-navy: #102f4a;
  --color-brand-blue: #406db3;
  --color-brand-yellow: #dab419;
  --color-background: #f4fcfc;

  --font-family: "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  --container-max-width: 1280px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 999px;
  --radius-pill: 999px;

  --duration-fast: 200ms;
  --easing-standard: ease;
}
```

---

## 27 — Componentização

Um componente deve ser criado quando houver:

- reutilização real;
- comportamento próprio;
- necessidade de consistência;
- complexidade suficiente para justificar isolamento.

Não componentizar cada pequeno elemento visual automaticamente.

Exemplo de componentes potenciais:

```text
Header
Footer
Button
SectionHeading
ServiceCard
Testimonial
WhatsAppButton
```

A lista definitiva deve surgir durante a implementação.

---

## 28 — Regras para novos componentes

Antes de criar um novo componente, verificar:

1. já existe um componente equivalente?
2. existe um padrão visual existente?
3. o novo componente pode reutilizar tokens?
4. existe necessidade real de comportamento próprio?
5. o componente funciona em mobile?
6. possui estados definidos?
7. possui acessibilidade adequada?

---

## 29 — Figma e Design System

O Figma deve refletir os mesmos princípios do código.

Quando o sistema visual for formalizado no Figma, priorizar:

- cores como variables;
- tipografia como styles/variables;
- espaçamento consistente;
- componentes reutilizáveis;
- variantes para estados;
- nomenclatura consistente.

O Figma deve servir como ferramenta de exploração e especificação, não como uma segunda identidade visual independente do projeto.

---

## 30 — Validação visual

Antes da implementação definitiva de uma página, validar:

### Identidade

- o logo está corretamente representado?
- azul e amarelo possuem a hierarquia esperada?
- a interface parece pertencer à Flow?

### UX

- a proposta é compreendida rapidamente?
- o CTA está claro?
- a hierarquia é evidente?
- a navegação é simples?

### Visual

- existe respiro suficiente?
- há excesso de cards?
- há excesso de efeitos?
- os elementos competem entre si?
- a página parece genérica?

### Mobile

- o Hero funciona?
- os títulos quebram bem?
- os CTAs são fáceis de tocar?
- as imagens mantêm proporção?
- a navegação é confortável?

### Performance

- imagens estão otimizadas?
- fontes estão controladas?
- animações são justificadas?
- não existem efeitos pesados desnecessários?

---

## 31 — Impeccable / Design Review

Ferramentas de crítica visual, incluindo o Impeccable, podem ser utilizadas durante a etapa de exploração e revisão.

Seu papel deve ser:

- identificar problemas de hierarquia;
- questionar espaçamento;
- avaliar consistência;
- detectar excesso visual;
- sugerir refinamentos;
- revisar acessibilidade;
- avaliar composição responsiva.

A ferramenta não deve substituir:

- a identidade definida para a Flow;
- decisões de posicionamento;
- necessidades comerciais;
- validação com conteúdo real;
- decisões arquiteturais.

Fluxo recomendado:

```text
Identidade Visual
       ↓
Design System Foundation
       ↓
Primeira composição visual
       ↓
Design Review / Impeccable
       ↓
Refinamento
       ↓
Validação
       ↓
Implementação Angular
```

---

## 32 — O que permanece aberto (produto / conteúdo)

As escalas técnicas V1 (tipografia EGP, breakpoints, container, spacing, radius, motion) estão **fechadas no código**. Não reabrir essas decisões sem autorização.

Ainda abertos no âmbito de produto / conteúdo (não inventar fechamento):

- composição e tratamento finais de gradientes além do uso atual;
- iconografia definitiva;
- imagens finais / substituição do asset temporário do Hero;
- microinterações além dos tokens de duration já definidos;
- possíveis variações futuras de CTA além do inventário §9;
- componentes definitivos de produto ainda não especificados (Angular `Button` / `_buttons.scss` **não** fazem parte do contrato V1 atual).

---

## 33 — Critérios de aceitação do Design System V1

Estado em relação ao código HEAD (pós A–E):

- [x] paleta base validada no código (brand + neutros + semânticos + CTA yellow);
- [x] tipografia Segoe + escala EGP + display stepped;
- [x] tokens principais definidos em `_tokens.scss`;
- [x] grid/container (`1280px`, paddings 20/32/32, `.site-shell`);
- [x] escala de espaçamento `--space-*`;
- [x] radius + utilities `.radius-*`;
- [x] breakpoints Sass + `bp-up` + sync `BP_NAV`;
- [x] motion tokens + reduced-motion global;
- [x] regras mobile-first e foco visível definidos;
- [x] botões/CTAs: padrões V1 formalizados em §9 (inventário H1/H2, P1/S1, P2/T1, C1/C2; sem Angular `Button` / `_buttons.scss`);
- [ ] iconografia definitiva;
- [ ] imagens finais / Hero asset definitivo;
- [ ] decisões refinadas de produto refletidas após validação comercial.

---

## 34 — Relação com outros documentos

Este documento depende diretamente de:

```text
docs/visual-identity-flow-energies.md
```

E deve orientar:

```text
Figma
   ↓
src/styles/
   ↓
componentes Angular
   ↓
páginas
```

O documento de identidade responde principalmente:

> **"Como a Flow deve parecer?"**

Este documento responde:

> **"Como transformamos essa aparência em um sistema consistente e implementável?"**

---

## 35 — Status

**Status atual:** V1 — Escalas consolidadas (Fases A, B, C0, C, D, E concluídas no código).

A tipografia, os breakpoints, o container, o spacing, o radius e o motion da V1 estão implementados em HEAD. Evoluções posteriores exigem autorização e não devem contradizer este contrato sem atualização explícita dos docs e do código.

---

## 36 — Exceções intencionais (pós-D, preservadas)

A Fase D migrou spacing/radius para tokens **sem** forçar literais que preservam geometria aprovada. Estado validado no código:

| Local | Literal preservado |
|---|---|
| `.solution-card` | `border-radius: 12px` |
| `.solution-card--featured` | `padding: 28px` |
| Contato CTAs (`.contact__cta`, `.contact__email`) | `border-radius: var(--radius-link)`; padding vertical `14px` |
| Header CTA | `border-radius: var(--radius-link)`; padding horizontal `1.125rem` (parcial; vertical usa `var(--space-3)`) |
| Nav desktop | `gap: 28px` |
| Mark (header/footer) | `gap: 1px` |
| Alturas de controle | literais `48px` / `2.75rem` em vários pontos — tokens `--control-height` / `--touch-target` existem, mas o consumo `var()` não é universal |

Não criar `--space-7` / token de `28px` só para eliminar essas exceções.

**Botões/CTAs (contrato §9):**

- Hover de `.contact__cta` = literal `#e3c33a` — **não** usar `--color-cta-yellow-hover` (`#f0bc1a`); são valores distintos.
- Fill de `.contact__cta` = `--color-brand-yellow` (`#dab419`) — **não** unificar com `--color-cta-yellow` (`#eab308`).
- Hover de `.header-cta--bar`: sem feedback de fundo dedicado — preservar; não inventar.
- Navy em Contato = painel (`.contact__panel`), não botão fill.

---

## 37 — Convenções de evolução

1. Preferir tokens existentes (`var(--*)`) e `bp-up` para novos estilos.
2. Novos valores de token só com autorização explícita do responsável.
3. Não expandir `_utilities.scss` além de `.radius-*` sem escopo aprovado.
4. Não introduzir Tailwind, Cascade Layers ou framework utilitário amplo nesta base.
5. Não reabrir decisões das Fases A–E (família, EGP, breakpoints, spacing/radius, motion) sem plano aprovado.
6. Manter sync `$bp-nav` ↔ `BP_NAV`.
7. Documentar exceções literais quando forem intencionais; não “corrigir” silenciosamente geometria aprovada.

---

## 38 — Histórico das Fases A–E

| Fase | Conteúdo | Commit (quando houver) |
|---|---|---|
| **A** | Auditoria Tokens V1 (planejamento; sem commit de código dedicado) | — |
| **B** | Tokens additive + utilities `.radius-*` | `4607d9e` |
| **C0** | Infraestrutura Sass de breakpoints + sync nav | `4c2efde` |
| **Família** | Segoe UI global (remoção de Inter) | `a810f92` |
| **C** | Escala tipográfica EGP + display stepped | `f4be935` |
| **D** | Spacing/radius → tokens (+ exceções preservadas) | `466b4b8` |
| **E** | Motion → tokens | `af89d7c` |
| **F** | Redação documental deste contrato (docs) | esta etapa |
| **N2 Botões/CTAs** | Formalização documental §9 (inventário H1/H2, P1/S1, P2/T1, C1/C2); sem Angular `Button` / `_buttons.scss` / tokens novos / redesign. QA **APPROVED WITH OBSERVATIONS** (drift residual fora do escopo, sem remediação). Closure: docs only | docs |
