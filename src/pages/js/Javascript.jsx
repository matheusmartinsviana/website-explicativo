import "../styles/js.css";

export default function Javascript() {
  return (
    <>
      <div className="js-elements">
        <ul className="js-elements-list">
          <li className="js-element">
            <h3>document.getElementById</h3>
            <p>É uma função que retorna um elemento do DOM, identificado por um ID específico. Exemplo:</p>
            <code>const text = documento.getElementById(&quot;text&quot;)</code>
          </li>
          <li>
            <h3>document.querySelector</h3>
            <p>Seleciona o primeiro elemento que corresponde a um seletor CSS. Exemplo:</p>
            <code>const botao = document.querySelector('.botao');</code>
          </li>
          <li>
            <h3>document.createElement</h3>
            <p>Criar um novo elemento HTML. Exemplo:</p>
            <code>const novoTexto = document.createElement('p');</code>
            <code>novoTexto.textContent = 'Este é um novo texto';</code>
          </li>
          <li>
            <h3>document.appendChild</h3>
            <p>Adiciona um elemento como filho de outro elemento. Exemplo:</p>
            <code>const container = document.getElementById('container');</code>
            <code>container.appendChild(novoParagrafo);</code>
          </li>
          <li>
            <h3>addEventListener</h3>
            <p>Associa uma função a um evento específico em um elemento. Exemplo:</p>
            <code>const botao = document.querySelector('.botao');</code>
            <code>{`botao.addEventListener('click', () => {</code>
            <code>alert('Botão selecionado!');</code>
            <code>});`}</code>
          </li>
          <li>
            <h3>Eventos Comuns</h3>
            <p>click: Disparado ao clicar.</p>
            <p>submit: Disparado ao enviar um formulário.</p>
            <p>mouseover: Disparado ao passar o mouse sobre um elemento.</p>
            <p>keydown: Disparado ao pressionar uma tecla.</p>
            <p>Exemplo:</p>
            <code>{`document.addEventListener('keydown', (event) => {</code>
            <code>console.log('Tecla pressionada:', event.key);</code>
            <code>`});</code>
          </li>
          <li>
            <h3>Arrays</h3>
            <h2>map</h2>
            <p>Cria um novo array com base nos elementos do array original. Exemplo:</p>
            <code>const numeros = [1, 2, 3];</code>
            <code>{`const dobro = numeros.map(num => num * 2`});</code>
            <code>{`console.log(dobro); // [2, 4, 6]`}</code>
            <h2>filter</h2>
            <p>Filtra elementos de acordo com uma condição. Exemplo:</p>
            <code>{`const numeros = [1, 2, 3, 4];`}</code>
            <code>{`const pares = numeros.filter(num => num % 2 === 0);`}</code>
            <code>{`console.log(pares); // [2, 4]`}</code>
            <h2>reduce</h2>
            <p>Reduz um array a um único valor. Exemplo:</p>
            <code>{`const numeros = [1, 2, 3, 4];`}</code>
            <code>{`const soma = numeros.reduce((acc, num) => acc + num, 0);`}</code>
            <code>{`console.log(soma); // 10`}</code>
          </li>
          <li>
            <h3>Objetos</h3>
            <p>Exemplo:</p>
            <code>{`const pessoa = {nome: 'Maria', idade: 30 };`}</code>
            <code>{`console.log(pessoa.nome);`}</code>
          </li>
          <li>
            <h3>Funções</h3>
            <p>Exemplo:</p>
            <code>{`function recepcao() {`}</code>
            <code>return 'Olá!';</code>
          </li>
          <li>
            <h3>fetch</h3>
            <p>Inicia o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível.</p>
            <h3>Promises</h3>
            <p>Representam o estado de uma operação assíncrona, como a leitura de arquivos ou solicitações de rede.</p>
            <p>Exemplo:</p>
            <code>fetch('https://api.exemplo.com/dados')</code>
            <code>{`.then(response => response.json())`}</code>
            <code>{`.then(data => console.log(data))`}</code>
            <code>{`.catch(error => console.error('Erro:', error));`}</code>
          </li>
          <li>
            <h3>Async/Await</h3>
            <p>Permite escrever código assíncrono de forma mais lógica e legível. Exemplo:</p>
            <code>{`async function buscarDados() {`}</code>
            <code>{`try {`}</code>
            <code>{`const response = await fetch('https://api.exemplo.com/dados');`}</code>
            <code>{`const data = await response.json();`}</code>
            <code>{`console.log(data);`}</code>
            <code>{` catch (error) {`}</code>
            <code>{`console.error('Erro:', error);`}</code>
            <code>buscarDados();</code>
          </li>
        </ul>
      </div>
    </>
  );
}
