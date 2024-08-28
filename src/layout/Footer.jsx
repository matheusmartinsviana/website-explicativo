import { Link } from 'react-router-dom';
import styles from './Styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <section className={styles.footerSection}>
                <Link href="#">Descomplicando Linguagens e Ferramentas de Desenvolvimento</Link>
                <p>Este site reflete o estudo nos tópicos de ferramentas e linguagens apresentadas neste website.</p>
            </section>
            <section className={styles.footerSection}>
                <h2>Mapa do site</h2>
                <ul>
                    <li><Link href="#">HTML</Link></li>
                    <li><Link href="#">CSS</Link></li>
                    <li><Link href="#">JS</Link></li>
                    <li><Link href="#">React</Link></li>
                    <li><Link href="#">Node.js</Link></li>
                    <li><Link href="#">DevOps</Link></li>
                </ul>
            </section>
            <section className={styles.footerSection}>
                <h3>Colaboradores</h3>
                <ul>
                    <li>
                        <Link href="#">Matheus Martins Viana</Link>
                        <i></i>
                    </li>
                    <li>
                        <Link href="#">Dayane Nogueira</Link>
                        <i></i>
                    </li>
                    <li>
                        <Link href="#">Davi Finkler</Link>
                        <i></i>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer