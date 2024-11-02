import "../styles/html.css";

export default function Html() {
  return (
    <>
      <div className="html-structures-container">
        <h2>Estruturas HTML</h2>
        <ul className="html-list-elements">
          <li>
            <strong>Estruturais</strong>{" "}
            <code>
              &lt;html&gt;
              <p>Usa para abrir declarar um documento HTML.</p>
            </code>{" "}
            <code>&lt;head&gt;</code> <code>&lt;body&gt;</code>{" "}
            <code>&lt;div&gt;</code> <code>&lt;span&gt;</code>
          </li>
          <li>
            <strong>Textuais</strong> <code>&lt;h1&gt;</code>{" "}
            <code>&lt;h6&gt;</code> <code>&lt;p&gt;</code>{" "}
            <code>&lt;a&gt;</code> <code>&lt;strong&gt;</code>{" "}
            <code>&lt;em&gt;</code>
          </li>
          <li>
            <strong>Mídia</strong> <code>&lt;img&gt;</code>{" "}
            <code>&lt;audio&gt;</code> <code>&lt;video&gt;</code>
          </li>
          <li>
            <strong>Formulários</strong> <code>&lt;form&gt;</code>{" "}
            <code>&lt;input&gt;</code> <code>&lt;textarea&gt;</code>{" "}
            <code>&lt;button&gt;</code> <code>&lt;select&gt;</code>
          </li>
          <li>
            <strong>Tabelas</strong> <code>&lt;table&gt;</code>{" "}
            <code>&lt;tr&gt;</code> <code>&lt;td&gt;</code>{" "}
            <code>&lt;th&gt;</code>
          </li>
          <li>
            <strong>Semânticas</strong> <code>&lt;header&gt;</code>{" "}
            <code>&lt;footer&gt;</code> <code>&lt;article&gt;</code>{" "}
            <code>&lt;section&gt;</code> <code>&lt;nav&gt;</code>
          </li>
        </ul>
      </div>
    </>
  );
}
