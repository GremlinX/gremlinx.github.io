import { SiReact, SiSpringboot, SiBootstrap } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

export const projects = [
  {
    title: "Projeto 1 - MemoryBox",
    description:
      "Uma aplicação para armazenar e compartilhar memórias, permitindo salvar textos e imagens de momentos importantes.",
    image: [
      `${process.env.PUBLIC_URL}/assets/images/ReactJS.png`,
      `${process.env.PUBLIC_URL}/assets/images/ProjetoLembranca.png`,
    ],
    technologies: [SiReact, SiBootstrap],
    github: "https://github.com/GremlinX/MemoryBox",
    liveDemo: "https://memory-box-ten.vercel.app/",
  },
  {
    title: "Projeto 2 - Sistema Para Livrarias",
    description:
      "Um sistema de gerenciamento de livros que permite criar, editar e excluir livros com integração a banco de dados.",
    image: [`${process.env.PUBLIC_URL}/assets/images/SpringBoot.jpg`],
    technologies: [SiSpringboot, DiMsqlServer],
    github: "https://github.com/GremlinX/basic-spring-crud",
    liveDemo: "#",
  },
];
