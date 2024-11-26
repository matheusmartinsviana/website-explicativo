import { Link } from "react-router-dom";
import styles from "./Styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerSection}>
        <Link to="/">
          Descomplicando Linguagens e Ferramentas de Desenvolvimento
        </Link>
        <p>
          Este site reflete o estudo nos tópicos de ferramentas e linguagens
          apresentadas neste website.
        </p>
      </section>
      <section className={styles.footerSection}>
        <h2>Mapa do site</h2>
        <ul>
          <li>
            <Link to="/html">HTML</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
          <li>
            <Link to="/javascript">JS</Link>
          </li>
          <li>
            <Link to="/reactjs">React</Link>
          </li>
          <li>
            <Link to="/nodejs">Node.js</Link>
          </li>
          <li>
            <Link to="/devops">DevOps</Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerSection}>
        <h3>Colaboradores</h3>
        <ul>
          <li>
            <Link to="/https://github.com/matheusmartinsviana/">
              Matheus Martins Viana
            </Link>
            <i></i>
          </li>
          <li>
            <Link to="/">Dayane Nogueira</Link>
            <i></i>
          </li>
          <li>
            <Link to="/">Davi Finkler</Link>
            <i></i>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
