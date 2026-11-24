# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Usuário principal: decisor de uma empresa comercial ou industrial que avalia energia solar para o próprio negócio. Chega ao site para entender se a Flow Energies é um fornecedor confiável e, se for o caso, iniciar contato.

Outros públicos não foram confirmados.

## Product Purpose

O Flow Site, na V1, é o site institucional e de geração de leads da Flow Energies. Existe para transmitir confiança, apresentar a empresa e seus serviços, e levar o visitante ao WhatsApp da empresa.

Sucesso, na V1, é o visitante compreender a empresa o suficiente para começar uma conversa no WhatsApp.

## Positioning

O site apresenta a Flow Energies e conduz o visitante ao WhatsApp. A hipótese Inc. 3 (título e meta description em `docs/discovery.md`, seção 6) permanece validada comercialmente naquele incremento. **Apoio do Hero (HR-V2-01B):** o parágrafo `.hero__support` publicado — “Do projeto elétrico e regularização à geração solar fotovoltaica: soluções sob medida com rigor técnico para reduzir custos e garantir segurança operacional.” — é conteúdo comercial aprovado pelos proprietários; no código já estava idêntico (HTML não alterado nesta etapa). Título e meta do Inc. 3 permanecem. Percepção ampla, o que a empresa não quer transmitir e o diferencial comercial amplo permanecem em aberto.

## Operating Context

- O decisor avalia a empresa no site (mobile-first) e continua o contato no WhatsApp.
- A Home publica o telefone (22) 99844-9702, o e-mail washington@flowenergies.com e o identificador @flow_energies como links na seção Contato. O WhatsApp usa esse número e a mensagem “Olá! Conheci a Flow Energies pelo site e gostaria de conhecer melhor a empresa e entender como vocês podem me ajudar.”. O e-mail usa `mailto:washington@flowenergies.com` sem assunto nem corpo. O Instagram aponta para `https://www.instagram.com/flow_energies/`. O rodapé não duplica esses canais.
- Horário de atendimento não é exibido na Home. Endereço completo além da região continua pendente e não é necessário para a V1 atual. A linha legal do rodapé está publicada: “© 2026 Flow Energies. Todos os direitos reservados. Soluções de infraestrutura elétrica.”
- CTAs Hero **implementados:** principal “Falar com um especialista” → `wa.me` (mensagem padrão inalterada); secundário “Simule sua economia” → `#simulacao`. Micro-CTA pós-Soluções preserva “Entre em contato” → `#contato` (legado Inc. 5).
- A frase “Rio de Janeiro • Região dos Lagos” está publicada como texto de contato e foi confirmada como a região da V1 atual. Rua, cidade específica e CEP continuam pendentes e não são necessários para a V1 atual.
- A documentação de produto confirmada está em português. O idioma publicado do site ainda não foi decidido à parte disso.

## Capabilities and Constraints

Confirmado / **implementado** na Home (sync HR-V2-01A + integridade comercial HR-V2-01B; implementado ≠ Discovery encerrada):

- Site institucional da Home. Ordem DOM atual: Hero → Trust Bar (sem âncora; claims **validados pelos proprietários** na HR-V2-01B) → A Flow → Diferenciais → Soluções → Simulador Solar (`#simulacao` / `app-simulacao`) → Como trabalhamos → Trajetória → Contato → rodapé. Menu (`sections[]`, 4 itens — N2 Simplificação do Navbar): A Flow `#a-flow`, Soluções `#solucoes`, Projetos (provisório, sem destino — `span` muted; “em breve” só para leitores de tela), Contato `#contato`. Simulador **fora do menu**; permanece acessível por CTAs internos (`#simulacao`, ex.: Hero secundário). Navegação compacta: Brand Overlay Sheet (navy + scrim + burger→X) abaixo de `64rem`; desktop nav a partir de `$bp-nav` / `BP_NAV = '64rem'`. CTA WhatsApp do header: azul Soft Steel (`--color-brand-blue`) na barra desktop; amarelo (`--color-cta-yellow`) no overlay mobile. O catálogo oficial de Soluções são as sete áreas (Incremento 7; Discovery §3). A união do Incremento 2 é histórico. PDF e imagem das sete áreas permanecem **não equivalentes**. O refinamento da redação comercial fica para o final do projeto.
- Incremento 3. O título do Hero e a meta description publicam as frases de `docs/discovery.md`, seção 6 (validadas naquele incremento). O apoio do Hero passou a ter texto comercial distinto, aprovado na HR-V2-01B (ver Discovery §6). O QA independente do Inc. 3 foi `PASS`.
- Incremento 4. Publicado conforme `docs/roadmap.md`: destino de WhatsApp, mensagem padrão, `mailto:` e URL do Instagram. A verificação da implementação não substitui o QA independente.
- Incremento 5. Publicado conforme `docs/roadmap.md`: na época, CTA secundário do Hero “Entre em contato” → `#contato`; Contato em duas colunas; rodapé compacto; `scroll-behavior: smooth`. **Estado atual do Hero:** secundário aponta para `#simulacao`; “Entre em contato” → `#contato` permanece no micro-CTA pós-Soluções. A verificação desta etapa não substitui o QA independente.
- Incremento 6. Publicado conforme `docs/roadmap.md`: reordenação Home/menu (Diferenciais antes de Soluções); remoção do bloco “Nossa atuação” em A Flow; micro-CTA pós-Soluções; lead de Como trabalhamos exclusivo a instalação fotovoltaica; redação do marco 1982 como jornada profissional no setor. A verificação desta etapa não substitui o QA independente.
- Incremento 7. Publicado conforme `docs/roadmap.md`: a união histórica do catálogo Soluções (Incremento 2) foi substituída pelas sete áreas oficiais da Home; micro-CTA pós-Soluções preservado. A verificação desta etapa não substitui o QA independente.
- Incremento 8. Publicado conforme `docs/roadmap.md`: ajuste editorial do corpo do marco 2023 na Trajetória (sem pretensão de “referência”); Como trabalhamos e Diferenciais inalterados. A verificação desta etapa não substitui o QA independente.
- Incremento 9. Publicado conforme `docs/roadmap.md`: domínio canônico `https://flowenergiesbr.com.br/`; `link rel="canonical"` e `og:url`; imagem de compartilhamento `public/images/Flow og.png` (`og:image` / Twitter); `twitter:card=summary_large_image`; `public/sitemap.xml` (somente a Home); `Sitemap:` em `robots.txt`. Título e meta description do Incremento 3 preservados. DNS, SSL e deploy em produção permanecem dependências externas. A verificação desta etapa não substitui o QA independente.
- Prova social e elementos de confiança, somente com material real. Obter material posteriormente. Não fabricar depoimentos, números, clientes, garantias ou serviços. Não marcado como não aplicável.
- Trust Bar **implementada**; claims da UI atual **validados pelos proprietários** (HR-V2-01B): “+40 Anos de Bagagem” (Experiência CERJ / Enel RJ), “100% Conformidade” (ANEEL, PRODIST, ABNT, NR-10), “Ponta a Ponta” (ART no CREA-RJ), “Atuação Regional”. Textos, números, layout, tipografia e animações da Trust Bar **não** foram alterados nesta etapa. A Trust Bar atual **não** é a solução definitiva de credibilidade; evolução futura prevista = portfólio / materiais reais dos proprietários.
- Apoio do Hero (`.hero__support`) = conteúdo comercial aprovado (HR-V2-01B); já estava correto no HTML.
- Simulador Solar **implementado** na Home (`features/simulacao`): estimativa com disclaimer; CTA WhatsApp interno; **fora do menu** (N2 Simplificação do Navbar); acessível por CTAs internos (`#simulacao`). **Não** encerra Discovery comercial nem substitui orçamento fechado.
- CTAs estratégicos. Conversão principal: WhatsApp. Hero: “Falar com um especialista” + “Simule sua economia”. Micro-CTA pós-Soluções: “Entre em contato” → `#contato`.
- SEO, performance e renderização SSR/SSG. Em `src/index.html`: título e descrição aprovados (Inc. 3); `og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (+ type/width/height medidos do PNG), `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`, `link rel="canonical"`. URL canônica e absolutas: `https://flowenergiesbr.com.br/`. Imagem: `https://flowenergiesbr.com.br/images/Flow%20og.png` (arquivo `public/images/Flow og.png`). `public/robots.txt` permite indexação (`Allow: /`) e declara `Sitemap: https://flowenergiesbr.com.br/sitemap.xml`. `public/sitemap.xml` lista somente a Home. Assets de `public/` são copiados no build. Redirects HTTP→HTTPS e www→apex são configuração de hospedagem/DNS, fora do app.
- Mobile-first.

Ainda fora do produto / pendente de validação (além da estimativa `#simulacao` já publicada):

- Orçamento comercial fechado / proposta técnica vinculante.
- Captura estruturada de leads (formulários, CRM).
- Backend e API.
- Checkout, fluxo de compra e pagamentos.
- Área do cliente.
- Integrações externas.
- Analytics, até ser definido.

Termos: Flow Energies (empresa); Flow Site (este site). A Home publica engenharia elétrica e energia solar fotovoltaica no mesmo catálogo das sete áreas, sem tratar uma como sinônimo da outra. Itens da união histórica do Incremento 2 que não fazem parte das sete áreas (Redes de Distribuição, Consultoria e Projetos Especiais, Armazenamento de Energia, Supervisão e Controle, subitens FV) não são publicados na Home. Em A Flow permanece o compromisso técnico e regulatório (ANEEL, PRODIST e ABNT); a frase de engenharia elétrica para o setor elétrico brasileiro não figura mais em A Flow após o Incremento 6 (saiu com o bloco “Nossa atuação”). Nem o compromisso regulatório nem essa frase são serviços extras de Soluções.

Decisões de produto em aberto: endereço completo além da região (pendente e não necessário para a V1 atual); segmentos dentro de comercial, industrial e residencial; problemas que a empresa resolve; proposta de valor; concorrência; objeções; provas sociais e certificações / portfólio real (obter material posteriormente, sem marcar N/A — evolução da Trust Bar atual); Discovery comercial do simulador/orçamento além da estimativa publicada; tom de voz e personalidade da marca; fichas individuais de cada serviço. Claims da Trust Bar e apoio do Hero: **validados** na HR-V2-01B (não reabrir como pendência de validação). Horário não é exibido. A linha legal do rodapé está publicada. URL canônica e imagem de compartilhamento: Incremento 9. DNS/SSL/host permanecem externos. O catálogo das sete áreas está publicado (Inc. 7). O refinamento dos textos já publicados fica para o final do projeto.

## Brand Commitments

- Nome: Flow Energies.
- Existe um logo atual, usado como marca de referência do projeto. Não há manual formal de identidade visual entregue ao projeto; a direção digital documentada em `docs/visual-identity-flow-energies.md` é diretriz de projeto, não regra oficial da marca, até validação.
- Tom de voz e personalidade da marca estão em aberto.

## Evidence on Hand

- Escopo e restrições: `docs/architecture.md`, `docs/roadmap.md`, `docs/discovery.md`.
- O Discovery continua em andamento. Histórico dos Incrementos 2–9 e do N2 Simplificação do Navbar em `docs/roadmap.md` / `docs/discovery.md`. Sync HR-V2-01A alinhou a documentação ao estado **implementado**. HR-V2-01B registra validação comercial pelos proprietários dos claims da Trust Bar e do apoio do Hero; a Discovery **não** está encerrada. Outros itens comerciais seguem pendentes.
- Na verificação do Incremento 4, `npx ng test --watch=false --browsers=ChromeHeadless` teve 3 SUCCESS e exit 0. `npm run build` teve exit 0 e uma rota prerenderizada. Os três testes não cobrem os links. O prerender continha 6 destinos `wa.me`, 2 `mailto:` e 2 Instagram. Menu, Escape, 390 px e 1440 px foram vistos na página local. O anel `:focus-visible` não foi medido. Não houve navegação para fora do site. Essa verificação não é o QA independente. A verificação do Incremento 5 fica registrada em `docs/roadmap.md` e também não substitui o QA independente.
- O QA independente do Incremento 3 foi `PASS`. As três frases foram conferidas no fonte e no HTML prerenderizado e, depois, validadas comercialmente pelos responsáveis da Flow Energies, sem reescrita.
- A Home está em `src/app/features/home/`. O simulador embutido está em `src/app/features/simulacao/`. O menu está em `src/app/layout/header/`. O rodapé está em `src/app/layout/footer/`.
- Ao fechar o menu mobile com Escape, o foco volta ao botão de abertura quando ele está visível. O QA independente dessa correção foi `PASS`. Os três testes automatizados do projeto não cobrem esse foco. No N2 Simplificação do Navbar, o QA registrou **APPROVED WITH OBSERVATIONS**: o retorno do foco ao botão do menu após o CTA WhatsApp do overlay mobile **não** foi verificado — observação documentada, sem remediação neste incremento.
- O acabamento visual da Home V1 está commitado em `08fca3f`. A alteração de `tsconfig.json` está separada em `03fff82`. O QA independente foi `PASS`. Não houve auditoria formal da razão de contraste. O Shift+Tab verificado foi um passo reverso, não a varredura de todos os controles. O contorno de foco navy sobre o scrim escuro foi medido como presente; a razão desse contorno contra o fundo não foi amostrada. Os três testes automatizados não cobrem o refinamento visual nem o foco.
- Direção visual de projeto (não é prova comercial): `docs/visual-identity-flow-energies.md`, `docs/design-system.md`.
- Não há, no repositório, depoimentos, casos, fotos de projetos, certificações, garantias ou métricas comerciais além do que a Home publica a partir das fontes já autorizadas. O telefone publicado é o link de WhatsApp do Incremento 4.
- Trabalho futuro não deve inventar clientes, depoimentos, números, garantias, certificações, preços ou serviços.

## Product Principles

1. O site existe para um decisor de empresa entender a Flow o suficiente para iniciar uma conversa no WhatsApp.
2. Não publicar afirmação comercial não validada. Claims da Trust Bar e o apoio do Hero publicados foram **validados pelos proprietários** (HR-V2-01B). Provas sociais/portfólio, diferencial amplo e demais claims novos permanecem abertos até confirmação — mesmo que já estejam na UI.
3. A Home permanece institucional com estimativa solar embutida (`#simulacao`, disclaimer). Não construir formulário, CRM, checkout, pagamentos, orçamento fechado ou analytics antes da validação.
4. Mobile-first, performance, SEO e acessibilidade são restrições do produto, não acabamento opcional.
5. Crescer por fases. Não implementar capacidade futura antes de ela ser confirmada. Implementado ≠ Discovery encerrada.

## Accessibility & Inclusion

Requisitos já estabelecidos para o site: contraste, foco visível, navegação por teclado, HTML semântico, textos alternativos, rótulos em controles, áreas de toque adequadas, informação que não dependa só de cor, e respeito à preferência de redução de movimento. No menu mobile, Escape fecha o painel e devolve o foco ao botão de abertura quando esse botão está visível. O QA independente dessa correção foi `PASS`. Observação do N2 Simplificação do Navbar (QA **APPROVED WITH OBSERVATIONS**): retorno do foco ao botão do menu após o CTA WhatsApp do overlay mobile não verificado — sem remediação neste incremento. A arquitetura pede boas práticas WCAG; um nível formal (A/AA/AAA) não foi definido.
