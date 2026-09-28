# Flow Site — Arquitetura

## 1. Objetivo

O Flow Site é, na sua primeira versão (V1), um site institucional e de geração de leads para a **Flow Energies**. O objetivo principal é transmitir confiança, apresentar a empresa e seus serviços, e direcionar visitantes para o WhatsApp da empresa como principal canal de conversão.

O projeto prioriza uma experiência mobile-first, performance, SEO e acessibilidade, com uma arquitetura que permita evolução incremental sem necessidade de reconstrução quando novas funcionalidades forem definidas.

## 2. Princípios

- **Mobile-first** — projetar e implementar primeiro para dispositivos móveis, expandindo para telas maiores.
- **Performance** — carregamento rápido, assets otimizados e boas práticas de renderização (SSR/SSG).
- **SEO** — conteúdo indexável, metadados adequados e estrutura semântica.
- **Acessibilidade** — navegação por teclado, contraste, textos alternativos e boas práticas WCAG.
- **Componentização** — interface dividida em partes reutilizáveis e coesas.
- **Reutilização** — evitar duplicação de código e padrões visuais.
- **Manutenibilidade** — código legível, organizado e fácil de evoluir.
- **Evolução incremental** — crescer o projeto por fases, sem antecipar funcionalidades não confirmadas.
- **Evitar overengineering** — simplicidade na V1; abstrações apenas quando houver necessidade real.

## 3. Stack

| Tecnologia / Ferramenta | Uso |
|-------------------------|-----|
| **Angular** | Framework principal da aplicação |
| **TypeScript** | Linguagem de desenvolvimento |
| **SCSS** | Estilização com variáveis, mixins e organização modular |
| **Angular Router** | Navegação e roteamento de páginas |
| **SSR/SSG** | Renderização no servidor e pré-renderização estática para SEO e performance |
| **Git / GitHub** | Controle de versão e hospedagem do repositório |
| **SourceTree** | Ferramenta de versionamento local (interface gráfica para Git) |

## 4. Arquitetura

O projeto é organizado em camadas conceituais que separam responsabilidades e facilitam a evolução:

### Core

Infraestrutura, configurações, serviços e modelos compartilhados globalmente. Exemplos: configuração da aplicação, serviços de analytics (quando definido), modelos de dados transversais e utilitários de infraestrutura.

### Shared

Componentes, diretivas e pipes reutilizáveis que **não** pertencem a uma funcionalidade específica. Exemplos: botões genéricos, loaders, pipes de formatação. Não deve conter lógica de negócio específica de uma feature.

### Layout

Elementos estruturais globais que compõem o esqueleto do site: Header, Footer e Navigation. Presentes em todas ou na maioria das páginas.

### Features

Funcionalidades e páginas organizadas por domínio ou objetivo de negócio. Cada feature agrupa seus componentes, serviços e rotas relacionados. Exemplo na V1: `home`. Futuras features (ex.: simulação, área do cliente) serão adicionadas aqui quando confirmadas.

### Assets

Imagens, ícones, fontes e outros recursos estáticos. Separados do código da aplicação para facilitar manutenção e otimização.

## 5. Estrutura planejada

A estrutura abaixo é **planejada** — representa a organização alvo do projeto. Novas features serão adicionadas em `features/` conforme os requisitos reais surgirem. A implementação física dessas pastas ocorrerá nas fases seguintes do roadmap.

```
src/
├── app/
│   ├── core/
│   │   ├── config/
│   │   ├── services/
│   │   └── models/
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   └── pipes/
│   ├── layout/
│   │   ├── header/
│   │   ├── footer/
│   │   └── navigation/
│   ├── features/
│   │   └── home/
│   ├── app.component.*
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _globals.scss
├── main.ts
└── styles.scss
```

> **Nota sobre o estado atual:** o projeto Angular foi gerado com `public/` para assets estáticos e um único arquivo `src/styles.scss`. A migração para `src/assets/` e `src/styles/` com partials SCSS será feita nas fases de Design System e implementação, sem alteração prematura nesta fundação.

## 6. V1 x evolução

### V1 (escopo atual)

- Site institucional
- Conteúdo comercial (sobre, serviços, diferenciais)
- Prova social e elementos de confiança
- CTAs (Call to Action) estratégicos
- Integração com WhatsApp como principal conversão
- SEO e performance otimizados

### Evolução (futuro — não implementar agora)

Funcionalidades possíveis, ainda **não definidas** e que não devem ser implementadas prematuramente:

- Simulação / orçamento de energia solar
- Captura estruturada de leads (formulários, CRM)
- Backend e API
- Checkout e fluxo de compra
- Pagamentos
- Área do cliente (se necessário)
- Integrações externas

A arquitetura em camadas (Core, Shared, Layout, Features) permite adicionar essas capacidades sem reestruturar o projeto — cada nova funcionalidade vira uma feature ou extensão do Core, conforme a necessidade real surgir.

## 7. Regras arquiteturais

1. **Feature-specific code** deve permanecer dentro da feature correspondente em `features/`.
2. Código **realmente reutilizável** (usado por 2+ features sem lógica de negócio específica) pode ir para `shared/`.
3. **Infraestrutura global** (config, serviços transversais, modelos compartilhados) pertence ao `core/`.
4. **Não colocar lógica de negócio específica** em `shared/` — Shared é para UI e utilitários genéricos.
5. **Não criar abstrações** antes de existir uma necessidade real (YAGNI).
6. **Priorizar simplicidade na V1** — menos camadas e menos arquivos até que o projeto justifique mais estrutura.
7. Toda **nova funcionalidade relevante** deve considerar sua futura evolução, mas sem implementar o que ainda não foi validado com o proprietário da Flow.
