import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "./projectDetails";
import Carousel from "./Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

const TechIcons = ({ technologies }) => (
  <div className="tech-icons">
    {technologies.map((Icon, idx) => (
      <Icon key={idx} style={{ fontSize: "2.25rem" }} className="tech-icon icon-hover" />
    ))}
  </div>
);

const ProjectLinks = ({ github, liveDemo, theme }) => {
  const btnGitHub = theme === "dark" ? "secondary" : "primary";
  const btnLiveDemo = theme === "dark" ? "outline-light" : "outline-primary";

  return (
    <div className="project-links">
      <a href={github} target="_blank" rel="noopener noreferrer" className={`btn btn-${btnGitHub}`}>
        <FaGithub /> GitHub
      </a>
      {liveDemo && liveDemo !== "#" && (
        <a href={liveDemo} target="_blank" rel="noopener noreferrer" className={`btn btn-${btnLiveDemo}`}>
          <FaGlobe /> Live Demo
        </a>
      )}
    </div>
  );
};


const ProjectCard = ({ project, theme, index }) => (
  <div key={index} className="col-12 col-md-8 mb-5">
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`card project-card card-${theme}`}
    >
      <Carousel src={project.image} alt={project.title} index={index} />
      <div className="card-body">
        <h5 className={`project-title title-${theme}`}>{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <hr className={`divider-${theme}`} />
        <TechIcons technologies={project.technologies} />
        <ProjectLinks github={project.github} liveDemo={project.liveDemo} theme={theme} />
      </div>
    </motion.div>
  </div>
);

export const Projects = () => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="container text-center mt-5"
      >
        <div className="container mt-5">
          <h2 className={`title-${theme} fw-bold mb-4`}>Meus Projetos</h2>
          <div className="row justify-content-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} theme={theme} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
