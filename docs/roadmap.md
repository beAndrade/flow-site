# Flow Site — Roadmap

## Fase 0 — Fundação

- [x] Criar repositório GitHub
- [x] Configurar projeto Angular
- [x] Configurar TypeScript
- [x] Configurar SCSS
- [x] Habilitar SSR/SSG
- [x] Conectar repositório local ao GitHub
- [x] Definir arquitetura
- [x] Criar documentação arquitetural

## Fase 1 — Discovery

Itens que dependem de levantamento com o proprietário. O Incremento 2 não encerra esta fase:

- posicionamento da Flow
- serviços oferecidos — a união do catálogo está publicada na Home; a ficha de cada serviço continua aberta
- público-alvo
- diferenciais — os três pilares da apresentação estão na Home; a comparação com concorrentes continua aberta
- regiões atendidas — “Rio de Janeiro • Região dos Lagos” está publicado como texto; o endereço completo continua aberto
- provas sociais
- garantias
- processo comercial
- informações de contato — telefone, e-mail e @flow_energies continuam como texto, sem link. Número, mensagem padrão, `mailto:` e URL do Instagram estão confirmados na especificação do Incremento 4. Horário continua aberto.
- WhatsApp — número e mensagem padrão estão confirmados nessa especificação. O referente de “Em construção” continua aberto. A implementação não está autorizada.
- possíveis simuladores/orçamentos
- requisitos futuros de checkout

## Fase 2 — Design System

- identidade visual
- cores
- tipografia
- espaçamento
- grid
- breakpoints
- botões
- cards
- formulários
- ícones
- estados
- componentes reutilizáveis

## Fase 3 — Estrutura do site

- Header
- Navigation
- Hero
- Sobre
- Serviços
- Diferenciais
- Projetos/portfólio
- Prova social
- FAQ
- CTA
- Footer

A lista acima é o mapa antigo da fase. A Home V1 implementada no Incremento 2 usa outra ordem: Header, Hero, A Flow, Soluções, Como trabalhamos, Trajetória, Diferenciais, Contato e rodapé. Projetos, prova social e FAQ não fazem parte desse esqueleto.

## Fase 4 — Implementação V1

- páginas
- componentes
- responsividade
- SEO
- acessibilidade
- performance
- integração com WhatsApp
- analytics, quando definido

### Incremento 2 — Home V1, estrutura e navegação

Implementado. O QA independente do incremento foi `PASS WITH ISSUES` por uma questão editorial de baixo impacto. O responsável reservou o refinamento de textos e conteúdo comercial para o final do projeto; essa questão não é reaberta aqui. A correção de foco do menu mobile teve QA independente `PASS`:

- Seções A Flow, Soluções, Como trabalhamos, Trajetória, Diferenciais e Contato, mais o rodapé com nome, região e os mesmos dados de contato em texto.
- Menu com seis destinos, na ordem da página: A Flow `#a-flow`, Soluções `#solucoes`, Como trabalhamos `#como-trabalhamos`, Trajetória `#trajetoria`, Diferenciais `#diferenciais`, Contato `#contato`.
- Catálogo de Soluções como união dos dois conjuntos, sem fundir escopos diferentes. As duas consultorias permanecem distintas. Armazenamento de Energia não é off-grid. A frase de engenharia elétrica e o compromisso com ANEEL, PRODIST e ABNT ficam em A Flow.
- Trajetória com 1982 e 2023 na redação da fonte. 1982 não é fundação da Flow. 2023 não recebeu métrica nova.
- Processo de quatro etapas publicado como instalação fotovoltaica.
- Botões de contato sem destino. Telefone, e-mail e @flow_energies como texto.
- Três textos provisórios: horário, endereço além da região e linha legal do rodapé.
- Escape devolve o foco ao botão do menu mobile quando esse botão está visível. O QA independente dessa correção foi `PASS`.
- `header.component.scss` não foi alterado neste incremento. A checagem de overflow em 390 px, 1024 px e 1280 px não mostrou estouro da barra. O refinamento visual posterior alterou o SCSS do header.

O acabamento visual da Home V1 já implementada foi fechado. Não é o Incremento 3 nem o Incremento 4. O QA independente desse refinamento foi `PASS`. Textos comerciais não foram reescritos. Botões continuam sem destino. Os seis destinos do menu foram preservados. O refinamento da redação comercial continua para o final do projeto e não é reaberto.

- A imagem do Hero ocupa a largura útil da viewport. A coluna de leitura permanece limitada e alinhada às seções. A foto continua o asset atual (`/images/Solar Farm at Sunset.png`).
- O header permanece absoluto sobre o Hero, não fixo. `--header-height` não aumentou (`4.75rem`). O contraste do título branco, do eyebrow amarelo e do apoio branco sobre o scrim escuro foi visto nas capturas. Não houve auditoria formal da razão de contraste.
- O menu compacto usa o literal medido `56rem`. A navegação horizontal aparece a partir desse corte. Não se usa `var()` dentro de `@media`. `64rem` continua o patamar de padding e tipo desktop, não o corte do menu.
- O painel mobile aberto tem fundo branco opaco e links navy.
- Foram verificados Tab, um passo de Shift+Tab, Escape, o skip link visível e acionável em 390 e 1440, e a gestão de foco ao alargar e encolher a viewport. Ao alargar, o foco vai para o link visível “A Flow”. Ao encolher, o painel permanece fechado e o foco volta ao botão MENU visível. A volta completa com Shift+Tab não foi feita.
- Os grupos de Soluções estão em invólucros próprios (`.solution-group` dentro de `.solution-groups`). Duas colunas a partir de `48rem`, quando há espaço. Na validação, 768 e larguras maiores ficaram em duas colunas sem estouro de título; 390 e 430 em uma coluna.
- A hierarquia de h2 é local à Home (`.home-section h2`, `1.75rem`). Não é token global. `_typography.scss` não mudou.
- Limitações do relatório: sem auditoria formal da razão de contraste; Shift+Tab foi um passo reverso, não a varredura de todos os controles. O contorno de foco navy sobre o scrim escuro foi medido como presente; a razão desse contorno contra o fundo não foi amostrada.
- Matriz medida: 390, 430, 768, 1024, 1280 e 1440 px. Sem overflow horizontal. Folgas da barra em 1024 (80 px) e em 1280 e 1440 (176 px).
- `npx ng test --watch=false --browsers=ChromeHeadless`: exit 0, 3 SUCCESS. `npm run build`: exit 0, uma rota prerenderizada. Os três testes não cobrem o refinamento visual nem o foco.

Não fazem parte do Incremento 2:

- **Incremento 3.** Implementado e com QA independente `PASS`. Não faz parte do Incremento 2. O registro está na seção abaixo.
- **Incremento 4.** Especificado abaixo. Não faz parte do Incremento 2. A implementação não está autorizada.
- A referência `docs/visual-identity.md` em `docs/design-system.md` continua fora deste fechamento. O arquivo existente é `docs/visual-identity-flow-energies.md`.

O Incremento 2 está em commit. O refinamento visual está commitado em `08fca3f`. A alteração de `tsconfig.json` está separada em `03fff82`.

### Incremento 3 — Frase do Hero, apoio e meta description

Implementado. O QA independente foi `PASS`. As formulações continuam hipótese de trabalho: aprovadas pelo proprietário do projeto para orientar o desenvolvimento, não validadas pelo proprietário da Flow Energies, e sujeitas à validação comercial final. O texto canônico permanece em `docs/discovery.md`, seção 6. Este registro não encerra a Discovery nem fecha o item de posicionamento da seção 14.

O que foi publicado:

- `h1#home-title` em `src/app/features/home/home.component.html`: “Engenharia e soluções energéticas para um desempenho confiável.”
- Parágrafo `.hero__support` no mesmo arquivo: “Soluções energéticas pensadas para atender às necessidades de cada operação.”
- `meta name="description"` em `src/index.html`: “Conheça a Flow Energies, empresa de engenharia e soluções energéticas com foco em confiabilidade e desempenho.”

O `<title>` do documento e o `title` em `src/app/app.component.ts` continuam “Flow Energies”. Eyebrow, botões, `[CTA secundário]`, seções A Flow em diante, rodapé, menu, foto `/images/Solar Farm at Sunset.png`, SCSS, header, tokens e o acabamento visual de `08fca3f` não mudaram. A interface não ganhou selo de “provisório”. O Incremento 4 não começa com este.

Evidência: as três frases estão no fonte e no HTML prerenderizado `dist/flow-site/browser/index.html`. O diff troca somente essas três frases.

- `npx ng test --watch=false --browsers=ChromeHeadless`: 3 SUCCESS, exit 0.
- `npm run build`: exit 0, uma rota prerenderizada.
- Limitações: os três testes não cobrem diretamente as três frases. Navegador, responsividade, teclado e contraste não foram retestados nesta etapa.

### Incremento 4 — WhatsApp, e-mail e Instagram

Especificação. Não autoriza implementação. O número oficial, a mensagem padrão, o `mailto:` e a URL do Instagram estão confirmados. O referente de “Em construção” continua pendente. Não há controle com esse nome na interface; a especificação não inventa destino, rótulo nem clique. `[CTA secundário]` continua um parágrafo sem interação. Este registro não encerra a Discovery nem marca o item de contato da seção 14.

Destinos estáticos, sem JavaScript que monte a URL e sem `target="_blank"`:

- WhatsApp: `https://wa.me/5522998449702?text=Ol%C3%A1!%20Conheci%20a%20Flow%20Energies%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20a%20empresa%20e%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar.` O número visível continua `(22) 99844-9702`. A mensagem é exatamente “Olá! Conheci a Flow Energies pelo site e gostaria de conhecer melhor a empresa e entender como vocês podem me ajudar.”
- E-mail: `mailto:washington@flowenergies.com`, somente o destinatário, sem assunto nem corpo.
- Instagram: `https://www.instagram.com/flow_energies/`. O texto visível continua `@flow_energies`.

Mapeamento, quando a implementação for autorizada:

- Os dois botões “Falar no WhatsApp” em `src/app/layout/header/header.component.html` (`.header-cta--bar` e `.header-cta` em `#site-menu`), o botão “Falar com a Flow” (`.hero__cta`) e o botão “Falar com a Flow no WhatsApp” (`.contact-action`) em `src/app/features/home/home.component.html` apontam para o `wa.me`. O rótulo do Hero não muda.
- Os parágrafos do telefone em Contato e no rodapé envolvem `(22) 99844-9702` nesse mesmo `wa.me`.
- Os parágrafos do e-mail em Contato e no rodapé envolvem o endereço no `mailto:`. Não se cria botão de e-mail.
- Os parágrafos `@flow_energies` em Contato e no rodapé envolvem o identificador na URL do Instagram. Não se cria botão de Instagram.
- Nos templates, `@` continua `&#64;`.
- A região “Rio de Janeiro • Região dos Lagos” continua texto.

Aparência: os botões permanecem com a aparência aprovada. A troca para `<a>` pode exigir só o ajuste que impeça sublinhado e cor de link do navegador nesses botões. Os três fatos em texto ganham sublinhado. A classe `.header-cta--bar` fica no próprio link, para o handoff de foco continuar a comparar esse elemento. `src/app/layout/header/header.component.ts` só entra se essa comparação deixar de valer.

Segurança e acessibilidade:

- URLs literais e fixas. Nada vem de entrada do visitante.
- Só `https://wa.me`, `https://www.instagram.com` e `mailto:` para o endereço confirmado. Sem `javascript:` e sem `window.open`.
- Sem parâmetros de campanha, assunto, corpo de e-mail ou analytics.
- O nome acessível é o texto já visível. O foco usa o anel existente em `:focus-visible`.
- A área de toque dos botões permanece a atual, no mínimo 2.75rem de altura.

Fora deste incremento: textos dos Incrementos 2 e 3, menu, foto, tokens, horário, endereço completo, linha legal, processo após o contato e placeholders. Não altera `docs/architecture.md` nem `docs/design-system.md`. A divergência em que a arquitetura lista prova social como escopo atual da V1 permanece sem correção.

Critérios de aceite, para quando a implementação for autorizada:

- Cada botão “Falar no WhatsApp”, “Falar com a Flow no WhatsApp” e “Falar com a Flow” tem o `wa.me` exato, uma única vez por controle.
- Telefone de Contato e do rodapé usa o mesmo `wa.me`; o texto visível permanece `(22) 99844-9702`.
- E-mail de Contato e do rodapé usa somente `mailto:washington@flowenergies.com`; o texto visível permanece o endereço.
- Instagram de Contato e do rodapé usa exatamente `https://www.instagram.com/flow_energies/`; o texto visível permanece `@flow_energies`.
- `[CTA secundário]`, placeholders, horário, endereço completo, linha legal, textos dos Incrementos 2 e 3, menu, foto e tokens permanecem.
- Nenhum controle recebe destino ou clique atribuído a “Em construção”.
- `npx ng test --watch=false --browsers=ChromeHeadless` e `npm run build` seguem como regressão de compilação. A prova dos links é o fonte, o HTML prerenderizado e o acionamento real na QA.

Arquivos previstos, ainda sem autorização para editá-los: `src/app/layout/header/header.component.html`, `src/app/features/home/home.component.html`, `src/app/layout/footer/footer.component.html`, o SCSS desses três componentes só para a aparência do link, e `header.component.ts` somente se o foco do CTA desktop quebrar.

## Fase 5 — Deploy

Definir posteriormente a estratégia de hospedagem/deploy.

## Fase 6 — Evolução

Possíveis funcionalidades:

- orçamento/simulação
- captura estruturada de leads
- backend
- checkout
- pagamentos
- integrações externas

---

**Importante:** o roadmap é um documento vivo. Não assumir funcionalidades futuras como requisitos confirmados até que sejam validadas com o proprietário da Flow.
