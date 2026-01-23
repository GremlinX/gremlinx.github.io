import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "./context/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";
import {FormControlLabel, Switch} from '@mui/material';
import * as bootstrap from "bootstrap"

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Meu Portfólio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/about">Sobre</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projetos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contato</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

            <FormControlLabel
              control={<Switch onClick={toggleTheme} />}
              label={theme === "dark" ? <CiDark className="icon-size" /> : <CiLight className="icon-size" />}
              className="text-light"
            />
          </ul>
        </div>
      </div>
    </nav>
  )};