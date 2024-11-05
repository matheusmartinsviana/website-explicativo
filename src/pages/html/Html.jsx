import "../styles/html.css";

export default function Html() {
  return (
    <>
      <div className="html-structures-container">
        <h2>Estruturas HTML</h2>
        <ul className="html-list-elements">
          <li>
            <strong>Estruturais</strong>
            <p><strong>&lt;html&gt;</strong> Tag que abre um documento HTML e são elementos que informam ao navegador como formatar o texto e definir a estrutura e o significado do conteúdo de uma página.</p>
            <p><strong>&lt;head&gt;</strong> Coleção de metadados, ou seja, dados sobre os dados, que fornece informações gerais sobre um documento utilizada para passar informações ao navegador que não serão apresentadas na tela para o usuário.</p>
            <p><strong>&lt;body&gt;</strong> Responsável por conter o conteúdo visível de um documento, ou seja, todo o corpo do site que é exibido na janela do navegador.</p>
            <p><strong>&lt;div&gt;</strong> Representam containers para outros elementos, agrupando-os visualmente dentro de um bloco que pode conter dimensões e posição definidas.</p>
            <p><strong>&lt;span&gt;</strong> Elemento do tipo inline, ou seja, quando adicionado na página, ele é inserido lateralmente após os demais componentes.</p>
            <p><strong>Exemplo prático:</strong></p>
            <p>&lt;!DOCTYPE html&gt;</p>
            <p>&lt;html&gt;</p>
            <p>&lt;head&gt;</p>
            <p>&lt;title&gt; Minha Página HTML &lt;/title&gt;</p>
            <p>&lt;/head&gt;</p>
            <p>&lt;body&gt;</p>
            <p>&lt;div&gt;</p>
            <p>&lt;h1&gt; Conteúdo de estruturas HTML! &lt;/h1&gt;</p>
            <p>Este é um texto com um &lt;span&gt; trecho em destaque &lt;/span&gt;.</p>
            <p>Este é um texto com um &lt;span style="background: #1abc9c; border-radius:5px; padding:5px"div&gt; trecho em destaque&lt;/span&gt;.</p>
            <p>&lt;div&gt;</p>
            <p>&lt;input type="text" value="input 1"&gt;</p>
            <p>&lt;/div&gt;</p>
            <p>&lt;/div&gt;</p>
            <p>&lt;/body&gt;</p>
            <p>&lt;/html&gt;</p>
          </li>

          <li>
            <strong>Textuais</strong>
            <p><strong>&lt;h1&gt; &lt;h6&gt;</strong> Representam títulos ou cabeçalhos de diferentes níveis, organizando o conteúdo de uma página, sendo &lt;h1&gt; o cabeçalho de nível mais alto e &lt;h6&gt; o mais baixo.</p>
            <p><strong>Exemplo prático:</strong></p>
            <code>{"<h1>Título de nível 1</h1>"}</code>
            <code>{"<h6>Título de nível 6</h6>"}</code>
            <p><strong>&lt;p&gt;</strong> Usada para definir um parágrafo de texto, blocos de texto, agrupando frases e ideias relacionadas.</p>
            <p><strong>Exemplo prático:</strong></p>
            <code>{"<p>Parágrafo de exemplo em HTML.</p>"}</code>
            <p><strong>&lt;a&gt;</strong> Criação de link que direciona para outras páginas, seções da mesma página ou mesmo para outros arquivos. O atributo href define o destino do link.</p>
            <p><strong>Exemplo prático:</strong></p>
            <code>{<a href="https://www.ead.senac.br/polos/sc/joinville/">Inscreva-se aqui</a>}</code>
            <p><strong>&lt;strong&gt;</strong> Aplica destaque ao texto e indica que o conteúdo é importante.</p>
            <p><strong>Exemplo prático:</strong></p>
            <code>{"<p>Este é um <strong>lembrete</strong> para realizar o teste do código</p>"}</code>
            <p><strong>&lt;em&gt;</strong> Usada para enfatizar uma palavra ou frase, aplicando um estilo de itálico. </p>
            <p><strong>Exemplo prático:</strong></p>
            <code>{"<p>Esta frase contém uma <em>palavra importante</em> em itálico.</p>"}</code>
          </li>

          <li>
            <strong>Mídia</strong>
            <p><strong>&lt;img&gt;</strong> Inserção de imagens</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;img src="imagem-teste.jpg" alt="Descrição da imagem" width="300" height="200" title="Imagem Teste"&gt;</p>
            <p><strong>&lt;audio&gt;</strong> Inserção de áudios</p>
            <p><audio controls src="musica.mp3"> </audio>"</p>
            <p><strong>&lt;video&gt;</strong> Inserção de vídeos</p>
            <p><video src="video.mp4" width="200" height="200" controls></video></p>
          </li>

          <li>
            <strong>Formulários</strong>
            <p><strong>&lt;form&gt;</strong> Recebe como principais atributos method que recebe como valor o método http que esse formulário irá executar (get, post) e action que especifica para onde enviar os dados do formulário.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;form action="/enviar" method="post"&gt;</p>
            <p>&lt;!-- Campos de entrada e botões aqui --&gt;</p>
            <p>&lt;/form&gt;</p>
            <p><strong>&lt;input&gt;</strong> Cria diferentes tipos de campos de entrada, como caixas de texto, caixas de seleção e botões de envio.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;input type="text" name="nome" placeholder="Digite seu nome"&gt;</p>
            <p><strong>&lt;textarea&gt;</strong> Cria um campo de entrada de várias linhas para que os usuários possam digitar mais texto (como uma caixa de comentários).</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;textarea name="mensagem" rows="4" cols="50"&gt;Escreva sua mensagem aqui&lt;/textarea&gt;</p>
            <p><strong>&lt;button&gt;</strong> Cria um botão que pode ser usado para enviar formulários ou realizar outras ações.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;button type="submit"&gt;Enviar&lt;/button&gt;</p>
            <p><strong>&lt;select&gt;</strong> Cria um menu suspenso com opções. Para definir cada opção, deverá utilizar a tag &lt;option&gt;.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;select name="escolha"&gt;</p>
            <p>&lt;option value="opcao1"&gt;Opção 1&lt;/option&gt;</p>
            <p>&lt;/select&gt;</p>
          </li>

          <li>
            <strong>Tabelas</strong>
            <p><strong>&lt;table&gt;</strong> Cria uma tabela. Envolve todo o conteúdo da tabela, incluindo as linhas e células.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;table border="1"&gt;</p>
            <p>&lt;th&gt;Nome&lt;/th&gt;</p>
            <p>&lt;th&gt;Cidade&lt;/th&gt;</p>
            <p>&lt;/table&gt;</p>
            <p><strong>&lt;tr&gt;</strong> Define uma linha na tabela (table row). Cada linha pode conter células de dados ou células de cabeçalho.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;table border="2"&gt;</p>
            <p>&lt;tr&gt;</p>
            <p>&lt;th&gt;João&lt;/th&gt;</p>
            <p>&lt;th&gt;Cidade de Deus&lt;/th&gt;</p>
            <p>&lt;/tr&gt;</p>
            <p>&lt;/table&gt;</p>
          </li>

          <li>
            <strong>Semânticas</strong>
            <p><strong>&lt;header&gt;</strong> Usada para definir o cabeçalho de uma seção ou página.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;header&gt;</p>
            <p>&lt;elementos de cabeçalho&gt;</p>
            <p>&lt;/header&gt;</p>
            <p><strong>&lt;footer&gt;</strong> Representa um rodapé para o sectioning content (conteúdo de seção) mais próximo ou sectioning root elemento.</p>
            <strong>Exemplo prático:</strong>
            <p>&lt;footer&gt;</p>
            <p>&lt;p&gt; 2024 Site de Exemplo. Todos os direitos reservados.&lt;/p&gt;</p>
            <p>&lt;nav&gt;</p>
            <p>&lt;ul&gt;</p>
            <li><a href="#politica">Política de Privacidade</a></li>
            <li><a href="#termos">Termos de Uso</a></li>
            <li><a href="#contato">Contato</a></li>
            <p>&lt;/ul&gt;</p>
            <p>&lt;/nav&gt;</p>
            <p>&lt;/footer&gt;</p>
          </li>
        </ul>
      </div >
    </>
  );
}
