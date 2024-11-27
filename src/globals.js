import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .bar {
    background-color: ${({ theme }) => theme.text || "#fff"};
  }

  body {
    background: ${({ theme }) => theme.body || "#fff"};
    color: ${({ theme }) => theme.text || "#000"};
    font-family: sans-serif;
    transition: background 0.25s linear, color 0.25s linear;
  }

  a, li, span {
    color: ${({ theme }) => theme.text || "#000"};
    transition: color 0.25s linear;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.linkHover || theme.text};
  }

  .navMenu,
  select,
  option {
    color: ${({ theme }) => theme.text || "#000"};
  }
  select,
  option {
    background: ${({ theme }) => theme.body || "#fff"};
  }

  img {
    max-width: 100%;
    height: auto;
    filter: ${({ theme }) => theme.imageFilter || "none"};
  }

  .technology-header img,
  .technology-header-docker img,
  .technology-header-pm2 img,
  .technology-header-sequelize img,
  .technology-header-mongoose img {
    filter: ${({ theme }) => theme.shadow || "none"};
  }
`;
