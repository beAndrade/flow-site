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
- A Home publica o telefone (22) 99844-9702, o e-mail washington@flowenergies.com e o identificador @flow_energies como links. O WhatsApp usa esse número e a mensagem “Olá! Conheci a Flow Energies pelo site e gostaria de conhecer melhor a empresa e entender como vocês podem me ajudar.”. O e-mail usa `mailto:washington@flowenergies.com` sem assunto nem corpo. O Instagram aponta para `https://www.instagram.com/flow_energies/`. O referente de “Em construção” continua pendente de identificação.
- Horário de atendimento permanece provisório no site, com ciência dos responsáveis. A linha legal do rodapé continua pendente: o texto aprovado ainda precisa ser fornecido.
- CTA secundário: decisão comercial definida — texto “Conhecer nossas soluções”, destino `#solucoes` (seção de soluções da Home). O CTA principal “Falar com a Flow” permanece no WhatsApp. A publicação desse CTA na interface ainda não foi implementada nesta etapa documental; a Home continua a exibir o marcador `[CTA secundário]`, sem interação.
- A frase “Rio de Janeiro • Região dos Lagos” está publicada como texto de contato e foi confirmada como a região da V1 atual. Rua, cidade específica e CEP continuam pendentes e não são necessários para a V1 atual.
- A documentação de produto confirmada está em português. O idioma publicado do site ainda não foi decidido à parte disso.

## Capabilities and Constraints

Confirmado para a V1:

- Site institucional da Home V1. A estrutura publicada é Hero, A Flow, Soluções, Como trabalhamos, Trajetória, Diferenciais, Contato e rodapé. O menu aponta, nessa ordem, para `#a-flow`, `#solucoes`, `#como-trabalhamos`, `#trajetoria`, `#diferenciais` e `#contato`. O texto dessas seções veio das fontes aprovadas para o Incremento 2. A organização oficial do catálogo de Soluções é a união já publicada na Home; as duas fontes comerciais (imagem de sete áreas e PDF) permanecem registradas em Discovery, sem classificação adicional inventada. O refinamento da redação comercial fica para o final do projeto. O acabamento visual dessa Home já implementada foi fechado. O QA independente desse refinamento foi `PASS`. Esse fechamento visual não é o Incremento 3 nem o Incremento 4.
- Incremento 3. O título do Hero, o apoio e a meta description publicam as frases de `docs/discovery.md`, seção 6. O QA independente foi `PASS`. Os responsáveis da Flow Energies validaram comercialmente essas frases, sem alteração de texto.
- Incremento 4. Publicado conforme `docs/roadmap.md`: destino de WhatsApp, mensagem padrão, `mailto:` e URL do Instagram. “Em construção” continua sem destino identificado. O marcador `[CTA secundário]` ainda aparece na Home sem interação; a decisão comercial do CTA secundário está registrada em Discovery/PRODUCT, mas a publicação na UI fica fora desta etapa documental. A verificação da implementação não substitui o QA independente.
- Prova social e elementos de confiança, somente com material real. Obter material posteriormente. Não fabricar depoimentos, números, clientes, garantias ou serviços. Não marcado como não aplicável.
- CTAs estratégicos. O CTA principal é o WhatsApp. O CTA secundário está definido comercialmente (“Conhecer nossas soluções” → `#solucoes`); a implementação na interface ainda não ocorreu nesta etapa.
- SEO, performance e renderização SSR/SSG.
- Mobile-first.

Fora da V1 até validação do proprietário:

- Simulação ou orçamento online de energia solar.
- Captura estruturada de leads (formulários, CRM).
- Backend e API.
- Checkout, fluxo de compra e pagamentos.
- Área do cliente.
- Integrações externas.
- Analytics, até ser definido.

Termos: Flow Energies (empresa); Flow Site (este site). A Home publica engenharia elétrica e energia solar fotovoltaica no mesmo catálogo, sem tratar uma como sinônimo da outra. Armazenamento de Energia não é off-grid. Consultoria Energética e Consultoria e Projetos Especiais permanecem entradas distintas. A frase de engenharia elétrica para o setor elétrico brasileiro e o compromisso com ANEEL, PRODIST e ABNT ficam em A Flow, não como serviços extras de Soluções.

Decisões de produto em aberto: referente de “Em construção” (a identificar); horário (provisório, com ciência dos responsáveis); endereço completo além da região (pendente e não necessário para a V1 atual); linha legal do rodapé (texto aprovado ainda precisa ser fornecido); segmentos dentro de comercial, industrial e residencial; problemas que a empresa resolve; proposta de valor; concorrência; objeções; provas sociais e certificações (obter material posteriormente, sem marcar N/A); tom de voz e personalidade da marca. A decisão comercial do CTA secundário (texto e destino) está definida; a publicação na interface ainda não foi implementada. O refinamento dos textos já publicados fica para o final do projeto e não reabre o Incremento 2.

## Brand Commitments

- Nome: Flow Energies.
- Existe um logo atual, usado como marca de referência do projeto. Não há manual formal de identidade visual entregue ao projeto; a direção digital documentada em `docs/visual-identity-flow-energies.md` é diretriz de projeto, não regra oficial da marca, até validação.
- Tom de voz e personalidade da marca estão em aberto.

## Evidence on Hand

- Escopo e restrições: `docs/architecture.md`, `docs/roadmap.md`, `docs/discovery.md`.
- O Discovery continua em andamento. O Incremento 2 publicou a estrutura da Home e os textos de fonte já autorizados. O Incremento 3 publicou as frases da seção 6 no Hero e na meta description; a validação comercial da Flow Energies confirmou esses textos. O Incremento 4 publicou os links de WhatsApp, e-mail e Instagram. A união do catálogo na Home foi confirmada como organização oficial. A decisão comercial do CTA secundário (“Conhecer nossas soluções” → `#solucoes`) está registrada; a Home ainda exibe o marcador `[CTA secundário]` até uma etapa de implementação de UI. Vários itens comerciais seguem pendentes.
- Na verificação do Incremento 4, `npx ng test --watch=false --browsers=ChromeHeadless` teve 3 SUCCESS e exit 0. `npm run build` teve exit 0 e uma rota prerenderizada. Os três testes não cobrem os links. O prerender contém 6 destinos `wa.me`, 2 `mailto:` e 2 Instagram. Menu, Escape, 390 px e 1440 px foram vistos na página local. O anel `:focus-visible` não foi medido. Não houve navegação para fora do site. Essa verificação não é o QA independente.
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
