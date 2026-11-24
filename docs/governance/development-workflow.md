# Fluxo de desenvolvimento — Flow Site (Workflow V2)

Este documento define o fluxo oficial de um incremento do Flow Site. Não substitui as decisões já registradas em `PRODUCT.md`, `docs/architecture.md`, `docs/discovery.md`, `docs/roadmap.md`, `docs/design-system.md` e `docs/visual-identity-flow-energies.md`.

Esses documentos são a referência para o que já foi decidido. Dúvida, contradição ou informação pendente deve ser sinalizada. Não se resolve por suposição, e não se inventa serviço, diferencial, métrica, depoimento ou outro dado comercial da Flow Energies.

## Precedência

Em conflito entre fontes de processo, a ordem é:

1. Este documento (`docs/governance/development-workflow.md`)
2. `docs/governance/agent-contracts.md`
3. Arquivos em `.cursor/agents/`

Identifique o conflito e peça decisão do responsável. Não altere silenciosamente as definições.

## Princípio adaptativo

O Workflow V2 é **adaptativo por nível de risco**. Cada incremento é classificado pelo Project Orchestrator como **N1**, **N2** ou **N3** antes da implementação. A classificação determina quais etapas formais ocorrem e com que profundidade.

A profundidade de cada artefato acompanha complexidade e risco. Controles nucleares permanecem em todos os níveis (ver [Núcleo invariante](#núcleo-invariante)).

Nenhum incremento começa antes do encerramento formal do anterior.

## Classificação de nível

### Quem classifica

O Project Orchestrator classifica o incremento e **confirma o nível** no registro do incremento (prompt, plano ou ata de abertura). Sem confirmação explícita do Orchestrator, o nível não é N1.

### Critérios estritos de N1 (todos obrigatórios)

O incremento só pode ser **N1** se **todos** os critérios abaixo forem verdadeiros:

1. Arquivos **já existentes** e em quantidade **pouca**.
2. Sem alteração de rotas, SSR/SSG, shell da aplicação ou estrutura de componentes.
3. Sem alteração de tokens globais do Design System.
4. Sem novas dependências.
5. Sem regras de negócio novas e sem conteúdo comercial não autorizado nas fontes do projeto.
6. Sem impacto transversal (múltiplas áreas, contratos compartilhados, comportamento global).
7. Escopo e critérios de aceite **claros** (podem ser definidos pelo Orchestrator no prompt, sem Product Definition formal).
8. Nível **N1 confirmado** pelo Project Orchestrator.

Se **qualquer** critério falhar → classificar como **N2** ou **N3**, conforme o risco.

### N2 — Moderado

Impacto local ou moderado que não cabe em N1, sem ser mudança estrutural ampla. Exemplos típicos: ajuste de UX/interface com especificação, mudança técnica limitada com risco de regressão local, escopo que exige Product/Design ou Technical Design proporcional.

### N3 — Estrutural

Mudança estrutural, transversal ou de alto risco: rotas, SSR/SSG, shell, arquitetura de componentes, tokens globais, novas dependências relevantes, regras de negócio, conteúdo institucional amplo, ou regressão potencial em várias superfícies.

### Reclassificação para cima (obrigatória)

Se, a qualquer momento, surgir risco estrutural, expansão de escopo, nova dependência relevante ou risco de regressão transversal, o Orchestrator **deve** reclassificar para cima (N1→N2 ou N2→N3) e aplicar as etapas do novo nível antes de continuar a implementação.

Reclassificação para baixo só com reconfirmação explícita do Orchestrator e dos critérios do nível alvo.

## Matriz por nível

| Etapa | N1 Simples | N2 Moderado | N3 Estrutural |
|-------|------------|-------------|---------------|
| Product Definition formal | Não. Orchestrator define escopo, arquivos e aceite no prompt | Conforme necessidade (Product & Design) | Discovery / Product conforme aplicável |
| UX Flow / Design | Só se houver mudança de experiência; senão N/A com motivo | Design & UX conforme necessidade | Design & UX conforme aplicável |
| Technical Design formal | Não | Conforme necessidade | Sim, proporcional ao risco |
| Sprint Planning formal | Não | Planning enxuto (dependências, fora de escopo, aceite) | Planning completo conforme aplicável |
| Architecture Review | **Dispensada** se **todos** os critérios estritos N1 forem verdadeiros; caso contrário o incremento deixa de ser N1 | **Obrigatória** | **Obrigatória e ampla** |
| Implementation | Sim, só após aprovação explícita do escopo | Sim, após aprovação e AR | Sim, após aprovação e AR |
| Independent QA | Sim, **rápido** e proporcional | Sim, **direcionado** | Sim, **completo** + regressão pertinente |
| Documentation Updated | Só se houver impacto real em docs | Conforme impacto | Docs arquiteturais / de produto afetados |
| Commit | Por incremento; SourceTree; sem push sem autorização | Idem | Idem |
| Closure | Sim, **proporcional** (registro mínimo suficiente) | Sim, formal | Sim, formal e completo |

## Etapas do fluxo (catálogo)

As etapas abaixo formam o catálogo oficial. Em cada incremento, aplicar somente as exigidas pelo nível (matriz acima). Nomes oficiais para status e prompts:

1. **Product Definition.** Product & Design define problema, escopo, conteúdo autorizado e critérios de aceite de produto. Em N1, esta etapa formal **não** ocorre: o Orchestrator define escopo, arquivos previstos e aceite no prompt. A recomendação do orquestrador não é aprovação do responsável quando a aprovação for exigida.
2. **UX Flow / Design.** Quando o incremento muda experiência ou interface. Design & UX (`flow-design-ux`) define fluxo, comportamento e direção visual dentro das fontes já existentes e da identidade aprovada, com apoio do skill Impeccable quando aplicável. Product & Design permanece responsável pelo conteúdo autorizado e pelos critérios de produto (quando a etapa Product Definition se aplicar). Se não houver mudança de experiência, registrar N/A com motivo.
3. **Technical Design.** Abordagem técnica, arquivos previstos e riscos, em extensão proporcional. Não autoriza implementação. Formalmente exigido conforme a matriz do nível.
4. **Sprint Planning.** Ordenação do trabalho, dependências e fora de escopo. Critérios de aceite existem antes da implementação (no prompt N1, no planning enxuto N2, ou no planning completo N3).
5. **Architecture Review.** Revisão somente leitura de arquitetura, dependências, riscos, escopo e aderência às decisões documentadas. **Obrigatória em N2 e N3.** Em N1, **dispensada somente** se todos os critérios estritos N1 forem verdadeiros; caso contrário o incremento deixa de ser N1. Não altera arquivos. O parecer não aprova o escopo nem autoriza a implementação sozinho.
6. **Implementation.** Começa somente depois da aprovação explícita do escopo (e da Architecture Review quando o nível a exigir). O Implementation Agent entrega apenas esse escopo.
7. **Independent QA.** Obrigatório em **todos** os níveis para incremento funcional ou visual. Quem valida não é exclusivamente o agente que implementou. O QA Agent não corrige código. Profundidade: rápida (N1), direcionada (N2), completa com regressão pertinente (N3). Resultado com evidências.
8. **Documentation Updated.** Atualizar documentação afetada e evidências antes do encerramento, **conforme o impacto real** (N1 pode não tocar docs). Não existe agente Documenter independente do Flow Site.
9. **Commit.** Incremento em commit próprio, ou agrupamento só de incrementos pequenos e relacionados com relação explícita e escopo verificável. Implementação, governança e configuração em commits separados sempre que possível. Commit manual pelo responsável via **SourceTree**. Sem push sem autorização explícita.
10. **Closure.** Obrigatório em **todos** os níveis; a formalidade varia (proporcional em N1; formal em N2/N3). O Project Orchestrator só propõe o encerramento quando os critérios de aceite foram atendidos, a documentação/evidências exigidas pelo impacto estão em ordem, e falhas, pendências e desvios estão registrados. A autorização final de encerramento e de início do próximo incremento é do **responsável pelo projeto**. Sem Closure, o trabalho não avança.

## Núcleo invariante

Independente do nível:

- **QA independente** em todo incremento funcional ou visual (profundidade proporcional ao nível).
- **Closure** em todo incremento (formalidade proporcional ao nível).
- **Commits por incremento** via SourceTree; sem push sem autorização.
- **Aprovação explícita do escopo** antes da Implementation (em N1, o escopo no prompt do Orchestrator + confirmação do responsável quando couber).
- **Critérios de aceite** definidos antes da Implementation.
- **Precedência** Workflow > contracts > agentes.
- Não inventar conteúdo comercial; não resolver lacunas por suposição.
- Alteração fora do escopo aprovado exige nova autorização (e possível reclassificação de nível).

## Controles

- Nenhuma implementação começa sem aprovação explícita do escopo. Aprovação explícita é distinta de recomendação, desenho técnico, critérios de aceite e parecer de Architecture Review.
- Architecture Review ocorre antes da implementação **quando o nível a exigir** (sempre N2/N3; N1 somente se os critérios estritos não se aplicarem — e nesse caso o incremento não permanece N1).
- A atualização da documentação exigida pelo impacto e o commit de encerramento só se concluem depois que o QA daquele incremento está aprovado (ou `PASS WITH ISSUES` com decisão explícita do responsável).
- Todo incremento funcional ou visual exige QA independente.
- O QA não é realizado exclusivamente pelo agente que implementou a solução.
- Documentação e evidências de validação são atualizadas antes do encerramento quando houver impacto real.
- Falha, pendência e desvio são registrados de forma explícita. O incremento não é declarado concluído quando os critérios de aceite não foram atendidos.
- Testes e validações são relatados com precisão. Não se declara execução de teste, build ou revisão que não ocorreu.
- Alteração fora do escopo aprovado exige nova autorização.
- Arquivos não rastreados e alterações locais são preservados. Não se descarta trabalho local sem autorização.

## Bloqueio e falha de QA

Se o QA reprovar ou bloquear o incremento, ou se outro controle impedir o avanço:

1. Interromper o avanço. O próximo incremento não começa.
2. Registrar o problema, a evidência e o que ficou pendente.
3. Corrigir somente dentro do escopo já aprovado. Escopo novo volta para aprovação (e possível reclassificação de nível).
4. Repetir a validação pertinente. Correção funcional ou visual passa de novo por QA independente. Correção que não mude comportamento nem interface repete apenas a verificação afetada, com registro do quê e por quê.

Reprovado não é encerramento. Bloqueado não é encerramento. O incremento só fecha no Closure, depois que os critérios de aceite forem atendidos.
