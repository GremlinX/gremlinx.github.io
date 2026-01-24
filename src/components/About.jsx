import React from "react";
import { FaJava, FaDatabase, FaTools } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { IoIosInfinite } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext";
// import "./About.css";

export const About = () => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        className={`about-container ${theme}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sobre Mim */}
        <section className="about-section">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-text">
            <b>Desenvolvedor Fullstack</b> e <b>QA Senior</b>, formado em{" "}
            <b>Análise e Desenvolvimento de Sistemas</b>. Tenho experiência com{" "}
            <b>React</b>, <b>Spring Boot</b>, <b>SQL</b> e automação de testes
            com <b>Cypress</b> e <b>Jenkins</b>. Trabalho em{" "}
            <b>ambientes ágeis</b> e colaborativos, unindo habilidades técnicas
            e de gestão para otimizar processos e alinhar objetivos dentro das
            equipes.
          </p>
        </section>

        {/* Habilidades */}
        <section className="about-section">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-grid">
            <SkillCard
              icon={<MdOutlineWeb />}
              title="Front-end"
              skills={[
                "React",
                "Angular",
                "Vue",
                "Bootstrap",
                "jQuery",
                "JavaScript",
                "TypeScript",
              ]}
              theme={theme}
            />
            <SkillCard
              icon={<FaJava />}
              title="Back-end"
              skills={["Java (Spring Boot)", "C# (.NET)", "Express", "Node"]}
              theme={theme}
            />
            <SkillCard
              icon={<FaDatabase />}
              title="Banco de Dados"
              skills={["Postgres", "SQL Server", "MongoDB"]}
              theme={theme}
            />
            <SkillCard
              icon={<IoIosInfinite />}
              title="Automação e CI/CD"
              skills={["Cypress", "Jenkins", "Python"]}
              theme={theme}
            />
            <SkillCard
              icon={<FaTools />}
              title="Ferramentas"
              skills={["Postman", "Swagger UI", "Docker", "VSCode", "Git"]}
              theme={theme}
            />
          </div>
        </section>

        {/* Cursos */}
        <section className="about-section">
          <h2 className="section-title">Cursos</h2>
          <div className="courses-grid">
            <CourseCard
              icon="🌐"
              title="Língua Inglesa"
              details="CNA School"
              theme={theme}
            />
            <CourseCard
              icon={<SiUdemy />}
              title="Complete 2023 Web Development Bootcamp"
              link="https://ude.my/UC-7e99687e-1459-4089-8a7f-dffecdda68aa"
              details="Udemy"
              theme={theme}
            />
            <CourseCard
              icon={<SiUdemy />}
              title="Java COMPLETO POO + Projetos"
              link="https://ude.my/UC-ee8e8cb3-8039-4539-b47e-2214eb250447"
              details="Udemy"
              theme={theme}
            />
            <CourseCard
              icon={<SiUdemy />}
              title="Vue - The Complete Guide"
              link="https://ude.my/UC-ebf11284-a4aa-49a0-9ceb-eb4bc7425d15"
              details="Udemy"
              theme={theme}
            />
            <CourseCard
              icon={<SiUdemy />}
              title="Complete Web & Mobile Designer: UI/UX, Figma, +more"
              link="https://ude.my/UC-126a014f-b770-456e-8bb0-01cc9c27fdd1"
              details="Udemy"
              theme={theme}
            />
            <CourseCard
              icon="📚"
              title="Formações e Cursos da Alura"
              link="https://cursos.alura.com.br/user/marcelo-ito0/fullCertificate/8e3b53f7a62055f39bca27c90fcdc02b"
              theme={theme}
            />
            <CourseCard
              icon={<SiCoursera />}
              title="Cursos da Coursera"
              link="https://www.coursera.org/user/168f45137fee0359d5fb2c747d744b87"
              theme={theme}
            />
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

/* Card de Habilidades */
function SkillCard({ icon, title, skills, theme }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skill-icon">{icon}</div>
      <h5 className="skill-title">{title}</h5>
      <div className="skill-badges">
        {skills.map((skill, index) => (
          <span key={index} className={`skill-badge ${theme}`}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* Card de Cursos */
function CourseCard({ icon, title, details, link, theme }) {
  return (
    <motion.div
      className={`course-card ${theme}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="course-icon">{icon}</div>
      <h5 className="course-title">{title}</h5>
      {details && <p className="course-details">{details}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="course-button"
        >
          Ver Certificados
        </a>
      )}
    </motion.div>
  );
}
