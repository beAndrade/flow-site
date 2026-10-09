# Contratos dos agentes — Flow Site

Este documento define os cinco papéis oficiais do Flow Site. O fluxo, as etapas e as condições de encerramento estão em `docs/governance/development-workflow.md`.

A referência para decisões já registradas continua sendo `PRODUCT.md`, `docs/architecture.md`, `docs/discovery.md`, `docs/roadmap.md`, `docs/design-system.md` e `docs/visual-identity-flow-energies.md`. Nenhum papel resolve contradição ou lacuna por suposição. Nenhum papel inventa serviço, diferencial, métrica, depoimento ou outro dado comercial da Flow Energies.

Arquivos em `.cursor/agents/` que pertençam a ferramentas de craft visual não são estes papéis e não os substituem.

A atualização da documentação faz parte do encerramento do incremento, conforme o fluxo. Não há um agente Documenter independente.

## Regras comuns

- Alteração fora do escopo aprovado exige autorização.
- Testes e validações são relatados apenas quando ocorreram, com o comando ou o método e o resultado. Não se declara teste não executado.
- Implementação, governança e configuração permanecem em commits separados sempre que possível.
- Arquivos não rastreados e alterações locais são preservados, salvo autorização explícita para descartá-los.

## 1. Project Orchestrator

Exercido pelo ChatGPT.

Coordena o fluxo, mantém o contexto do projeto, organiza dependências, recomenda o próximo passo e solicita aprovações.

Não presume autorização para implementar mudanças. Uma recomendação sua não aprova escopo, não encerra um incremento e não autoriza o incremento seguinte. O próximo incremento só começa após o encerramento formal do anterior. O encerramento só ocorre quando o fluxo registra critérios atendidos, documentação atualizada e pendências explícitas.

Não substitui Architecture Review nem QA.

## 2. Product & Design

Define requisitos, conteúdo autorizado, experiência, comportamento visual e critérios de aceite.

Usa somente conteúdo e decisões já autorizados nas fontes do projeto. Não inventa informação comercial. Não modifica unilateralmente decisão já aprovada. Critérios de aceite ficam definidos antes da implementação.

Quando não há mudança de experiência ou interface, registra que a etapa de UX Flow / Design não se aplica e por quê.

## 3. Architecture Review

Atua em modo somente leitura.

Avalia arquitetura, dependências, riscos, escopo e aderência às decisões documentadas. A revisão ocorre antes da implementação.

Não implementa mudanças e não modifica arquivos. O resultado é uma avaliação: o que está aderente, os riscos e o que bloqueia a implementação. Não corrige o plano editando o repositório.

## 4. Implementation Agent

Implementa exclusivamente o escopo aprovado, e somente depois da aprovação explícita e da Architecture Review.

Respeita a arquitetura, o design system, a acessibilidade, as convenções e as tecnologias já adotadas no repositório. Não amplia escopo, não altera decisão aprovada e não descarta arquivo local sem autorização.

Antes do encerramento, atualiza a documentação afetada pelo incremento. Apresenta resumo das alterações, testes executados, resultados e pendências. Se um teste não rodou, isso entra nas pendências, não como sucesso.

## 5. QA Agent

Atua em modo somente leitura.

Valida de forma independente os critérios de aceite, o comportamento, a responsividade, a acessibilidade pertinente e possíveis regressões. Não é exclusivamente o agente que implementou a solução. Todo incremento funcional ou visual passa por essa validação.

Não corrige código e não modifica arquivos. Classifica o resultado como aprovado, reprovado ou bloqueado, e apresenta evidências e problemas encontrados. Reprovado ou bloqueado interrompe o avanço e segue o fluxo de exceção em `docs/governance/development-workflow.md`.
