import "../styles/react.css";
import reactLogo from "../../assets/images/react/reactlogo.webp";

export default function ReactPage() {
  return (
    <>
      <div className="react-content">
        <header className="technology-header">
          <img
            width={200}
            loading="lazy"
            height={"auto"}
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            alt="HTML Logo"
          />
          <h1>Sobre HTML</h1>
        </header>
        <h2>Hooks</h2>
        <p>Os hooks permitem organizar a lógica usada em um componente. </p>
        <p>
          useState: É um hook do React que permite adicionar estado a
          componentes funcionais. Ele retorna um array com dois elementos: o
          estado atual e uma função que permite atualizar esse estado.
        </p>
        <p>
          useEffect: É um hook que permite executar efeitos colaterais em
          componentes funcionais, como buscar dados, alterar o DOM, ou definir
          timers. Ele recebe uma função como argumento, que é executada após a
          renderização do componente.
        </p>
        <h2>JSX</h2>
        <p>
          É uma sintaxe semelhante ao HTML que permite escrever estruturas de UI
          de forma mais intuitiva. O React transforma o JSX em chamadas para
          funções do React.
        </p>
        <h2>Router DOM</h2>
        <p>
          É uma biblioteca que permite criar aplicações single-page (SPA) com o
          React. Ele oferece componentes como BrowserRouter, Routes, Route e
          Link para gerenciar rotas e navegação.
        </p>
        <h2>Gerenciamento de Estado Global: Redux e Context API</h2>
        <p>
          Redux: É uma biblioteca externa que fornece um contêiner previsível
          para o estado de sua aplicação inteira.
        </p>
        <p>
          Context API: É uma API nativa do React para compartilhar dados entre
          componentes sem passar props manualmente.
        </p>
      </div>
    </>
  );
}
