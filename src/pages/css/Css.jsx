import "../styles/cssPage.css";
import cssLogo from "../../assets/images/css/csslogo.webp";

export default function Css() {
  return (
    <>
      <div className="css-content">
        <header className="technology-header">
          <img
            width={200}
            loading="lazy"
            height={"auto"}
            src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
            alt="CSS Logo"
          />
          <h1>Sobre CSS</h1>
        </header>
        <h2>Seletores</h2>
        <p>
          <strong>Classes(.):</strong> Através de uma classe é possível
          estilizar vários elementos que compartilham das mesmas
          características. Para aplicar uma classe a um elemento se usa o
          atributo <strong>class="nome_da_classe"</strong>, enquanto no CSS a
          estilização é feita através do <strong>.nome_da_classe</strong>.
        </p>
        <p>
          <strong>ID(#):</strong> Com o ID você estiliza um único elemento. Para
          aplicar um ID a um elemento se usa o atributo{" "}
          <strong>id="valor_do_id"</strong>, enquanto no CSS a estilização é
          feita através do <strong>#valor_do_id</strong>.
        </p>
        <p>
          <strong>Elementos:</strong> É possível estilizar diretamente um
          elemento usando o nome do próprio no CSS.
        </p>
        <p>
          <strong>Atributos([]):</strong> Também é possível estilizar elementos
          através dos atributos com o uso do <strong>[atributo]</strong> no CSS.
        </p>
        <p>
          <strong>Pseudo-classes(:hover, :focus):</strong> Pseudo-classes tem
          como objetivo definir um estado especial de um elemento e é definida
          no CSS por
          <strong>seletor:pseudo-classe</strong>.
        </p>
        <p>
          <strong>Pseudo-elementos(::before, ::after):</strong> Já os
          pseudo-elementos são usados para estilizar partes específicas de um
          elemento e são aplicados no CSS com um seletor{" "}
          <strong>::pseudo-elemento</strong>.
        </p>
        <h2>Propriedades de texto</h2>
        <p>
          <strong>Color:</strong> A propriedade color é usada para definir a cor
          de um texto. Pode ser especificada através do nome, do valor HEX ou
          valor RGB.
        </p>
        <div className="css-main">
          <div className="example-1">Exemplo</div>
        </div>
        <p>
          <strong>Font-size:</strong> Com o font-size se controla o tamanho da
          fonte através de valores absolutos ou relativos. Os absolutos
          especificam o tamanho e não permitem que o usuário troque esse valor
          em todos os navegadores. Os relativos especificam o tamanho baseado
          nos outros elementos e permite ao usuário trocar o valor em todos os
          navegadores.
        </p>
        <div className="css-main">
          <div className="example-2">Exemplo</div>
        </div>
        <p>
          <strong>Font-weight:</strong> O font-weight define a espessura de uma
          fonte, podendo ser normal ou negrito.
        </p>
        <div className="css-main">
          <div className="example-3">Exemplo</div>
        </div>
        <p>
          <strong>Line-height:</strong> Através do line-height se define o
          espaço entre as linhas.
        </p>
        <div className="css-main">
          <div className="example-4">
            Exemplo
            <br />
            Exemplo
          </div>
        </div>
        <p>
          <strong>Text-align:</strong> O text-align define o alinhamento
          horizontal do texto, podendo ser alinhado para a esquerda ou direita,
          centralizado ou justificado.
        </p>
        <div className="css-main">
          <div className="example-5">Exemplo</div>
        </div>
        <h2>Propriedades de layout</h2>
        <p>
          <strong>Display:</strong> A propriedade display é usada para definir a
          forma como um elemento é exibido na página. Todo elemento possuí um
          valor de display default.
        </p>
        <p>
          <strong>Position:</strong> O position por sua vez especifíca o metódo
          de posição usado por um elemento.
        </p>
        <p>
          <strong>Top:</strong> Topo (exemplo)
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-6"></div>
          </div>
        </div>
        <p>
          <strong>Right:</strong> Direita (exemplo)
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-7"></div>
          </div>
        </div>
        <p>
          <strong>Bottom:</strong> Baixo (exemplo)
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-8"></div>
          </div>
        </div>
        <p>
          <strong>Left:</strong> Esquerda (exemplo)
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-9"></div>
          </div>
        </div>
        <p>
          <strong>Float:</strong> Através do float você especifíca como um
          elemento deve flutuar na página.
        </p>
        <p>
          <strong>Clear:</strong> Com o clear se define se um elemento pode ter
          elementos flutuantes ao seu lado ou se devem ser movidos para abaixo
          dele.
        </p>
        <h2>Propriedades de Box Model</h2>
        <p>
          <strong>Margin:</strong> A propriedade margin define a margem externa
          de um elemento, ou seja, o espaço ao redor do elemento. Pode ser
          aplicada em todos os lados (margem superior, inferior, direita e
          esquerda) ou em lados específicos.
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-10"></div>
          </div>
        </div>
        <p>
          <strong>Padding:</strong> A propriedade padding define o preenchimento
          interno de um elemento, ou seja, o espaço entre o conteúdo do elemento
          e sua borda. Pode ser aplicada em todos os lados ou em lados
          específicos.
        </p>
        <div className="css-main">
          <div className="box-example-11">
            <div className="example-11"></div>
          </div>
        </div>
        <p>
          <strong>Border:</strong> A propriedade border define a borda de um
          elemento. Pode especificar a largura, o estilo e a cor da borda.
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-12"></div>
          </div>
        </div>
        <p>
          <strong>Widht:</strong> A propriedade width define a largura de um
          elemento.
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-13"></div>
          </div>
        </div>
        <p>
          <strong>Height:</strong> A propriedade height define a altura de um
          elemento.
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-14"></div>
          </div>
        </div>
        <h2>Propriedades de Background</h2>
        <p>
          <strong>background-color:</strong> A propriedade background-color
          define a cor de fundo de um elemento. Pode ser especificada por nome,
          valor HEX ou valor RGB.
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-15"></div>
          </div>
        </div>
        <p>
          <strong>background-image:</strong> A propriedade background-image
          define uma imagem de fundo para um elemento. A URL da imagem é
          especificada com o uso de
          <strong>url('caminho_da_imagem')</strong>.
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-16"></div>
          </div>
        </div>
        <p>
          <strong>background-size:</strong> A propriedade background-size
          especifica o tamanho da imagem de fundo. Pode ser definido como
          valores absolutos, relativos,
          <strong>cover</strong>, ou <strong>contain</strong>.
        </p>
        <div className="css-main">
          <div className="box-example">
            <div className="example-17"></div>
          </div>
        </div>
        <h2>Transições e animações</h2>
        <p>
          <strong>Transition:</strong> A propriedade transition permite que a
          mudança de uma propriedade seja suavizada ao longo de um determinado
          tempo.
        </p>
        <p>
          <strong>Animation:</strong> A propriedade animation permite definir
          uma sequência de animações, especificando as etapas (keyframes) e o
          tempo da animação.
        </p>
        <img src={cssLogo} alt="css logo" />
      </div>
    </>
  );
}
