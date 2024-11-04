import "../styles/cssPage.css";
export default function Css() {
  return (
    <>
      <div>
        <h2>Seletores</h2>
        <p>
          Classes(.): Através de uma classe é possível estilizar vários
          elementos que compartilham das mesmas características. Para aplicar
          uma classe a um elemento se usa o atributo class="nome_da_classe",
          enquanto no CSS a estilização é feita através do .nome_da_classe".
        </p>
        <p>
          ID(#): Com o ID você estiliza um único elemento. Para aplicar um ID a
          um elemento se usa o atributo id="valor_do_id", enquanto no CSS a
          estilização é feita através da #valor_do_id.
        </p>
        <p>
          Elementos: É possível estilizar diretamente um elemento usando o nome
          do próprio no CSS.
        </p>
        <p>
          Atributos([]): Também é possível estilizar elementos através dos
          atributos com o uso do [atributo] no CSS.{" "}
        </p>
        <p>
          Pseudo-classes(:hover, :focus): Pseudo-classes tem como objetivo
          definir um estado especial de um elemento e é definida no CSS por
          seletor:pseudo-classe.
        </p>
        <p>
          Pseudo-elementos(::before, ::after): Já os pseudo-elementos são usados
          para estilizar partes específicas de um elemento e são aplicados no
          CSS com um seletor::pseudo-elemento.
        </p>
        <h2>Propriedades de texto</h2>
        <p>
          Color: A propriedade color é usada para definir a cor de um texto.
          Pode ser especificada através do nome, do valor HEX ou valor RGB.
        </p>
        <p>
          Font-size: Com o font-size se controla o tamanho da fonte através de
          valores absolutos ou relativos. Os absolutos especificam o tamanho e
          não permitem que o usuário troque esse valor em todos os navegadores.
          Os relativos especificam o tamanho baseado nos outros elementos e
          permite ao usuário trocar o valor em todos os navegadores.
        </p>
        <p>
          Font-weight: O font-weight define a espessura de uma fonte, podendo
          ser normal ou negrito.
        </p>
        <p>
          Line-height: Através do line-height se define o espaço entre as
          linhas.
        </p>
        <p>
          Text-align: O text-align define o alinhamento horizontal do texto,
          podendo ser alinhado para a esquerda ou direita, centralizado ou
          justificado.
        </p>
        <h2>Propriedades de layout</h2>
        <p>
          Display: A propriedade display é usada para definir a forma como um
          elemento é exibido na página. Todo elemento possuí um valor de display
          default.
        </p>
        <p>
          Position: O position por sua vez especifíca o metódo de posição usado
          por um elemento.
        </p>
        <p>Top: Topo (exemplo)</p>
        <p>Right: Direita (exemplo)</p>
        <p>Bottom: Baixo (exemplo)</p>
        <p>Left: Esquerda (exemplo)</p>
        <p>
          Float: Através do float você especifíca como um elemento deve flutuar
          na página.
        </p>
        <p>
          Clear: Com o clear se define se um elemento pode ter elementos
          flutuantes ao seu lado ou se devem ser movidos para abaixo dele.
        </p>
        <h2>Propriedades de Box Model</h2>
        <p>
          Margin: A propriedade margin define a margem externa de um elemento,
          ou seja, o espaço ao redor do elemento. Pode ser aplicada em todos os
          lados (margem superior, inferior, direita e esquerda) ou em lados
          específicos.
        </p>
        <p>
          Padding: A propriedade padding define o preenchimento interno de um
          elemento, ou seja, o espaço entre o conteúdo do elemento e sua borda.
          Pode ser aplicada em todos os lados ou em lados específicos.
        </p>
        <p>
          Border: A propriedade border define a borda de um elemento. Pode
          especificar a largura, o estilo e a cor da borda.
        </p>
        <p>Widht: A propriedade width define a largura de um elemento.</p>
        <p>Height: A propriedade height define a altura de um elemento.</p>
        <h2>Propriedades de Background</h2>
        <p>
          background-color: A propriedade background-color define a cor de fundo
          de um elemento. Pode ser especificada por nome, valor HEX ou valor
          RGB.
        </p>
        <p>
          background-image: A propriedade background-image define uma imagem de
          fundo para um elemento. A URL da imagem é especificada com o uso de
          `url('caminho_da_imagem')`.
        </p>
        <p>
          background-size: A propriedade background-size especifica o tamanho da
          imagem de fundo. Pode ser definido como valores absolutos, relativos,
          `cover`, ou `contain`.
        </p>
        <p>
          background-repeat: A propriedade background-repeat define se e como a
          imagem de fundo deve se repetir. Os valores comuns incluem `repeat`,
          `no-repeat`, `repeat-x` e `repeat-y`.
        </p>
        <h2>Propriedades de Flexbox e Grid</h2>
        <p>
          flex: A propriedade flex é usada para definir a capacidade de
          crescimento, encolhimento e a base do tamanho de um item flexível. É
          um atalho para as propriedades `flex-grow`, `flex-shrink`, e
          `flex-basis`.
        </p>
        <p>
          justify-content: A propriedade justify-content alinha os itens ao
          longo do eixo principal de um container flexível ou grid. Os valores
          podem incluir `flex-start`, `flex-end`, `center`, `space-between`, e
          `space-around`.
        </p>
        <p>
          align-items: A propriedade align-items define o alinhamento dos itens
          ao longo do eixo transversal em um container flexível. Os valores
          comuns incluem `stretch`, `center`, `flex-start`, `flex-end`, e
          `baseline`.
        </p>
        <p>
          display: grid: A propriedade `display: grid` transforma um elemento em
          um container de grid, permitindo organizar elementos em linhas e
          colunas.
        </p>
        <p>
          grid-template-columns: A propriedade grid-template-columns define o
          número de colunas em um grid e suas larguras.
        </p>
        <p>
          grid-gap: A propriedade grid-gap define o espaçamento entre as linhas
          e colunas de um grid. Pode ser especificada em valores de unidade de
          medida como `px`, `em`, etc.
        </p>
      </div>
    </>
  );
}
