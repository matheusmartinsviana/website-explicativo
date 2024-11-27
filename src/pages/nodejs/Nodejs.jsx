import nodeJsLogo from "../../assets/images/nodejs/nodejs.webp";
import expressLogo from "../../assets/images/nodejs/express-js.webp";
import mongooseLogo from "../../assets/images/nodejs/mongoose.webp";
import sequelizeLogo from "../../assets/images/nodejs/sequelize.webp";
import "../styles/nodejs.css";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default function Nodejs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="nodejs-container">
      <section className="nodejs-container-title">
        <header className="technology-header">
          <img
            width={200}
            loading="lazy"
            height={"auto"}
            src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
            alt="Node.js Logo"
          />
        </header>
        <div>
          <p>
            Node.js® é um ambiente de execução JavaScript gratuito, de código
            aberto e multiplataforma que permite aos desenvolvedores criar
            servidores, aplicativos da web, ferramentas de linha de comando e
            scripts.
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js
            </a>
          </p>
          <details className="summary-detail">
            <summary>Mecanismo V8 JavaScript</summary>
            <p>
              O Node.js executa o mecanismo V8 JavaScript, o núcleo do Google
              Chrome, fora do navegador. Isso permite que o Node.js tenha muito
              desempenho.
            </p>
          </details>
        </div>
      </section>

      <section className="nodejs-backend-section">
        <h1>O Papel do Node.js no Backend</h1>
        <div className="nodejs-articles-container">
          <article>
            <h2>Servidores Eficientes</h2>
            <p>
              Node.js utiliza um modelo de execução single-threaded, onde um
              único thread gerencia múltiplas conexões através de um loop de
              eventos. Isso permite que ele suporte dezenas de milhares de
              conexões simultâneas, reduzindo o uso de memória e evitando
              problemas comuns em arquiteturas tradicionais que utilizam
              múltiplos threads.
            </p>
          </article>
          <article>
            <h2>Utilização de Módulos Principais</h2>
            <ul>
              <p>
                Node.js possui módulos nativos que facilitam a construção de
                funcionalidades básicas para servidores:
              </p>
              <li>
                <strong>http:</strong> Para criar servidores web.
              </li>
              <li>
                <strong>fs:</strong> Para manipulação de arquivos.
              </li>
              <li>
                <strong>path:</strong> Para manipulação de caminhos de arquivos.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="webapp-example-container">
        <h1>Exemplo de um Aplicativo Node.js</h1>
        <p>
          Exemplo comum executando um Hello World em Node.js que já é um
          servidor web.
        </p>
        <pre>
          <code className="language-javascript">
            {`
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});
            `}
          </code>
        </pre>
      </section>

      <section className="express-example-container">
        <div className="express-content">
          <header className="technology-header">
            <img
              width={200}
              height={"auto"}
              src={expressLogo}
              alt="Express.js Logo"
            />
          </header>
          <h2>Express.js</h2>
          <p>
            O Express é um framework que facilita o desenvolvimento de
            servidores web e APIs.
          </p>
          <figure>
            <h3>Comece adicionando ao seu projeto</h3>
            <pre>
              <code className="language-bash">{`npm install express`}</code>
            </pre>
          </figure>
        </div>
        <div className="express-code">
          <h2>Criação do servidor</h2>
          <pre>
            <code className="language-javascript">
              {`
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
              `}
            </code>
          </pre>
        </div>
      </section>

      <section className="database-integration-container">
        <h1>Integração com Bancos de Dados</h1>
        <p>
          Node.js pode se integrar facilmente com bancos de dados utilizando
          bibliotecas como Mongoose (para MongoDB) ou Sequelize (para
          PostgreSQL).
        </p>

        <div className="database-header">
          <header className="technology-header-mongoose">
            <img
              width={200}
              height={"auto"}
              src={mongooseLogo}
              alt="Mongoose Logo"
            />
          </header>
          <h2>Exemplo com Mongoose</h2>
        </div>
        <pre>
          <code className="language-javascript">
            {`
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', UserSchema);

// Criar um novo usuário
const user = new User({ name: 'Alice', age: 30 });
user.save().then(() => console.log('User saved!'));
            `}
          </code>
        </pre>

        <div className="database-header">
          <header className="technology-header-sequelize">
            <img
              width={200}
              height={"auto"}
              src={sequelizeLogo}
              alt="Sequelize Logo"
            />
          </header>
          <h2>Exemplo com Sequelize</h2>
        </div>
        <pre>
          <code className="language-javascript">
            {`
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@localhost:5432/mydatabase');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Sincronizar e criar tabela
sequelize.sync().then(() => {
    console.log('User table created!');
});
            `}
          </code>
        </pre>
      </section>

      <section className="security-practices-container">
        <h1>Práticas de Segurança</h1>
        <p>
          Para garantir a segurança das aplicações Node.js, é fundamental
          implementar middlewares para autenticação e autorização. Bibliotecas
          como Passport podem ser utilizadas para gerenciar autenticação.
        </p>
        <h2>Exemplo de Middleware com Passport</h2>
        <pre>
          <code className="language-javascript">
            {`
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

// Estratégia local para autenticação
passport.use(new LocalStrategy((username, password, done) => {
    // Lógica para verificar usuário e senha
}));
            `}
          </code>
        </pre>
      </section>
    </div>
  );
}
