import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";


export const Blog = () => {
  const { theme } = useTheme();

  const textStyle = theme === "dark" ? "text-light" : "text-muted";

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 p-0 min-height-important">
      <div className="text-center">
        <h1 className="display-4 text-primary fw-bold">Blog em Construção 🚧</h1>
        <p className={`lead ${textStyle}`}>Estou trabalhando para trazer um conteúdo incrível para você. Fique ligado!</p>

        <div className="mt-4">
          <a
            href="#"
            className="btn btn-outline-primary me-2 disabled"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub
          </a>

          <Link to="/" className="btn btn-primary">Voltar ao Portfólio</Link>
        </div>
      </div>
    </div>
  );
};
