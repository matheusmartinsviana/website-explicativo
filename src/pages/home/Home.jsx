import TopicsSlider from "../../components/TopicsSlider";
import cssLogo from "../../assets/images/css/csslogo.webp";
import jsLogo from "../../assets/images/js/jslogo.webp";
import reactLogo from "../../assets/images/react/reactlogo.webp";
import nodejsLogo from "../../assets/images/nodejs/nodejs.webp";
import htmlLogo from "../../assets/images/html/htmllogo.webp";
import TecnologySection from "../../components/TecnologySection";

function Home() {
  const tecnologias = [
    {
      titulo: "HTML",
      descricao: "Uma linguagem de marcação para criar páginas web.",
      logo: htmlLogo,
      link: "/html",
      sombra: "rgba(255, 87, 34, 0.6)",
    },
    {
      titulo: "CSS",
      descricao:
        "Uma linguagem de estilo usada para descrever a apresentação de um documento.",
      logo: cssLogo,
      link: "/css",
      sombra: "rgba(33, 150, 243, 0.6)",
    },
    {
      titulo: "JavaScript",
      descricao:
        "Uma linguagem de programação para criar conteúdo interativo na web.",
      logo: jsLogo,
      link: "/javascript",
      sombra: "rgba(255, 235, 59, 0.6)",
    },
    {
      titulo: "Node.js",
      descricao:
        "Um ambiente de execução JavaScript baseado no motor V8 do Chrome.",
      logo: nodejsLogo,
      link: "/nodejs",
      sombra: "rgba(0, 128, 0, 0.6)",
    },
    {
      titulo: "React",
      descricao:
        "Uma biblioteca JavaScript para construir interfaces de usuário.",
      logo: reactLogo,
      link: "/reactjs",
      sombra: "rgba(76, 175, 80, 0.6)",
    },
    {
      titulo: "Devops",
      descricao:
        "O DevOps ajuda as equipes a responder melhor às necessidades dos clientes, a aumentar a confiança nos aplicativos e a cumprir as metas empresariais mais rapidamente",
      logo: "https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png",
      link: "/devops",
      sombra: "rgba(0, 0, 0, 0.6)",
    },
  ];

  return (
    <main>
      <TopicsSlider />
      {tecnologias.map((tech, index) => (
        <TecnologySection
          key={index}
          title={tech.titulo}
          description={tech.descricao}
          logo={tech.logo}
          link={tech.link}
          shadowColor={tech.sombra}
        />
      ))}
    </main>
  );
}

export default Home;
