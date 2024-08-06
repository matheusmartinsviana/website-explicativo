import { useState } from 'react'
import styles from './Styles/Nav.module.css';

function Nav() {

    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false)
    }
    return (
        <div className="App">
            <header className="App-header">
                <nav className={styles.navbar}>
                    <a href='#' className={styles.logo}>Descomplicando Linguangens e Ferramentas de Dev </a>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <a href='#' className={styles.navLink}></a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#' className={styles.navLink}>Início</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#' className={styles.navLink}>Ferramentas e Linguagens</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#' className={styles.navLink}>Contato</a>
                        </li>
                    </ul>
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav