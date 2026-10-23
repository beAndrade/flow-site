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

O site apresenta a Flow Energies e conduz o visitante ao WhatsApp. Há uma hipótese de trabalho de posicionamento, aprovada pelo proprietário do projeto para orientar o desenvolvimento, registrada em `docs/discovery.md`, seção 6. Não foi validada pelo proprietário da Flow Energies e será revista na validação comercial final. O diferencial comercial da empresa — o que um concorrente de energia solar não poderia copiar com verdade — permanece em aberto.

## Operating Context

- O decisor avalia a empresa no site (mobile-first) e continua o contato no WhatsApp.
- A Home publica o telefone (22) 99844-9702, o e-mail e o identificador @flow_energies como texto, sem link. Número oficial de WhatsApp, mensagem padrão, o referente de “Em construção”, `mailto:` e URL do Instagram continuam em aberto.
- Horário de atendimento, endereço além de “Rio de Janeiro • Região dos Lagos” e a linha legal do rodapé estão em aberto. No site, esses três vãos são texto provisório.
- CTA secundário está em aberto.
- A frase “Rio de Janeiro • Região dos Lagos” está publicada como texto de contato. Rua, cidade específica da Região dos Lagos e CEP continuam em aberto.
- A documentação de produto confirmada está em português. O idioma publicado do site ainda não foi decidido à parte disso.

## Capabilities and Constraints

Confirmado para a V1:

- Site institucional da Home V1. A estrutura publicada é Hero, A Flow, Soluções, Como trabalhamos, Trajetória, Diferenciais, Contato e rodapé. O menu aponta, nessa ordem, para `#a-flow`, `#solucoes`, `#como-trabalhamos`, `#trajetoria`, `#diferenciais` e `#contato`. O texto dessas seções veio das fontes aprovadas para o Incremento 2. O refinamento da redação comercial fica para o final do projeto. O acabamento visual dessa Home já implementada foi fechado. O QA independente desse refinamento foi `PASS`. Esse fechamento não é o Incremento 3 nem o Incremento 4.
- Prova social e elementos de confiança, somente com material real. Não fabricar depoimentos, números, clientes, garantias ou serviços.
- CTAs estratégicos. O CTA principal é o WhatsApp.
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

Decisões de produto em aberto: frase do Hero e meta description, como hipótese provisória ainda sem validação da empresa; destino de WhatsApp, `mailto:` e Instagram; horário, endereço completo e linha legal; segmentos dentro de comercial, industrial e residencial; problemas que a empresa resolve; proposta de valor; concorrência; objeções; provas sociais; certificações; tom de voz e personalidade da marca. O refinamento dos textos já publicados fica para o final do projeto e não reabre o Incremento 2.

## Brand Commitments

- Nome: Flow Energies.
- Existe um logo atual, usado como marca de referência do projeto. Não há manual formal de identidade visual entregue ao projeto; a direção digital documentada em `docs/visual-identity-flow-energies.md` é diretriz de projeto, não regra oficial da marca, até validação.
- Tom de voz e personalidade da marca estão em aberto.

## Evidence on Hand

- Escopo e restrições: `docs/architecture.md`, `docs/roadmap.md`, `docs/discovery.md`.
- O Discovery continua em andamento. O Incremento 2 publicou a estrutura da Home e os textos de fonte já autorizados. Vários itens comerciais seguem pendentes.
- A Home está em `src/app/features/home/`. O menu está em `src/app/layout/header/`. O rodapé está em `src/app/layout/footer/`.
- Ao fechar o menu mobile com Escape, o foco volta ao botão de abertura quando ele está visível. O QA independente dessa correção foi `PASS`. Os três testes automatizados do projeto não cobrem esse foco.
- O acabamento visual da Home V1 está commitado em `08fca3f`. A alteração de `tsconfig.json` está separada em `03fff82`. O QA independente foi `PASS`. Não houve auditoria formal da razão de contraste. O Shift+Tab verificado foi um passo reverso, não a varredura de todos os controles. O contorno de foco navy sobre o scrim escuro foi medido como presente; a razão desse contorno contra o fundo não foi amostrada. Os três testes automatizados não cobrem o refinamento visual nem o foco.
- Direção visual de projeto (não é prova comercial): `docs/visual-identity-flow-energies.md`, `docs/design-system.md`.
- Não há, no repositório, depoimentos, casos, fotos de projetos, certificações, garantias ou métricas comerciais além do que a Home publica a partir das fontes já autorizadas. O telefone não é um link de WhatsApp.
- Trabalho futuro não deve inventar clientes, depoimentos, números, garantias, certificações, preços ou serviços.

## Product Principles

1. O site existe para um decisor de empresa entender a Flow o suficiente para iniciar uma conversa no WhatsApp.
2. Não publicar afirmação comercial não validada. Serviços, provas, números e diferencial permanecem abertos até o proprietário confirmar.
3. A V1 permanece institucional. Não construir simulador, formulário, CRM, checkout, pagamentos ou analytics antes da validação.
4. Mobile-first, performance, SEO e acessibilidade são restrições do produto, não acabamento opcional.
5. Crescer por fases. Não implementar capacidade futura antes de ela ser confirmada.

## Accessibility & Inclusion

Requisitos já estabelecidos para o site: contraste, foco visível, navegação por teclado, HTML semântico, textos alternativos, rótulos em controles, áreas de toque adequadas, informação que não dependa só de cor, e respeito à preferência de redução de movimento. No menu mobile, Escape fecha o painel e devolve o foco ao botão de abertura quando esse botão está visível. O QA independente dessa correção foi `PASS`. A arquitetura pede boas práticas WCAG; um nível formal (A/AA/AAA) não foi definido.
