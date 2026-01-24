import { SiReact, SiSpringboot, SiBootstrap, SiNumpy } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";

export const projects = [
  {
    title: "Projeto 1 - MemoryBox",
    description:
      "Uma aplicação para armazenar e compartilhar memórias, permitindo salvar textos e imagens de momentos importantes.",
    image: [
      `/assets/images/ReactJS.png`,
      `/assets/images/ProjetoLembranca.png`,
    ],
    technologies: [SiReact, SiBootstrap],
    github: "https://github.com/GremlinX/MemoryBox",
    liveDemo: "https://memory-box-ten.vercel.app/",
  },
  {
    title: "Projeto 2 - Sistema Para Livrarias",
    description:
      "Um sistema de gerenciamento de livros que permite criar, editar e excluir livros com integração a banco de dados.",
    image: [`/assets/images/SpringBoot.jpg`],
    technologies: [SiSpringboot, DiMsqlServer],
    github: "https://github.com/GremlinX/basic-spring-crud",
    liveDemo: "#",
  },
  {
    title: "Projeto 3 - Banco de Dados para Gestão Universitária",
    description:
      "Este projeto consiste em um banco de dados relacional para a gestão acadêmica de uma universidade. Ele está voltado para fins educativos e serve como exemplo para estudantes de áreas relacionadas como: computação, administração e gestão de dados. Este documento apresenta explicações de forma simples e fácil de entender, até para quem não tem experiência na área.",
    image: [`/assets/images/ModeloRelacionalSQL.png`],
    technologies: [DiMsqlServer],
    github: "https://github.com/GremlinX/basic-university-sql",
    liveDemo: "#",
  },
  {
    title: "Projeto 4 - Newsletter API",
    description:
      "Este projeto é uma aplicação estilo newsletter desenvolvida com Spring Boot e React. Ela se integra com a World News API para buscar notícias atuais de várias fontes do mundo e apresentá-las aos usuários. Também serve como um ambiente de aprendizado para aprimorar as habilidades em Java e Spring Boot.",
    image: [
      `/assets/images/newslettercover.jpg`,
      `/assets/images/GremNews_1.png`,
      `/assets/images/GremNews_2.png`,
    ],
    technologies: [SiReact, SiSpringboot, BiLogoPostgresql],
    github: "https://github.com/GremlinX/NewsletterAPI",
    liveDemo: "#",
  },
  {
    title: "Projeto 5 - Análise de Arrecadação de Impostos Federais no Brasil (2000–2024)",
    description:
      "Este repositório contém uma análise exploratória e descritiva dos dados de arrecadação de impostos federais no Brasil, abrangendo o período de 2000 a 2024. O estudo tem como objetivo identificar tendências, variações por estado e ano, e destacar os principais fatores que influenciaram a arrecadação federal durante esses anos. Além disso, este projeto tem como objetivo o aprendizado e o aprimoramento das habilidades em análise de dados, aplicando os conceitos adquiridos ao longo dos estudos.",
    image: [
      `https://placehold.co/600x400?text=Python - Análise de Dados`,
    ],
    technologies: [FaPython, SiNumpy],
    github: "https://github.com/GremlinX/analise-arrecacao-imposto",
    liveDemo: "#",
  },
  {
    title: "Projeto 6 - Discord Bot",
    description:
      "Projeto simples para finalidades pessoais para me avisar de fazer o Duolingo e receber últimas 4 nóticias publicadas pelo Correio Braziliense, através da API NewsData.",
    image: [
      `https://placehold.co/600x400?text=Discord Bot`,
    ],
    technologies: [FaPython, SiNumpy],
    github: "https://github.com/GremlinX/discordbot",
    liveDemo: "#",
  },
];
