import React, { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Contacts.css";

export const Contact = ({id}) => {
  const [message, setMessage] = useState("");
  const { theme } = useTheme();

  const handleSendEmail = () => {
    const email = "marcelo-ito@hotmail.com";
    const subject = "Contato via Portfólio";
    const body = encodeURIComponent(
      `Mensagem enviada através do seu portfólio:\n\n${message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className={`contact-container ${theme}`}
      >
        <h2 className="contact-title" id={id}>Contato</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-text">
              Sinta-se à vontade para entrar em contato comigo através dos
              canais abaixo:
            </p>
            <p className="contact-text">
              <b>LinkedIn:</b>{" "}
              <a
                href="https://www.linkedin.com/in/marcelo-ito-096460144/"
                target="_blank"
                rel="noreferrer"
              >
                Marcelo Ito
              </a>
            </p>
            <p className="contact-text">
              <b>GitHub:</b>{" "}
              <a href="https://github.com/GremlinX" target="_blank" rel="noreferrer">
                GremlinX
              </a>
            </p>
            <p className="contact-text">
              <b>Email:</b> marcelo-ito@hotmail.com
            </p>
            <p className="contact-text">
              <b>Telefone:</b> +55 (47) 99149-5505
            </p>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">Envie-me uma mensagem</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="contact-form"
            >
              <input
                type="text"
                placeholder="Seu Nome"
                className="contact-input"
                required
              />
              <input
                type="email"
                placeholder="seuemail@email.com"
                className="contact-input"
                required
              />
              <textarea
                rows="5"
                placeholder="Digite sua mensagem"
                className="contact-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="button"
                className="contact-btn"
                onClick={handleSendEmail}
              >
                Enviar Email
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
