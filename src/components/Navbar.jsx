import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import {
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineRead,
} from "react-icons/ai";
import { CiLight, CiDark } from "react-icons/ci";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(true); // Lateral sempre aberta por padrão

  return (
    <aside className={`navbar-container ${theme}`}>
      {/* Logo / Brand */}
      <div className="navbar-brand-container">
        <Link className="navbar-brand" to="/">
          <AiOutlineUser className="brand-icon" />
        </Link>
      </div>

      {/* Menu Links */}
      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link className="nav-link" to="/about">
          <AiOutlineUser className="nav-icon" />
          <span className="nav-text">Sobre</span>
        </Link>

        <Link className="nav-link" to="/projects">
          <AiOutlineProject className="nav-icon" />
          <span className="nav-text">Projetos</span>
        </Link>

        <Link className="nav-link" to="/contact">
          <AiOutlineMail className="nav-icon" />
          <span className="nav-text">Contato</span>
        </Link>

        <Link className="nav-link" to="/blog">
          <AiOutlineRead className="nav-icon" />
          <span className="nav-text">Blog</span>
        </Link>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <CiDark /> : <CiLight />}
        </button>
      </nav>
    </aside>
  );
};
