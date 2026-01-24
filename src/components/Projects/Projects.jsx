import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "./projectDetails";
import Carousel from "./Carousel";
// import "./Projects.css";

const TechIcons = ({ technologies }) => (
  <div className="tech-icons">
    {technologies.map((Icon, idx) => (
      <Icon key={idx} className="tech-icon" />
    ))}
  </div>
);

const ProjectLinks = ({ github, liveDemo, theme }) => (
  <div className="project-links">
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-btn github-btn ${theme}`}
    >
      <FaGithub /> GitHub
    </a>
    {liveDemo && liveDemo !== "#" && (
      <a
        href={liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-btn live-btn ${theme}`}
      >
        <FaGlobe /> Live Demo
      </a>
    )}
  </div>
);

const ProjectCard = ({ project, theme }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className={`project-card ${theme}`}
  >
    <Carousel src={project.image} alt={project.title} />
    <div className="project-content">
      <h5 className={`project-title ${theme}`}>{project.title}</h5>
      <p className="project-description">{project.description}</p>
      <hr className={`project-divider ${theme}`} />
      <TechIcons technologies={project.technologies} />
      <ProjectLinks github={project.github} liveDemo={project.liveDemo} theme={theme} />
    </div>
  </motion.div>
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
        className={`projects-container ${theme}`}
      >
        <h2 className={`projects-title ${theme}`}>Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} theme={theme} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
