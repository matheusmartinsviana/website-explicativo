import { useState, useRef, useEffect } from 'react';
import styles from './Styles/Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
    const [isActive, setIsActive] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false);
    };

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    // Fecha o dropdown ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <nav className={styles.navbar}>
                    <Link to="/" className={styles.logo}>Descomplicando Linguagens e Ferramentas de Dev</Link>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <Link to="/" className={styles.navLink}>Início</Link>
                        </li>
                        <li className={styles.dropdown} ref={dropdownRef}>
                            <button onClick={toggleDropdown} className={styles.navLink}>Tecnologias</button>
                            <ul className={`${styles.dropdownLinks} ${dropdown ? styles.activeDropdown : styles.inactiveDropdown}`}>
                                <li>
                                    <Link className={styles.dropdownItemLink} to="/html">HTML</Link>
                                </li>
                                <li>
                                    <Link className={styles.dropdownItemLink} to="/css">CSS</Link>
                                </li>
                                <li>
                                    <Link className={styles.dropdownItemLink} to="/javascript">JavaScript</Link>
                                </li>
                                <li>
                                    <Link className={styles.dropdownItemLink} to="/nodejs">Node.js</Link>
                                </li>
                                <li>
                                    <Link className={styles.dropdownItemLink} to="/reactjs">React.js</Link>
                                </li>
                                <li>
                                    <Link className={styles.dropdownItemLink} to="/devops">DevOps</Link>
                                </li>
                            </ul>
                        </li>
                        <li onClick={removeActive}>
                            <Link to="/contact" className={styles.navLink}>Contato</Link>
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

export default Nav;
