import React, { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export const Contact = () => {
  const [message, setMessage] = useState("");
  const { theme } = useTheme();

  const bgClass = theme === "dark" ? "bg-dark text-white" : "bg-light text-dark shadow-lg";
  const textStyle = theme === "dark" ? "text-light" : "text-muted";
    
  const handleSendEmail = () => {
      const email = "marcelo-ito@hotmail.com";
      const subject = "Contato via Portfólio";
      const body = encodeURIComponent(`Mensagem enviada através do seu portfólio:\n\n${message}`);
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
        className={`container text-center mt-5`}
      >
        <div className={`container mt-5 p-5 ${bgClass} rounded`}>
          <h2 className={`text-center ${theme === "dark" ? "text-white" : "text-primary"} fw-bold mb-4`}>Contato</h2>
          
          <div className="row flex-row-reverse">
            <div className="col-md-6 text-center text-md-center">
              <p className={`lead ${textStyle}`}>Sinta-se à vontade para entrar em contato comigo através dos canais abaixo:</p>
              <p className={`${textStyle}`}><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/marcelo-ito-096460144/" target="_blank" rel="noreferrer" className="text-decoration-none">Marcelo Ito</a></p>
              <p className={`${textStyle}`}><b>GitHub:</b> <a href="https://github.com/GremlinX" target="_blank" rel="noreferrer" className="text-decoration-none">GremlinX</a></p>
              <p className={`${textStyle}`}><b>Email:</b> marcelo-ito@hotmail.com</p>
              <p className={`${textStyle}`}><b>Telefone:</b>+55 (44) 99735-4683</p>
            </div>
            
            <div className="col-md-6">
              <h3 className={`${textStyle} fw-bold`}>Envie-me uma mensagem</h3>
              <form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                      <label className="form-label">Nome</label>
                      <input type="text" className="form-control" placeholder="Seu Nome" required />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="seuemail@email.com" required />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Mensagem</label>
                      <textarea 
                          className="form-control" 
                          rows="4" 
                          placeholder="Digite sua mensagem" 
                          required 
                          value={message} 
                          onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                  </div>
                  <button type="button" className="btn btn-primary w-100" onClick={handleSendEmail}>Enviar Email</button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
};

