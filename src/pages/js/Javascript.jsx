import "../styles/js.css";

export default function Javascript() {
  return (
    <>
      {/* Liste as funções e explique as principais utilizações do JavaScript no
      frontend. Inclua exemplos práticos. Manipulação de DOM:
      document.getElementById, document.querySelector, document.createElement,
      element.appendChild Eventos: addEventListener, eventos comuns (click,
      submit, mouseover, keydown) Manipulação de Dados: Arrays (map, filter,
      reduce), Objetos (criação e acesso), Funções (declaração, expressão, arrow
      functions) Fetch API: fetch, Promises, Async/Await */}

      <div className="js-elements">
        <ul className="js-elements-list">
          <li className="js-element">
            <h3>getElementById</h3>
            <p>Basta declarar uma variável e utilizar seguinte função:</p>
            <code>const text = documento.getElementById(&quot;text&quot;)</code>
          </li>
          <li>
            <h3>querySelector</h3>
            <p></p>
            <code></code>
          </li>
        </ul>
      </div>
    </>
  );
}
