import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import {
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineRead,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { CiLight, CiDark } from "react-icons/ci";
import { useIsMobile } from "./hooks/useIsMobile";
import "../../styles/Navbar.css";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false); // menu fechado no mobile

  // Função para fechar menu ao clicar no link (mobile)
  const handleLinkClick = (e, to) => {
    if (isMobile) {
      e.preventDefault(); // previne o roteamento
      const section = document.getElementById(to.replace("/", ""));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false); // fecha o menu
    }
  };

  // Links para Desktop e Mobile
  const links = [
    { to: "/about", icon: <AiOutlineUser />, text: "Sobre" },
    { to: "/projects", icon: <AiOutlineProject />, text: "Projetos" },
    { to: "/contact", icon: <AiOutlineMail />, text: "Contato" },
    // { to: "/blog", icon: <AiOutlineRead />, text: "Blog" },
  ];

  return (
    <aside
      className={`navbar-container ${theme} ${isMobile ? "mobile" : ""} ${
        menuOpen ? "open" : ""
      }`}
    >
      <div className="navbar-brand-container">
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          Início
        </Link>

        {isMobile && (
          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        )}
      </div>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.to}
            className="nav-link"
            to={link.to} // desktop continua funcionando
            onClick={(e) => handleLinkClick(e, link.to)}
          >
            {link.icon}
            <span className="nav-text">{link.text}</span>
          </Link>
        ))}

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <CiDark /> : <CiLight />}
        </button>
      </nav>
    </aside>
  );
};
