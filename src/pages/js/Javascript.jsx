import "../styles/js.css";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default function Javascript() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="js-elements">
        <ul className="js-elements-list">
          <li className="js-element">
            <h3>document.getElementById</h3>
            <p>
              É uma função que retorna um elemento do DOM, identificado por um
              ID específico. Exemplo:
            </p>
            <code className="language-javascript">
              {`const text = document.getElementById('text');`}
            </code>
          </li>

          <li className="js-element">
            <h3>document.querySelector</h3>
            <p>
              Seleciona o primeiro elemento que corresponde a um seletor CSS.
              Exemplo:
            </p>
            <code className="language-javascript">
              {`const botao = document.querySelector('.botao');`}
            </code>
          </li>

          <li className="js-element">
            <h3>document.createElement</h3>
            <p>Criar um novo elemento HTML. Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`const novoTexto = document.createElement('p');\nnovoTexto.textContent = 'Este é um novo texto';`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>document.appendChild</h3>
            <p>Adiciona um elemento como filho de outro elemento. Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`const container = document.getElementById('container');\ncontainer.appendChild(novoTexto);`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>addEventListener</h3>
            <p>
              Associa uma função a um evento específico em um elemento. Exemplo:
            </p>
            <pre>
              <code className="language-javascript">
                {`const botao = document.querySelector('.botao');\nbotao.addEventListener('click', () => alert('Botão selecionado!'));`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>Eventos Comuns</h3>
            <p>click: Disparado ao clicar.</p>
            <p>submit: Disparado ao enviar um formulário.</p>
            <p>mouseover: Disparado ao passar o mouse sobre um elemento.</p>
            <p>keydown: Disparado ao pressionar uma tecla.</p>
            <p>Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`document.addEventListener('keydown', (event) => console.log('Tecla pressionada:', event.key));`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>Arrays</h3>
            <h4>map</h4>
            <p>
              Cria um novo array com base nos elementos do array original.
              Exemplo:
            </p>
            <pre>
              <code className="language-javascript">
                {`const numeros = [1, 2, 3];\nconst dobro = numeros.map(num => num * 2);\nconsole.log(dobro); // [2, 4, 6]`}
              </code>
            </pre>

            <h4>filter</h4>
            <p>Filtra elementos de acordo com uma condição. Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`const numeros = [1, 2, 3, 4];\nconst pares = numeros.filter(num => num % 2 === 0);\nconsole.log(pares); // [2, 4]`}
              </code>
            </pre>

            <h4>reduce</h4>
            <p>Reduz um array a um único valor. Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`const numeros = [1, 2, 3, 4];\nconst soma = numeros.reduce((acc, num) => acc + num, 0);\nconsole.log(soma); // 10`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>Objetos</h3>
            <p>Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`const pessoa = { nome: 'Maria', idade: 30 };\nconsole.log(pessoa.nome);`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>Funções</h3>
            <p>Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`function recepcao() { return 'Olá!'; }`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>fetch</h3>
            <p>
              Inicia o processo de busca de um recurso da rede, retornando uma
              promessa que é cumprida assim que a resposta estiver disponível.
            </p>
            <h3>Promises</h3>
            <p>
              Representam o estado de uma operação assíncrona, como a leitura de
              arquivos ou solicitações de rede.
            </p>
            <p>Exemplo:</p>
            <pre>
              <code className="language-javascript">
                {`fetch('https://api.exemplo.com/dados')\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Erro:', error));`}
              </code>
            </pre>
          </li>

          <li className="js-element">
            <h3>Async/Await</h3>
            <p>
              Permite escrever código assíncrono de forma mais lógica e legível.
              Exemplo:
            </p>
            <pre>
              <code className="language-javascript">
                {`async function buscarDados() {\n  try {\n    const response = await fetch('https://api.exemplo.com/dados');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Erro:', error);\n  }\n  buscarDados();`}
              </code>
            </pre>
          </li>
        </ul>
      </div>
    </>
  );
}
