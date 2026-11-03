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

O site apresenta a Flow Energies e conduz o visitante ao WhatsApp. O posicionamento e as frases do Hero, do apoio e da meta description registrados em `docs/discovery.md`, seção 6, foram validados comercialmente pelos responsáveis da Flow Energies, com os textos exatos já publicados. Percepção ampla, o que a empresa não quer transmitir e o diferencial comercial — o que um concorrente de energia solar não poderia copiar com verdade — permanecem em aberto.

## Operating Context

- O decisor avalia a empresa no site (mobile-first) e continua o contato no WhatsApp.
- A Home publica o telefone (22) 99844-9702, o e-mail washington@flowenergies.com e o identificador @flow_energies como links na seção Contato. O WhatsApp usa esse número e a mensagem “Olá! Conheci a Flow Energies pelo site e gostaria de conhecer melhor a empresa e entender como vocês podem me ajudar.”. O e-mail usa `mailto:washington@flowenergies.com` sem assunto nem corpo. O Instagram aponta para `https://www.instagram.com/flow_energies/`. O rodapé não duplica esses canais.
- Horário de atendimento não é exibido na Home. Endereço completo além da região continua pendente e não é necessário para a V1 atual. A linha legal do rodapé está publicada: “© 2026 Flow Energies. Todos os direitos reservados. Soluções de infraestrutura elétrica.”
- CTA secundário: decisão comercial atualizada no Incremento 5 — texto “Entre em contato”, destino `#contato`. O CTA principal “Falar com a Flow” permanece no WhatsApp.
- A frase “Rio de Janeiro • Região dos Lagos” está publicada como texto de contato e foi confirmada como a região da V1 atual. Rua, cidade específica e CEP continuam pendentes e não são necessários para a V1 atual.
- A documentação de produto confirmada está em português. O idioma publicado do site ainda não foi decidido à parte disso.

## Capabilities and Constraints

Confirmado para a V1:

- Site institucional da Home V1. A estrutura publicada é Hero, A Flow, Diferenciais, Soluções, Como trabalhamos, Trajetória, Contato e rodapé. O menu aponta, nessa ordem, para `#a-flow`, `#diferenciais`, `#solucoes`, `#como-trabalhamos`, `#trajetoria` e `#contato`. O texto-base dessas seções veio das fontes aprovadas para o Incremento 2; a ordem e os ajustes de IA/conversão seguem o Incremento 6. A organização oficial do catálogo de Soluções continua a união já publicada na Home até o Incremento 7; as duas fontes comerciais (imagem de sete áreas e PDF) permanecem registradas em Discovery como listas distintas, sem classificação adicional inventada. Em `docs/discovery.md`, seção 3, há rascunho de trabalho do conteúdo-base das sete áreas, ainda não aprovado para publicação — a publicação das sete áreas é o Incremento 7. O refinamento da redação comercial fica para o final do projeto. O acabamento visual da Home V1 já implementada foi fechado. O QA independente desse refinamento foi `PASS`. Esse fechamento visual não é o Incremento 3 nem o Incremento 4.
- Incremento 3. O título do Hero, o apoio e a meta description publicam as frases de `docs/discovery.md`, seção 6. O QA independente foi `PASS`. Os responsáveis da Flow Energies validaram comercialmente essas frases, sem alteração de texto.
- Incremento 4. Publicado conforme `docs/roadmap.md`: destino de WhatsApp, mensagem padrão, `mailto:` e URL do Instagram. A verificação da implementação não substitui o QA independente.
- Incremento 5. Publicado conforme `docs/roadmap.md`: CTA secundário “Entre em contato” → `#contato`; Contato em duas colunas (painel navy + cartões); rodapé compacto com marca, legal e voltar ao topo, sem canais; `scroll-behavior: smooth` em `html` (reduced-motion já forçava `auto`). A verificação desta etapa não substitui o QA independente.
- Incremento 6. Publicado conforme `docs/roadmap.md`: reordenação Home/menu (Diferenciais antes de Soluções); remoção do bloco “Nossa atuação” em A Flow; micro-CTA pós-Soluções; lead de Como trabalhamos exclusivo a instalação fotovoltaica; redação do marco 1982 como jornada profissional no setor. A verificação desta etapa não substitui o QA independente.
- Prova social e elementos de confiança, somente com material real. Obter material posteriormente. Não fabricar depoimentos, números, clientes, garantias ou serviços. Não marcado como não aplicável.
- CTAs estratégicos. O CTA principal é o WhatsApp. O CTA secundário (“Entre em contato” → `#contato`) está publicado na Home.
- SEO, performance e renderização SSR/SSG. Metadados Open Graph e Twitter Card básicos estão em `src/index.html` (título, descrição aprovada, `og:type`, `og:locale`, `twitter:card=summary`). `public/robots.txt` permite indexação (`Allow: /`) e é copiado para o dist no build. Sem `og:url`, `og:image`, `link rel="canonical"` nem `sitemap.xml` publicado: a URL pública definitiva e a imagem de compartilhamento ainda não foram definidas; o protocolo de sitemap exige `loc` absoluta e não deve receber domínio inventado.
- Mobile-first.

Fora da V1 até validação do proprietário:

- Simulação ou orçamento online de energia solar.
- Captura estruturada de leads (formulários, CRM).
- Backend e API.
- Checkout, fluxo de compra e pagamentos.
- Área do cliente.
- Integrações externas.
- Analytics, até ser definido.

Termos: Flow Energies (empresa); Flow Site (este site). A Home publica engenharia elétrica e energia solar fotovoltaica no mesmo catálogo, sem tratar uma como sinônimo da outra. Armazenamento de Energia não é off-grid. Consultoria Energética e Consultoria e Projetos Especiais permanecem entradas distintas. Em A Flow permanece o compromisso técnico e regulatório (ANEEL, PRODIST e ABNT); a frase de engenharia elétrica para o setor elétrico brasileiro não figura mais em A Flow após o Incremento 6 (saiu com o bloco “Nossa atuação”). Nem o compromisso regulatório nem essa frase são serviços extras de Soluções.

Decisões de produto em aberto: endereço completo além da região (pendente e não necessário para a V1 atual); URL pública definitiva do site (necessária para `og:url`, canonical, diretiva `Sitemap:` em `robots.txt` e `sitemap.xml` com `loc` absolutas); imagem de compartilhamento (`og:image` / Twitter); segmentos dentro de comercial, industrial e residencial; problemas que a empresa resolve; proposta de valor; concorrência; objeções; provas sociais e certificações (obter material posteriormente, sem marcar N/A); tom de voz e personalidade da marca; aprovação para publicação do rascunho de conteúdo-base das sete áreas (ver `docs/discovery.md`, seção 3). Horário não é exibido. A linha legal do rodapé está publicada. O `<title>` e `og:title` / `twitter:title` usam “Flow Energies | Engenharia e soluções energéticas”, derivado do posicionamento aprovado na Discovery §6, sem alterar a meta description. A decisão comercial do CTA secundário (“Entre em contato” → `#contato`) está definida e publicada no Incremento 5. O refinamento dos textos já publicados fica para o final do projeto e não reabre o Incremento 2.

## Brand Commitments

- Nome: Flow Energies.
- Existe um logo atual, usado como marca de referência do projeto. Não há manual formal de identidade visual entregue ao projeto; a direção digital documentada em `docs/visual-identity-flow-energies.md` é diretriz de projeto, não regra oficial da marca, até validação.
- Tom de voz e personalidade da marca estão em aberto.

## Evidence on Hand

- Escopo e restrições: `docs/architecture.md`, `docs/roadmap.md`, `docs/discovery.md`.
- O Discovery continua em andamento. O Incremento 2 publicou a estrutura da Home e os textos de fonte já autorizados. O Incremento 3 publicou as frases da seção 6 no Hero e na meta description; a validação comercial da Flow Energies confirmou esses textos. O Incremento 4 publicou os links de WhatsApp, e-mail e Instagram. O Incremento 5 atualizou o CTA secundário, a composição de Contato e o rodapé. O Incremento 6 reordenou a Home/menu, removeu “Nossa atuação” de A Flow, acrescentou micro-CTA pós-Soluções e clarificou Como trabalhamos (FV) e o marco 1982; a união do catálogo Soluções permanece até o Incremento 7. Há rascunho de trabalho do conteúdo-base das sete áreas em Discovery (seção 3), ainda não aprovado para publicação — publicação das sete áreas = Incremento 7. A decisão comercial do CTA secundário (“Entre em contato” → `#contato`) está registrada e publicada na Home. Vários itens comerciais seguem pendentes.
- Na verificação do Incremento 4, `npx ng test --watch=false --browsers=ChromeHeadless` teve 3 SUCCESS e exit 0. `npm run build` teve exit 0 e uma rota prerenderizada. Os três testes não cobrem os links. O prerender continha 6 destinos `wa.me`, 2 `mailto:` e 2 Instagram. Menu, Escape, 390 px e 1440 px foram vistos na página local. O anel `:focus-visible` não foi medido. Não houve navegação para fora do site. Essa verificação não é o QA independente. A verificação do Incremento 5 fica registrada em `docs/roadmap.md` e também não substitui o QA independente.
- O QA independente do Incremento 3 foi `PASS`. As três frases foram conferidas no fonte e no HTML prerenderizado e, depois, validadas comercialmente pelos responsáveis da Flow Energies, sem reescrita.
- A Home está em `src/app/features/home/`. O menu está em `src/app/layout/header/`. O rodapé está em `src/app/layout/footer/`.
- Ao fechar o menu mobile com Escape, o foco volta ao botão de abertura quando ele está visível. O QA independente dessa correção foi `PASS`. Os três testes automatizados do projeto não cobrem esse foco.
- O acabamento visual da Home V1 está commitado em `08fca3f`. A alteração de `tsconfig.json` está separada em `03fff82`. O QA independente foi `PASS`. Não houve auditoria formal da razão de contraste. O Shift+Tab verificado foi um passo reverso, não a varredura de todos os controles. O contorno de foco navy sobre o scrim escuro foi medido como presente; a razão desse contorno contra o fundo não foi amostrada. Os três testes automatizados não cobrem o refinamento visual nem o foco.
- Direção visual de projeto (não é prova comercial): `docs/visual-identity-flow-energies.md`, `docs/design-system.md`.
- Não há, no repositório, depoimentos, casos, fotos de projetos, certificações, garantias ou métricas comerciais além do que a Home publica a partir das fontes já autorizadas. O telefone publicado é o link de WhatsApp do Incremento 4.
- Trabalho futuro não deve inventar clientes, depoimentos, números, garantias, certificações, preços ou serviços.

## Product Principles

1. O site existe para um decisor de empresa entender a Flow o suficiente para iniciar uma conversa no WhatsApp.
2. Não publicar afirmação comercial não validada. Serviços, provas, números e diferencial permanecem abertos até o proprietário confirmar.
3. A V1 permanece institucional. Não construir simulador, formulário, CRM, checkout, pagamentos ou analytics antes da validação.
4. Mobile-first, performance, SEO e acessibilidade são restrições do produto, não acabamento opcional.
5. Crescer por fases. Não implementar capacidade futura antes de ela ser confirmada.

## Accessibility & Inclusion

Requisitos já estabelecidos para o site: contraste, foco visível, navegação por teclado, HTML semântico, textos alternativos, rótulos em controles, áreas de toque adequadas, informação que não dependa só de cor, e respeito à preferência de redução de movimento. No menu mobile, Escape fecha o painel e devolve o foco ao botão de abertura quando esse botão está visível. O QA independente dessa correção foi `PASS`. A arquitetura pede boas práticas WCAG; um nível formal (A/AA/AAA) não foi definido.
