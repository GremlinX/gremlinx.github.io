import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

export const About = () => {
  const { theme } = useTheme();

  const bgClass =
    theme === "dark" ? "bg-dark text-white" : "bg-light text-dark shadow-lg";
  const cardBg =
    theme === "dark" ? "bg-transparent text-white" : "bg-light text-dark";
  const textStyle = theme === "dark" ? "text-light" : "bg-light text-muted";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className={`container text-center mt-5`}
      >
        <div className={`container mt-5 p-5 rounded ${bgClass}`}>
          <h2
            className={`text-center ${
              theme === "dark" ? "text-white" : "text-primary"
            } fw-bold mb-4`}
          >
            Sobre Mim
          </h2>
          <p
            className={`${textStyle} fs-5 text-lg-start text-md-center text-sm-center`}
          >
            Sou formado em <b>Análise e Desenvolvimento de Sistemas</b> e tenho
            um forte interesse no aprendizado contínuo, sempre explorando novas
            tecnologias mas priorizando e aprimorando as minhas
            habilidades. Meu foco principal está em{" "}
            <b>React, Spring Boot, SQL e Cypress</b>, além de expandir meus
            conhecimentos em <b>análise de dados e inteligência artificial</b>.
          </p>
          <p
            className={`${textStyle} fs-5 text-lg-start text-md-center text-sm-center`}
          >
            Atualmente, trabalho como <b>QA (Quality Assurance)</b>, utilizando{" "}
            <b>Cypress e Jenkins</b> para automação de testes e melhoria dos
            processos de qualidade. Tenho experiência com{" "}
            <b>metodologias ágeis (Scrum)</b>, o que me permite atuar de forma
            colaborativa e eficiente em equipes multidisciplinares.
          </p>
          <p
            className={`${textStyle} fs-5 text-lg-start text-md-center text-sm-center`}
          >
            Além disso, possuo experiência com <b>gerenciamento de pessoas</b>,
            facilitando a comunicação e o alinhamento de objetivos dentro dos
            times com os quais colaboro.
          </p>
          <p
            className={`${textStyle} fs-5 text-lg-start text-md-center text-sm-center`}
          >
            Meu objetivo é continuar evoluindo e
            agregando valor por meio da tecnologia, sempre em busca de soluções
            inovadoras e eficientes.
          </p>
        </div>

        <div className={`container mt-5 p-5 rounded ${bgClass}`}>
          <div className="row mb-5">
            <div className="col">
              <h3
                className={`text-center ${
                  theme === "dark" ? "text-white" : "text-primary"
                } fw-bold mb-4`}
              >
                Habilidades
              </h3>
              <ul className="list-group">
                <li className={`list-group-item ${cardBg}`}>
                  <b>Front-end:</b> React, Bootstrap, jQuery, JavaScript
                </li>
                <li className={`list-group-item ${cardBg}`}>
                  <b>Back-end:</b> Java (Spring Boot), Express, Node
                </li>
                <li className={`list-group-item ${cardBg}`}>
                  <b>Banco de Dados:</b> Postgres, Microsoft SQL Server,
                  Mongoose, MongoDB
                </li>
                <li className={`list-group-item ${cardBg}`}>
                  <b>Automação e CI/CD:</b> Cypress, Jenkins, Python
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={`container mt-5 p-5 rounded ${bgClass}`}>
          <div className="col">
            <h3
              className={`text-center ${
                theme === "dark" ? "text-white" : "text-primary"
              } fw-bold mb-4`}
            >
              Cursos
            </h3>
            <ul className="list-group">
              <li className={`list-group-item ${cardBg}`}>
                📚 <b>Língua inglesa</b> – CNA School – 2010 – 2015
              </li>
              <li className={`list-group-item ${cardBg}`}>
                📚 <b>Complete 2023 Web Development Bootcamp</b> (Udemy)
              </li>
              <li className={`list-group-item ${cardBg}`}>
                📚{" "}
                <b>
                  Java COMPLETO 2023 Programação Orientada a Objetos + Projetos
                </b>{" "}
                (Udemy)
              </li>
              <li className={`list-group-item ${cardBg}`}>
                📚{" "}
                <a
                  href="https://cursos.alura.com.br/user/marcelo-ito0/fullCertificate/8e3b53f7a62055f39bca27c90fcdc02b"
                  rel="noreferrer"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Formações e Cursos da Alura
                </a>
              </li>
              <li className={`list-group-item ${cardBg}`}>
                📚{" "}
                <a
                  href="https://www.coursera.org/user/168f45137fee0359d5fb2c747d744b87"
                  rel="noreferrer"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Cursos da Coursera
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
