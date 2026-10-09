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

O site apresenta a Flow Energies e conduz o visitante ao WhatsApp. O diferencial comercial da empresa — o que um concorrente de energia solar não poderia copiar com verdade — permanece em aberto, pendente do Discovery com o proprietário.

## Operating Context

- O decisor avalia a empresa no site (mobile-first) e continua o contato no WhatsApp.
- Número, horário de atendimento, mensagem padrão e processo comercial após o contato estão em aberto.
- CTA secundário está em aberto.
- Região atendida e localização da empresa estão em aberto.
- A documentação de produto confirmada está em português. O idioma publicado do site ainda não foi decidido à parte disso.

## Capabilities and Constraints

Confirmado para a V1:

- Site institucional: apresentar a empresa, serviços e diferenciais. O conteúdo desses blocos ainda não foi validado.
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

Termos: Flow Energies (empresa); Flow Site (este site); energia solar (área de atuação — catálogo de serviços ainda vazio).

Decisões de produto em aberto: história e perfil institucional, catálogo de serviços, segmentos dentro de comercial/industrial, problemas que a empresa resolve, proposta de valor, concorrência, objeções, provas sociais, certificações, tom de voz e personalidade da marca.

## Brand Commitments

- Nome: Flow Energies.
- Existe um logo atual, usado como marca de referência do projeto. Não há manual formal de identidade visual entregue ao projeto; a direção digital documentada em `docs/visual-identity-flow-energies.md` é diretriz de projeto, não regra oficial da marca, até validação.
- Tom de voz e personalidade da marca estão em aberto.

## Evidence on Hand

- Escopo e restrições: `docs/architecture.md`, `docs/roadmap.md`, `docs/discovery.md`.
- O Discovery está em andamento. Quase todo o conteúdo comercial está marcado como pendente.
- Direção visual de projeto (não é prova comercial): `docs/visual-identity-flow-energies.md`, `docs/design-system.md`.
- Não há, no repositório, depoimentos, casos, fotos de projetos, catálogo de serviços, número de WhatsApp ou materiais de marca além do que esses documentos declaram.
- Trabalho futuro não deve inventar clientes, depoimentos, números, garantias, certificações, preços ou serviços.

## Product Principles

1. O site existe para um decisor de empresa entender a Flow o suficiente para iniciar uma conversa no WhatsApp.
2. Não publicar afirmação comercial não validada. Serviços, provas, números e diferencial permanecem abertos até o proprietário confirmar.
3. A V1 permanece institucional. Não construir simulador, formulário, CRM, checkout, pagamentos ou analytics antes da validação.
4. Mobile-first, performance, SEO e acessibilidade são restrições do produto, não acabamento opcional.
5. Crescer por fases. Não implementar capacidade futura antes de ela ser confirmada.

## Accessibility & Inclusion

Requisitos já estabelecidos para o site: contraste, foco visível, navegação por teclado, HTML semântico, textos alternativos, rótulos em controles, áreas de toque adequadas, informação que não dependa só de cor, e respeito à preferência de redução de movimento. A arquitetura pede boas práticas WCAG; um nível formal (A/AA/AAA) não foi definido.
