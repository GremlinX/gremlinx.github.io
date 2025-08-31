import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "./context/ThemeContext";

export const Home = () => {
  const { theme } = useTheme();

  const bgClass =
    theme === "dark" ? "bg-dark text-white" : "bg-light text-dark shadow-lg";
  const textStyle = theme === "dark" ? "text-light" : "bg-light text-muted";

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
        <h1
          className={`display-4 ${
            theme === "light" ? "text-primary" : "text-light"
          }`}
        >
          Bem-vindo ao Meu Portfólio
        </h1>
        <p
          className={`lead ${
            theme === "light" ? "text-secondary" : "text-light"
          }`}
        >
          QA Professional | Fullstack Developer
        </p>

        <div
          className={`container d-flex align-items-center justify-content-center ${bgClass} p-5 rounded`}
        >
          <div className="row w-100 align-items-center">
            {/* Imagem */}
            <div className="col-lg-5 d-flex justify-content-center">
              <motion.div
                className="p-3 border rounded shadow-sm bg-white"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/profile_image.png`}
                  alt="Minha Foto"
                  className="profile-img img-fluid rounded w-100 h-auto"
                  style={{ maxHeight: "350px", objectFit: "cover" }}
                />
              </motion.div>
            </div>

            {/* Texto */}
            <div className="col-lg-7 d-flex flex-column justify-content-center text-center text-lg-start p-4">
              <h2 className={`display-5 ${textStyle}`}>Eu sou Marcelo Ito</h2>
              <p className={`lead ${textStyle}`}>
                Desenvolvedor Fullstack com mais de 3 anos de experiência em QA.{" "} 
                Interessado em análise de dados e inteligência artificial 
                como forma de aprimorar habilidades técnicas e 
                contribuir de forma mais estratégica no desenvolvimento de projetos.
              </p>
              <a
                href={`${process.env.PUBLIC_URL}/docs/Curriculo_MarceloIto_BSB.pdf`}
                download="Curriculo_MarceloIto_BSB.pdf"
                className={`btn btn-${
                  theme === "light" ? "primary" : "outline-light"
                } btn-lg mt-3`}
              >
                📄 Baixar Currículo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
