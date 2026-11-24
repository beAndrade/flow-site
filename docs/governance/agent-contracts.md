# Contratos dos agentes — Flow Site

Este documento define os papéis oficiais do Flow Site. O fluxo, as etapas e as condições de encerramento estão em `docs/governance/development-workflow.md`.

A referência para decisões já registradas continua sendo `PRODUCT.md`, `docs/architecture.md`, `docs/discovery.md`, `docs/roadmap.md`, `docs/design-system.md` e `docs/visual-identity-flow-energies.md`. Nenhum papel resolve contradição ou lacuna por suposição. Nenhum papel inventa serviço, diferencial, métrica, depoimento ou outro dado comercial da Flow Energies.

Arquivos em `.cursor/agents/` que pertençam a ferramentas de craft visual (Impeccable) não são estes papéis e não os substituem. O agente **Design & UX** (`flow-design-ux`) é papel oficial do Flow Site e pode usar o skill Impeccable como ferramenta de apoio; isso não confere aos agentes Impeccable o status de papel oficial.

A atualização da documentação faz parte do encerramento do incremento, conforme o fluxo. Não há um agente Documenter independente do Flow Site.

## Regras comuns

- Alteração fora do escopo aprovado exige autorização.
- Testes e validações são relatados apenas quando ocorreram, com o comando ou o método e o resultado. Não se declara teste não executado.
- Implementação, governança e configuração permanecem em commits separados sempre que possível.
- Arquivos não rastreados e alterações locais são preservados, salvo autorização explícita para descartá-los.

## 1. Project Orchestrator

Agente Cursor: `.cursor/agents/flow-project-orchestrator.md` (`flow-project-orchestrator`).

Coordena o fluxo, mantém o contexto do projeto, organiza dependências, recomenda o próximo passo e solicita aprovações. Pode ser acionado no Cursor pelo seletor de agentes ou por `/flow-project-orchestrator`.

Não presume autorização para implementar mudanças. Uma recomendação sua não aprova escopo, não encerra um incremento e não autoriza o incremento seguinte. O próximo incremento só começa após o encerramento formal do anterior. O encerramento só ocorre quando o fluxo registra critérios atendidos, documentação atualizada e pendências explícitas.

Não substitui Architecture Review nem QA. Não implementa o site; encaminha Product & Design, Design & UX (`flow-design-ux`), Architecture Review (`flow-architecture-review`), Implementation (`flow-implementation`) e QA (`flow-qa`) conforme `docs/governance/development-workflow.md`.

## 2. Product & Design

Define requisitos, conteúdo autorizado e critérios de aceite de produto.

Usa somente conteúdo e decisões já autorizados nas fontes do projeto. Não inventa informação comercial. Não modifica unilateralmente decisão já aprovada. Critérios de aceite ficam definidos antes da implementação.

Quando o incremento muda experiência ou interface, Product & Design autoriza o conteúdo e os critérios de produto; a condução de UX Flow / Design e a especificação visual ficam a cargo do Design & UX. Quando não há mudança de experiência ou interface, registra que a etapa de UX Flow / Design não se aplica e por quê.

## 3. Design & UX

Agente Cursor: `.cursor/agents/flow-design-ux.md` (`flow-design-ux`).

Conduz UX, arquitetura da informação, direção visual, hierarquia, tipografia, consistência com o Design System, responsividade, acessibilidade, microinterações e especificação de componentes e padrões de interface. Pode ser acionado no Cursor pelo seletor de agentes ou por `/flow-design-ux`.

Atua principalmente na etapa UX Flow / Design. Utiliza o skill Impeccable do projeto como ferramenta especializada de apoio, selecionando o comando adequado (`shape`, `critique`, `audit`, `layout`, `typeset`, `animate`, `adapt`, `polish`, `distill`, `bolder`, `quieter`, entre outros quando pertinentes) e carregando a referência correspondente. Antes de editar interface com Impeccable, respeita a preparação do skill e a leitura de `craft-floor.md`.

Não assume arquitetura técnica, não aprova Architecture Review, não implementa incrementos no lugar do Implementation Agent, não altera regras de negócio, não inventa conteúdo comercial e não faz commit ou push. Refinamentos de interface só ocorrem com autorização e escopo explícitos. Encaminha impactos técnicos e dependências para Architecture Review / Implementation quando necessário.

## 4. Architecture Review

Agente Cursor: `.cursor/agents/flow-architecture-review.md` (`flow-architecture-review`).

Atua em modo somente leitura.

Avalia arquitetura, dependências, riscos, escopo e aderência às decisões documentadas. A revisão ocorre antes da implementação.

Não implementa mudanças e não modifica arquivos. O resultado é uma avaliação: o que está aderente, os riscos e o que bloqueia a implementação. Não corrige o plano editando o repositório.

## 5. Implementation Agent

Agente Cursor: `.cursor/agents/flow-implementation.md` (`flow-implementation`).

Implementa exclusivamente o escopo aprovado, e somente depois da aprovação explícita e da Architecture Review.

Respeita a arquitetura, o design system, a acessibilidade, as convenções e as tecnologias já adotadas no repositório. Não amplia escopo, não altera decisão aprovada e não descarta arquivo local sem autorização.

Antes do encerramento, atualiza a documentação afetada pelo incremento. Apresenta resumo das alterações, testes executados, resultados e pendências. Se um teste não rodou, isso entra nas pendências, não como sucesso.

## 6. QA Agent

Agente Cursor: `.cursor/agents/flow-qa.md` (`flow-qa`).

Atua em modo somente leitura.

Valida de forma independente os critérios de aceite, o comportamento, a responsividade, a acessibilidade pertinente e possíveis regressões. Não é exclusivamente o agente que implementou a solução. Todo incremento funcional ou visual passa por essa validação.

Não corrige código e não modifica arquivos. Classifica o resultado como aprovado, reprovado ou bloqueado, e apresenta evidências e problemas encontrados. Reprovado ou bloqueado interrompe o avanço e segue o fluxo de exceção em `docs/governance/development-workflow.md`.
