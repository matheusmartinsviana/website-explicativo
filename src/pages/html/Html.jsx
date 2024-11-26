import React, { useEffect } from "react";
import Prism from "prismjs"; // Importa o Prism.js
import "../styles/html.css";

export default function Html() {
  useEffect(() => {
    Prism.highlightAll(); // Realça o código após renderização
  }, []);

  return (
    <div className="html-structures-container">
      <header className="technology-header">
        <img
          width={200}
          loading="lazy"
          height={"auto"}
          src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
          alt="HTML Logo"
        />
        <h1>Sobre HTML</h1>
      </header>
      <ul className="html-list-elements">
        <li>
          <strong>Estruturais</strong>
          <p>
            <strong>Exemplo prático:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página HTML</title>
  </head>
  <body>
    <div>
      <h1>Conteúdo de estruturas HTML!</h1>
      Este é um texto com um <span>trecho em destaque</span>.
      <div>
        <input type="text" value="input 1" />
      </div>
    </div>
  </body>
</html>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Textuais</strong>
          <p>
            <strong>Exemplo prático de títulos:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<h1>Título de nível 1</h1>
<h6>Título de nível 6</h6>`}
            </code>
          </pre>
          <p>
            <strong>Exemplo prático de parágrafo:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<p>Parágrafo de exemplo em HTML.</p>`}
            </code>
          </pre>
          <p>
            <strong>Exemplo prático de link:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<a href="https://www.ead.senac.br/polos/sc/joinville/">
  Inscreva-se aqui
</a>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Mídia</strong>
          <p>
            <strong>Exemplo prático de imagem:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<img src="imagem-teste.jpg" alt="Descrição da imagem" width="300" height="200" title="Imagem Teste" />`}
            </code>
          </pre>
          <p>
            <strong>Exemplo prático de vídeo:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<video src="video.mp4" width="200" height="200" controls></video>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Formulários</strong>
          <p>
            <strong>Exemplo prático de formulário:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<form action="/enviar" method="post">
  <input type="text" name="nome" placeholder="Digite seu nome" />
  <button type="submit">Enviar</button>
</form>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Tabelas</strong>
          <p>
            <strong>Exemplo prático de tabela:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<table border="1">
  <tr>
    <th>Nome</th>
    <th>Cidade</th>
  </tr>
  <tr>
    <td>João</td>
    <td>Cidade de Deus</td>
  </tr>
</table>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Semânticas</strong>
          <p>
            <strong>Exemplo prático de header e footer:</strong>
          </p>
          <pre>
            <code className="language-html">
              {`<header>
  <h1>Cabeçalho</h1>
</header>
<footer>
  <p>2024 Site de Exemplo. Todos os direitos reservados.</p>
</footer>`}
            </code>
          </pre>
        </li>
      </ul>
    </div>
  );
}
