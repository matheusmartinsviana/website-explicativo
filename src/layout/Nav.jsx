import { useState, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalTheme from "../globals";
import { lightTheme, darkTheme } from "../theme";
import Switch from "../components/Switch.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/nav.css";

function Nav() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setIsToggled(localTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isToggled ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setIsToggled(!isToggled);
  };

  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

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
    <ThemeProvider theme={isToggled ? darkTheme : lightTheme}>
      <GlobalTheme />
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <Link to="/" className="logo">
              Descomplicando Linguagens e Ferramentas de Dev
            </Link>
            <ul className={`navMenu ${isActive ? "active" : ""}`}>
              <li onClick={removeActive}>
                <Link to="/" className="navLink">
                  Início
                </Link>
              </li>
              <li ref={dropdownRef}>
                <select
                  className="navLink"
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
                <Link to="/contact" className="navLink">
                  Contato
                </Link>
              </li>
            </ul>
            <div
              className={`hamburger ${isActive ? "active" : ""}`}
              onClick={toggleActiveClass}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <Switch
              id="theme-switch"
              toggled={isToggled}
              onChange={toggleTheme}
            />
          </nav>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default Nav;
