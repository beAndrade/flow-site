# Flow Energies — Design System

> **Status:** V1 — Foundation
>
> Este documento traduz as diretrizes definidas em `docs/visual-identity.md` para um sistema visual técnico aplicável ao `flow-site`.
>
> O documento deve orientar Figma, Angular, SCSS e futuras evoluções da interface. Valores marcados como referência podem ser refinados durante a validação visual sem alterar os princípios da identidade.

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
- linguagem visual.

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

A implementação em SCSS deve concentrar os valores fundamentais em um único local.

### 3.1 — Brand Colors

| Token | Valor | Função |
|---|---|---|
| `--color-brand-navy` | `#102F4A` | Estrutura, fundos escuros e contraste |
| `--color-brand-blue-dark` | `#3E59A5` | Azul de marca |
| `--color-brand-blue` | `#406DB3` | Azul principal |
| `--color-brand-blue-light` | `#4296CE` | Destaques e variações |
| `--color-brand-yellow` | `#DAB419` | Accent, energia e CTAs estratégicos |

> Os valores de azul e amarelo são referências digitais derivadas do logo atual. Devem ser refinados caso sejam disponibilizados valores oficiais da marca.

### 3.2 — Neutral Colors

| Token | Valor | Função |
|---|---|---|
| `--color-white` | `#FFFFFF` | Fundo e contraste |
| `--color-background` | `#F7F9FA` | Fundo alternativo |
| `--color-border` | `#E5E7EB` | Bordas e divisores |
| `--color-text` | `#17212B` | Texto principal |
| `--color-text-muted` | `#667085` | Texto secundário |

### 3.3 — Semantic Colors

A camada semântica permite alterar a implementação sem alterar os componentes.

Referência inicial:

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

Estados adicionais devem ser definidos quando os fluxos reais do produto exigirem:

- success;
- warning;
- error;
- info.

Não criar uma paleta semântica extensa antecipadamente.

---

## 04 — Tipografia

### 4.1 — Fonte

A fonte principal é **Inter**.

Aplicação:

- headings;
- body;
- navigation;
- buttons;
- labels;
- informações institucionais;
- componentes.

### 4.2 — Pesos

Utilizar inicialmente:

| Peso | Uso |
|---|---|
| 400 | Regular / body |
| 500 | Medium / labels |
| 600 | Semibold / destaque |
| 700 | Bold / headings |
| 800 | ExtraBold / display |

Evitar utilizar todos os pesos dentro de uma mesma seção sem necessidade.

### 4.3 — Hierarquia

A escala definitiva deve ser refinada durante a composição da Home.

Referência inicial:

```text
Display
H1
H2
H3
Body Large
Body
Body Small
Label
Caption
```

A hierarquia deve ser definida semanticamente, não apenas pelo tamanho.

Exemplo:

```html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<p>...</p>
```

Evitar utilizar `<div>` ou `<span>` apenas para simular títulos.

### 4.4 — Line-height

Como referência:

```text
Display / H1    1.05 — 1.15
H2 / H3         1.10 — 1.25
Body            1.50 — 1.65
Small           1.40 — 1.55
```

Os valores finais devem ser ajustados de acordo com a largura de linha e o comportamento mobile.

---

## 05 — Espaçamento

A escala deve utilizar múltiplos de 4px.

Referência:

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
```

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

Referência inicial:

```scss
--container-max-width: 1200px;
--container-padding-mobile: 20px;
--container-padding-tablet: 32px;
--container-padding-desktop: 40px;
```

Os valores podem ser ajustados após a primeira composição visual.

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

Referência:

```scss
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-pill: 999px;
```

Direção:

- componentes pequenos → `sm`;
- inputs e botões → `md`;
- cards → `lg`;
- blocos especiais → `xl`;
- badges → `pill`.

Evitar utilizar `pill` indiscriminadamente.

---

## 08 — Sombras

A interface deve depender principalmente de:

- contraste;
- espaçamento;
- bordas;
- hierarquia.

Sombras devem ser discretas.

Referência:

```scss
--shadow-sm: 0 1px 2px rgba(16, 47, 74, 0.06);
--shadow-md: 0 8px 24px rgba(16, 47, 74, 0.08);
--shadow-lg: 0 16px 40px rgba(16, 47, 74, 0.10);
```

> As sombras são tokens técnicos e podem ser refinadas durante a validação visual.

Evitar:

- sombras pesadas;
- excesso de cards flutuantes;
- efeito glassmorphism como linguagem dominante;
- múltiplas camadas de sombra no mesmo componente.

---

## 09 — Botões

Os botões devem possuir hierarquia clara.

### 9.1 — Primary

Representa a ação principal.

Exemplo:

**Falar com a Flow**

Características:

- alto contraste;
- destaque visual;
- tamanho adequado para toque;
- texto orientado à ação;
- estado hover/focus/active definido.

A cor pode variar entre azul e amarelo conforme o fundo e o contexto.

### 9.2 — Secondary

Para ações complementares.

Características:

- menor peso visual;
- borda ou superfície neutra;
- não competir com o CTA principal.

### 9.3 — Tertiary

Para links e ações de baixa prioridade.

Preferência por:

- texto;
- ícone opcional;
- underline ou mudança de contraste quando necessário.

---

## 10 — CTA e Conversão

O objetivo comercial principal da V1 é gerar contatos.

O WhatsApp é o principal destino de conversão.

A hierarquia recomendada é:

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
- excesso de urgência artificial.

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

## 18 — Responsividade

A implementação deve partir do mobile.

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

A preferência do usuário por `prefers-reduced-motion` deve ser respeitada.

---

## 21 — Header

O Header deve priorizar:

- identificação imediata da Flow;
- navegação simples;
- acesso ao CTA principal;
- boa leitura em mobile.

No mobile, a navegação deve ser simplificada.

No desktop, o Header pode apresentar maior estrutura sem perder simplicidade.

O logo deve permanecer visualmente dominante em relação aos elementos secundários.

---

## 22 — Hero

O Hero será uma das áreas mais importantes da V1.

Objetivos:

1. comunicar rapidamente o posicionamento;
2. estabelecer confiança;
3. apresentar a principal proposta de valor;
4. conduzir ao próximo passo.

Estrutura conceitual:

```text
Eyebrow / contexto
        ↓
Headline
        ↓
Supporting text
        ↓
Primary CTA
        ↓
Secondary context / proof
```

A composição final deve ser definida visualmente antes da implementação definitiva.

Evitar Hero puramente decorativo.

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

A linguagem visual pode utilizar o `Deep Navy` como base.

---

## 25 — Arquitetura SCSS

A implementação inicial pode seguir:

```text
src/
└── styles/
    ├── _tokens.scss
    ├── _typography.scss
    ├── _mixins.scss
    ├── _utilities.scss
    └── styles.scss
```

### Responsabilidades

`_tokens.scss`
- cores;
- spacing;
- radius;
- shadows;
- containers;
- outros valores globais.

`_typography.scss`
- famílias;
- pesos;
- escala tipográfica;
- classes tipográficas quando necessárias.

`_mixins.scss`
- breakpoints;
- utilidades realmente reutilizáveis.

`_utilities.scss`
- utilidades globais pequenas e justificadas.

`styles.scss`
- entry point global;
- imports;
- estilos base.

Evitar criar um arquivo SCSS global para cada componente sem necessidade.

---

## 26 — CSS Custom Properties

Valores que possam precisar de alteração em runtime ou que representem tokens do sistema devem preferencialmente utilizar CSS Custom Properties.

Exemplo:

```scss
:root {
  --color-brand-navy: #102f4a;
  --color-brand-blue: #406db3;
  --color-brand-yellow: #dab419;

  --color-bg: #ffffff;
  --color-bg-subtle: #f7f9fa;

  --color-text-primary: #17212b;
  --color-text-secondary: #667085;
  --color-border-default: #e5e7eb;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 999px;
}
```

Os componentes devem consumir os tokens em vez de repetir valores diretamente.

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

## 32 — O que ainda não está fechado

As seguintes decisões permanecem deliberadamente abertas:

- escala tipográfica definitiva;
- breakpoints exatos;
- container definitivo;
- composição final do Hero;
- tratamento final de gradientes;
- componentes definitivos;
- iconografia;
- microinterações;
- imagens finais;
- possíveis variações do CTA.

Esses itens devem ser fechados após a primeira exploração visual.

---

## 33 — Critérios de aceitação do Design System V1

O sistema poderá ser considerado pronto para implementação quando:

- [ ] paleta estiver validada;
- [ ] tipografia estiver validada;
- [ ] tokens principais estiverem definidos;
- [ ] grid e container estiverem definidos;
- [ ] escala de espaçamento estiver consistente;
- [ ] radius estiver consistente;
- [ ] botões estiverem definidos;
- [ ] CTA principal estiver definido;
- [ ] estados básicos estiverem previstos;
- [ ] regras mobile-first estiverem claras;
- [ ] requisitos básicos de acessibilidade estiverem definidos;
- [ ] primeira composição da Home tiver sido revisada;
- [ ] decisões refinadas estiverem refletidas neste documento.

---

## 34 — Relação com outros documentos

Este documento depende diretamente de:

```text
docs/visual-identity.md
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

O `visual-identity.md` responde principalmente:

> **"Como a Flow deve parecer?"**

Este documento responde:

> **"Como transformamos essa aparência em um sistema consistente e implementável?"**

---

## 35 — Status

**Status atual:** Foundation V1

O sistema está suficientemente definido para iniciar a exploração visual da Home, mas ainda não deve ser tratado como um Design System definitivo da marca.

A próxima etapa é validar visualmente a primeira composição da Home e atualizar este documento com as decisões que forem confirmadas.
