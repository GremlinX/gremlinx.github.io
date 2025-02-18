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
            Formado em <b>Análise e Desenvolvimento de Sistemas</b>, tenho
            experiência comprovada em
            <b>React</b>, <b>Spring Boot</b>, <b>SQL</b> e <b>Cypress</b>,
            sempre aprimorando minhas habilidades e explorando novas tecnologias
            e áreas da TI.
          </p>
          <p
            className={`${textStyle} fs-5 text-lg-start text-md-center text-sm-center`}
          >
            Atualmente, atuo como <b>QA</b>, automatizando testes com{" "}
            <b>Cypress</b> e <b>Jenkins</b> para garantir a qualidade dos
            processos.
          </p>
          <p
            className={`${textStyle} fs-5 text-lg-start text-md-center text-sm-center`}
          >
            Tenho experiência com metodologias ágeis, colaborando de forma
            eficiente em equipes multidisciplinares. Além disso, possuo vivência
            em gestão de pessoas, facilitando a comunicação e o alinhamento de
            objetivos nos times.
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
