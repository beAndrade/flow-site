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
- informações de contato — telefone, e-mail e @flow_energies estão como texto, sem link
- WhatsApp — destino, mensagem padrão e o referente de “Em construção” continuam abertos
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
- `header.component.scss` não foi alterado. A checagem de overflow em 390 px, 1024 px e 1280 px não mostrou estouro da barra.

O diagnóstico e o refinamento visual da Home continuam pendentes. A estrutura foi implementada; esse acabamento não foi feito.

Não fazem parte do Incremento 2:

- **Incremento 3.** Frase institucional do Hero e da meta description. A foto atual permanece. A meta publicada continua “Flow Energies. Energia solar para empresas comerciais e industriais.”
- **Incremento 4.** Ligar WhatsApp, e-mail e Instagram só depois de confirmar o número oficial, a mensagem padrão, o referente de “Em construção”, o uso de `mailto:` e a URL do Instagram.
- A referência `docs/visual-identity.md` em `docs/design-system.md` continua fora deste fechamento. O arquivo existente é `docs/visual-identity-flow-energies.md`.

O Incremento 2 não está em commit. Este registro documenta o estado local autorizado para revisão do diff.

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
