import { useState, useRef, useEffect } from "react";
import styles from "./Styles/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={styles.navbar}>
          <Link to="/" className={styles.logo}>
            Descomplicando Linguagens e Ferramentas de Dev
          </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li ref={dropdownRef}>
              <select
                className={styles.navLink}
                onChange={handleSelectChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma tecnologia
                </option>
                <option value="/html">HTML</option>
                <option value="/css">CSS</option>
                <option value="/javascript">JavaScript</option>
                <option value="/nodejs">Node.js</option>
                <option value="/reactjs">React.js</option>
                <option value="/devops">DevOps</option>
              </select>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact" className={styles.navLink}>
                Contato
              </Link>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
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
