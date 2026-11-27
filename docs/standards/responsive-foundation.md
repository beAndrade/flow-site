# Responsive Foundation
## Padrão de Responsividade para Projetos Web

**Status:** Padrão técnico de referência  
**Aplicação:** Projetos web, especialmente Angular + TypeScript + SCSS  
**Abordagem:** Mobile First + Layout Fluido + Breakpoints orientados pelo conteúdo

---

# 1. Objetivo

Estabelecer um padrão de responsividade desde o início do desenvolvimento, evitando problemas como:

- Conteúdo deslocado horizontalmente.
- Seções que ultrapassam a largura da viewport.
- Scroll horizontal indevido.
- Containers que não permanecem centralizados.
- Cards e colunas que não se reorganizam.
- Títulos cortados ou com quebras inadequadas.
- Elementos com dimensões fixas incompatíveis com telas menores.
- Layout desktop comprimido em dispositivos móveis.
- Correções isoladas que escondem problemas estruturais.

Responsividade não é uma etapa posterior de correção. É um requisito estrutural do projeto.

# 2. Princípios obrigatórios

## 2.1 Mobile First

A implementação deve começar pela estrutura de telas pequenas e evoluir progressivamente para telas maiores.

Isso significa:

- Definir primeiro a organização essencial do conteúdo.
- Evitar assumir que todos os elementos cabem lado a lado.
- Adicionar colunas e distribuições mais complexas conforme houver espaço.
- Preservar hierarquia, ordem de leitura e acessibilidade em todos os tamanhos.

Mobile First não significa que todo layout precisa ter uma única coluna em qualquer situação. A organização deve respeitar o conteúdo e a experiência desejada.

## 2.2 Layout fluido

Priorizar dimensões relativas e adaptáveis.

Preferir:
- `%`
- `rem`
- `em`
- `min()`
- `max()`
- `clamp()`
- `minmax()`
- `fr`
- `max-width`
- `min-width: 0`, quando necessário.

Evitar dimensões fixas sem justificativa funcional ou visual.

Não estabelecer larguras e alturas fixas para elementos que precisam acompanhar o espaço disponível.

## 2.3 Breakpoints orientados pelo conteúdo

Breakpoints devem ser definidos quando o layout deixa de funcionar adequadamente.

Não desenvolver exclusivamente para modelos específicos de celulares ou monitores.

Os valores iniciais podem seguir esta referência:

| Faixa | Uso inicial |
|---|---|
| Até 480px | Mobile |
| 481px–767px | Mobile amplo |
| 768px–1023px | Tablet |
| 1024px–1439px | Desktop |
| 1440px ou mais | Desktop amplo |

Essas faixas são referências, não regras rígidas. Podem ser ajustadas conforme a necessidade real do layout.

Evitar criar vários breakpoints sem necessidade.

# 3. Estrutura global

## 3.1 Meta viewport

Confirmar a presença da configuração correta no documento HTML:

`<meta name="viewport" content="width=device-width, initial-scale=1">`

Sem ela, a experiência em dispositivos móveis pode apresentar escala e dimensões incorretas.

## 3.2 Box sizing

Adotar o modelo de dimensionamento previsível:

```scss
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Isso evita que padding e bordas aumentem inesperadamente a dimensão final dos elementos.

## 3.3 Container global

Criar um padrão reutilizável de container, respeitando a identidade e as necessidades do projeto.

Exemplo:

```scss
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}
```

O valor de largura máxima deve ser definido conforme o design do projeto.

Regras:

- Container sempre centralizado.
- Largura fluida em telas menores.
- Limite máximo em telas grandes.
- Espaçamento lateral consistente.
- Não usar margens fixas para posicionar o conteúdo.
- Evitar duplicar containers com comportamentos conflitantes.

As seções podem ter fundos de largura total, mas seu conteúdo interno deve respeitar o container.

## 3.4 Estrutura de página

Inspecionar a relação entre:

- `body`
- `app-root`
- Header
- `main`
- wrappers de página
- seções
- containers internos
- Footer

Nenhum wrapper deve impor uma largura mínima ou deslocamento horizontal sem necessidade.

Em Angular, conferir também o comportamento do `:host` e dos componentes que atuam como wrappers.

# 4. Regras para layouts

## 4.1 CSS Grid

Usar Grid para estruturas bidimensionais.

Exemplo:

```scss
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 767px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
```

Regras:

- Preferir `minmax(0, 1fr)` para evitar que o conteúdo force a expansão das colunas.
- Definir a reorganização conforme o espaço disponível.
- Não manter colunas fixas em telas menores quando isso prejudicar a leitura.
- Evitar grids com larguras mínimas incompatíveis com a viewport.

Quando adequado, considerar `auto-fit` e `minmax()` para grids que se adaptam automaticamente.

## 4.2 Flexbox

Usar Flexbox para distribuição e alinhamento em uma dimensão.

Regras:

- Verificar se os filhos podem encolher.
- Utilizar `min-width: 0` quando necessário.
- Permitir quebra de linha quando o conteúdo exigir.
- Evitar `flex-shrink: 0` sem justificativa.
- Não depender de larguras fixas para distribuir conteúdo.

## 4.3 Seções divididas

Seções com texto e imagem, texto e cards ou duas colunas devem possuir comportamento responsivo definido.

Exemplo:

- Desktop: duas colunas.
- Tablet: duas colunas se houver espaço suficiente; caso contrário, empilhar.
- Mobile: empilhar, preservando a ordem de leitura.

Não assumir que todas as seções devem usar a mesma distribuição.

## 4.4 Alturas

Evitar alturas fixas para seções e containers que possuem conteúdo variável.

Preferir:

- `min-height`, quando houver necessidade de altura mínima.
- Altura automática conforme o conteúdo.
- Unidades de viewport com cuidado, considerando as barras dinâmicas dos navegadores móveis.

Não cortar textos ou elementos para manter uma altura visual artificial.

# 5. Tipografia e espaçamento

## 5.1 Tipografia fluida

Usar `clamp()` quando houver benefício real.

Exemplo:

```scss
.hero-title {
  font-size: clamp(2.25rem, 4vw, 4.5rem);
  line-height: 1.05;
}
```

Regras:

- Definir tamanho mínimo e máximo coerentes.
- Preservar legibilidade em telas pequenas.
- Evitar títulos excessivamente grandes em notebooks.
- Verificar quebras de linha.
- Não usar `white-space: nowrap` em textos longos sem necessidade.

## 5.2 Espaçamentos

Adotar escala consistente de espaçamento.

O padding lateral das seções deve acompanhar o container ou utilizar valores fluidos controlados.

Evitar margens e paddings fixos que empurrem o conteúdo para fora da viewport.

# 6. Imagens, vídeos e mídia

Regras gerais:

```scss
img,
video {
  max-width: 100%;
}
```

Para imagens de conteúdo:

```scss
.content-image {
  display: block;
  width: 100%;
  height: auto;
}
```

Quando o design exigir recorte:

- Definir proporção com `aspect-ratio`.
- Usar `object-fit` conscientemente.
- Ajustar `object-position` para preservar o assunto.
- Testar o recorte em diferentes larguras.

Para backgrounds:

- Verificar posicionamento e escala.
- Garantir legibilidade do conteúdo sobreposto.
- Evitar que imagens causem largura excedente.

# 7. Componentes que exigem atenção específica

## Header e navegação

- Definir claramente quando o menu desktop deixa de caber.
- Prever navegação mobile.
- Evitar sobreposição de links e botões.
- Garantir que menus possam ser operados por teclado.
- Preservar foco visível e estados acessíveis.

## Cards

- Permitir adaptação de largura.
- Evitar conteúdo interno que imponha largura mínima excessiva.
- Preservar espaçamentos e hierarquia.
- Verificar textos longos, badges e CTAs.

## Botões e CTAs

- Permitir quebra ou empilhamento quando necessário.
- Garantir área de interação confortável.
- Evitar que textos sejam cortados.
- Não reduzir excessivamente a tipografia para fazer caber.

## Formulários

- Inputs devem ocupar a largura disponível.
- Labels não podem ser cortadas.
- Grupos de campos devem se reorganizar.
- Mensagens de validação devem caber no container.

## Tabelas e conteúdo denso

Não comprimir tabelas até ficarem ilegíveis.

Avaliar alternativas adequadas:
- Scroll horizontal localizado e intencional.
- Apresentação em cards.
- Colunas prioritárias em telas menores.

O comportamento deve ser definido conscientemente.

# 8. Prevenção de overflow horizontal

O projeto não deve apresentar overflow horizontal indevido.

Investigar especialmente:

- `width: 100vw` em elementos que também possuem padding ou estão dentro de outros containers.
- `min-width` excessivo.
- Grid com colunas de tamanho mínimo inadequado.
- Filhos de Flexbox sem possibilidade de encolher.
- Textos longos sem quebra.
- Imagens e vídeos sem limites.
- Elementos absolutos posicionados fora da área disponível.
- Margens negativas.
- Transformações e animações que ultrapassam a viewport.
- Elementos com `white-space: nowrap`.
- Containers com largura fixa.

**Regra crítica:** nunca utilizar `overflow-x: hidden` globalmente como solução genérica para esconder um problema.

Primeiro identificar o elemento que provoca o overflow e corrigir a causa.

Se um componente realmente precisar de rolagem horizontal, ela deve ser localizada, intencional e acessível.

# 9. Responsividade durante a implementação

Cada componente ou seção deve ser desenvolvido considerando seus estados responsivos.

Não acumular toda a adaptação para o final do projeto.

Antes de considerar um componente concluído, verificar:

- Desktop.
- Tablet.
- Mobile.
- Alinhamento.
- Centralização.
- Espaçamentos.
- Tipografia.
- Imagens.
- Cards.
- Botões.
- Ausência de sobreposição.
- Ausência de overflow indevido.

Quando houver alteração estrutural, revalidar os tamanhos afetados.

# 10. Matriz mínima de validação

Utilizar inicialmente as seguintes larguras:

| Viewport | Objetivo |
|---|---|
| 320px | Verificar telas muito estreitas |
| 390px | Mobile comum |
| 768px | Tablet / transição |
| 1024px | Notebook / tablet amplo |
| 1440px | Desktop |
| 1725px | Desktop amplo |

Também verificar:

- Zoom do navegador em 200%, quando aplicável.
- Navegação por teclado.
- Textos ampliados.
- Conteúdo longo.
- Imagens em diferentes proporções.
- Menus abertos.
- Estados de erro e validação.

A validação deve ser feita com a viewport real do navegador, não apenas pela aparência da imagem ou por estimativa visual.

# 11. Diagnóstico de problemas

Quando ocorrer overflow ou desalinhamento:

1. Identificar se o problema é global ou localizado.
2. Inspecionar a árvore de elementos.
3. Encontrar o primeiro ancestral ou descendente que ultrapassa a viewport.
4. Verificar suas dimensões calculadas e regras CSS.
5. Identificar qual propriedade provoca a expansão.
6. Corrigir a causa na origem.
7. Revalidar os elementos dependentes.

Não aplicar correções genéricas em `body`, `main` ou todos os containers sem evidência.

Não alterar várias seções individualmente antes de verificar se existe uma causa compartilhada.

# 12. Acessibilidade e experiência

Responsividade não se limita à largura.

Verificar:

- Ordem lógica de leitura.
- Foco visível.
- Navegação por teclado.
- Alvos de interação adequados.
- Contraste.
- Legibilidade.
- Ausência de conteúdo escondido.
- Zoom e ampliação.
- Respeito a `prefers-reduced-motion`.
- Menus e componentes interativos acessíveis.

Não utilizar apenas mudanças visuais de posição que criem uma ordem de leitura diferente da ordem semântica.

# 13. Critérios de conclusão

Um componente ou página só deve ser considerado responsivo quando:

- O conteúdo acompanha a largura disponível.
- Os containers permanecem corretamente centralizados.
- Não há overflow horizontal indevido.
- Não há conteúdo cortado ou inacessível.
- Os layouts se reorganizam adequadamente.
- A tipografia permanece legível.
- Os elementos interativos continuam funcionais.
- A navegação e a hierarquia são preservadas.
- As principais viewports foram efetivamente verificadas.

Não declarar uma viewport testada sem ter realizado a validação.

# 14. Regras para agentes de desenvolvimento

O agente deve:

1. Ler este documento antes de iniciar uma implementação de interface.
2. Respeitar os padrões e tokens já existentes no projeto.
3. Reutilizar containers, breakpoints e componentes existentes.
4. Não criar um segundo sistema de responsividade sem necessidade.
5. Não introduzir dimensões fixas sem justificativa.
6. Validar a responsividade durante a implementação.
7. Corrigir a causa raiz de problemas encontrados.
8. Preservar identidade visual, conteúdo, lógica e arquitetura fora do escopo.
9. Não mascarar overflow com regras globais.
10. Informar o que foi efetivamente testado.

Se houver conflito entre este documento e uma decisão específica de design aprovada, preservar a decisão aprovada, desde que não gere problemas de acessibilidade ou funcionamento.

---

**Princípio final:** a interface deve se adaptar ao espaço disponível, e não obrigar o usuário a adaptar a tela ao layout.