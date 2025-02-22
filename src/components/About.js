import React from "react";
import { FaJava, FaDatabase, FaTools } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "./context/ThemeContext";

export const About = () => {
  const { theme } = useTheme();
  const bgClass =
    theme === "dark" ? "bg-dark text-light" : "bg-light text-dark shadow-lg";
  const textClass = theme === "dark" ? "text-light" : "text-primary";
  const textStyle = theme === "dark" ? "text-light" : "bg-light text-muted";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        className="container py-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`container my-5 p-5 ${bgClass} rounded`}>
          <h2 className={`text-center ${textClass} fw-bold mb-4`}>Sobre Mim</h2>
          <p
            className={`${textStyle} fs-5 text-lg-start text-md-center text-sm-center`}
          >
            Formado em <b>Análise e Desenvolvimento de Sistemas</b>, tenho
            experiência comprovada em <b>React</b>, <b>Spring Boot</b>,{" "}
            <b>SQL</b> e <b>Cypress</b>, sempre aprimorando minhas habilidades e
            explorando novas tecnologias das áreas da TI.
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
            Tenho experiência com <b>metodologias ágeis</b>, colaborando de
            forma eficiente em equipes multidisciplinares. Além disso, possuo
            vivência em gestão de pessoas, facilitando a comunicação e o
            alinhamento de objetivos nos times.
          </p>
        </div>

        {/* Habilidades */}
        <div className={`container my-5 p-5 ${bgClass} rounded`}>
          <div className="card-body">
            <h2 className={`text-center ${textClass} fw-bold mb-4`}>
              Habilidades
            </h2>
            <div className="row">
              <SkillCard
                icon={<MdOutlineWeb />}
                title="Front-end"
                skills={[
                  "React",
                  "Angular",
                  "Bootstrap",
                  "jQuery",
                  "JavaScript",
                  "TypeScript"
                ]}
                theme={theme}
              />
              <SkillCard
                icon={<FaJava />}
                title="Back-end"
                skills={["Java (Spring Boot)", "Express", "Node"]}
                theme={theme}
              />
              <SkillCard
                icon={<FaDatabase />}
                title="Banco de Dados"
                skills={["Postgres", "SQL Server", "MongoDB"]}
                theme={theme}
              />
              <SkillCard
                icon={<FaTools />}
                title="Automação e CI/CD"
                skills={["Cypress", "Jenkins", "Python"]}
                theme={theme}
              />
            </div>
          </div>
        </div>

        {/* Cursos */}
        <motion.div
          className={`container my-5 p-5 ${bgClass} rounded`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-center ${textClass} fw-bold mb-4`}>Cursos</h2>
          <div className="row">
            <CourseCard
              icon="📚"
              title="Língua Inglesa"
              details="CNA School"
              theme={theme}
            />
            <CourseCard
              icon=<SiUdemy />
              title="Complete 2023 Web Development Bootcamp"
              details="Udemy"
              theme={theme}
            />
            <CourseCard
              icon=<SiUdemy />
              title="Java COMPLETO 2023 POO + Projetos"
              details="Udemy"
              theme={theme}
            />
            <CourseCard
              icon="🔗"
              title="Formações e Cursos da Alura"
              link="https://cursos.alura.com.br/user/marcelo-ito0/fullCertificate/8e3b53f7a62055f39bca27c90fcdc02b"
              theme={theme}
            />
            <CourseCard
              icon=<SiCoursera />
              title="Cursos da Coursera"
              link="https://www.coursera.org/user/168f45137fee0359d5fb2c747d744b87"
              theme={theme}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

function SkillCard({ icon, title, skills, theme }) {
  const badgeTheme =
    theme === "dark" ? "badge text-bg-light" : "badge text-bg-primary";
  const textClass = theme === "dark" ? "text-light" : "text-primary";

  return (
    <motion.div
      className="col-md-6 mb-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`h-100 text-center p-3 rounded border`}>
        <div className={`fs-3 mb-2 ${textClass}`}>{icon}</div>
        <h5 className="fw-bold">{title}</h5>
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
          {skills.map((skill, index) => (
            <span key={index} className={`${badgeTheme}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CourseCard({ icon, title, details, link, theme }) {
  const bgClass =
    theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  const textClass = theme === "dark" ? "text-light" : "text-primary";

  return (
    <motion.div
      className="col-md-6 col-lg-4 mb-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`h-100 p-4 rounded border ${bgClass} text-center`}>
        <div className={`fs-3 mb-2 ${textClass}`}>{icon}</div>
        <h5 className="fw-bold">{title}</h5>
        {details && <p className="text-secondary small">{details}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm mt-2"
          >
            Ver Certificados
          </a>
        )}
      </div>
    </motion.div>
  );
}
