# Fluxo de desenvolvimento — Flow Site

Este documento define o fluxo oficial de um incremento do Flow Site. Não substitui as decisões já registradas em `PRODUCT.md`, `docs/architecture.md`, `docs/discovery.md`, `docs/roadmap.md`, `docs/design-system.md` e `docs/visual-identity-flow-energies.md`.

Esses documentos são a referência para o que já foi decidido. Dúvida, contradição ou informação pendente deve ser sinalizada. Não se resolve por suposição, e não se inventa serviço, diferencial, métrica, depoimento ou outro dado comercial da Flow Energies.

A profundidade de cada artefato acompanha a complexidade e o risco do incremento. As etapas de controle abaixo permanecem obrigatórias.

## Fluxo

Nenhum incremento começa antes do encerramento formal do anterior.

1. **Product Definition.** Product & Design define problema, escopo, conteúdo autorizado e critérios de aceite. O Project Orchestrator pede a aprovação. A recomendação do orquestrador não é aprovação.
2. **UX Flow / Design.** Ocorre quando o incremento muda experiência ou interface. Product & Design define fluxo, comportamento e direção visual dentro das fontes já existentes. Se não houver mudança de experiência, a etapa é registrada como não aplicável, com o motivo.
3. **Technical Design.** Descreve a abordagem técnica, os arquivos previstos e os riscos, em extensão proporcional ao incremento. Não autoriza implementação.
4. **Sprint Planning.** O Project Orchestrator ordena o trabalho, as dependências e o que fica de fora. Os critérios de aceite já existem antes da implementação.
5. **Architecture Review.** Revisão somente leitura de arquitetura, dependências, riscos, escopo e aderência às decisões documentadas. Acontece antes da implementação. Não altera arquivos. O parecer não aprova o escopo nem autoriza a implementação.
6. **Implementation.** Começa somente depois da aprovação explícita do escopo. O Implementation Agent entrega apenas esse escopo.
7. **Independent QA.** Obrigatório para todo incremento funcional ou visual. Quem valida não é exclusivamente o agente que implementou. O QA Agent não corrige código. O resultado é aprovado, reprovado ou bloqueado, com evidências.
8. **Documentation Updated.** A documentação afetada pelo incremento e as evidências de validação são atualizadas antes do encerramento. Essa atualização faz parte do fechamento. Não existe um agente Documenter independente.
9. **Commit.** O incremento entra em um commit próprio, ou em um commit que agrupe somente incrementos pequenos e relacionados, com essa relação explícita e o escopo ainda verificável. Implementação, governança e configuração ficam em commits separados sempre que possível.
10. **Closure.** O Project Orchestrator só encerra o incremento quando os critérios de aceite foram atendidos, a documentação e as evidências estão atualizadas, e as falhas, pendências e desvios estão registrados. O registro formal de encerramento é a condição que permite o início do próximo incremento. A recomendação isolada do Project Orchestrator não o autoriza. Sem esse encerramento, o trabalho não avança.

## Controles

- Nenhuma implementação começa sem aprovação explícita do escopo. Aprovação explícita é um registro distinto de recomendação, desenho técnico, critérios de aceite e parecer de Architecture Review.
- A atualização da documentação e o commit de encerramento só são concluídos depois que o QA daquele incremento está aprovado.
- A revisão arquitetural ocorre antes da implementação.
- Todo incremento funcional ou visual exige QA independente.
- O QA não é realizado exclusivamente pelo agente que implementou a solução.
- Critérios de aceite são definidos antes da implementação.
- Documentação e evidências de validação são atualizadas antes do encerramento.
- Falha, pendência e desvio são registrados de forma explícita. O incremento não é declarado concluído quando os critérios de aceite não foram atendidos.
- Testes e validações são relatados com precisão. Não se declara execução de teste, build ou revisão que não ocorreu.
- Alteração fora do escopo aprovado exige nova autorização.
- Arquivos não rastreados e alterações locais são preservados. Não se descarta trabalho local sem autorização.

## Bloqueio e falha de QA

Se o QA reprovar ou bloquear o incremento, ou se outro controle impedir o avanço:

1. Interromper o avanço. O próximo incremento não começa.
2. Registrar o problema, a evidência e o que ficou pendente.
3. Corrigir somente dentro do escopo já aprovado. Escopo novo volta para aprovação.
4. Repetir a validação pertinente. Uma correção funcional ou visual passa de novo por QA independente. Uma correção que não mude comportamento nem interface repete apenas a verificação que a mudança afeta, e o registro diz qual foi e por quê.

Reprovado não é encerramento. Bloqueado não é encerramento. O incremento só fecha no passo 10, depois que os critérios de aceite forem atendidos.
