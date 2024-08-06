import styles from './Styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <section className={styles.footerSection}>
                <a href="#">Descomplicando Linguagens e Ferramentas de Desenvolvimento</a>
                <p>Este site reflete o estudo nos tópicos de ferramentas e linguagens apresentadas neste website.</p>
            </section>
            <section className={styles.footerSection}>
                <h2>Mapa do site</h2>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JS</a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Node.js</a></li>
                    <li><a href="#">DevOps</a></li>
                </ul>
            </section>
            <section className={styles.footerSection}>
                <h3>Colaboradores</h3>
                <ul>
                    <li>
                        <a href="#">Matheus Martins Viana</a>
                        <i></i>
                    </li>
                    <li>
                        <a href="#">Dayane Nogueira</a>
                        <i></i>
                    </li>
                    <li>
                        <a href="#">Davi Finkler</a>
                        <i></i>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer