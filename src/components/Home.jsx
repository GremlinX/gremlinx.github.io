import { useTheme } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Home.css"

export const Home = ({id}) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`home-container ${theme}`} id={id}>
          {/* Imagem */}
          <img
            src="/assets/images/profile_image.png"
            alt="Minha Foto"
            className="profile-image"
          />

          {/* Títulos */}
          <h1 className="home-title">Marcelo Ito</h1>
          <h2 className="home-subtitle">
            Fullstack Developer | QA Professional
          </h2>

          {/* Descrição */}
          <p className="home-description">
            Desenvolvedor Fullstack com mais de 3 anos de experiência em QA.
            Interessado em análise de dados e inteligência artificial como forma
            de aprimorar habilidades técnicas e contribuir de forma estratégica
            no desenvolvimento de projetos.
          </p>

          {/* Botão para baixar currículo */}
          <a
            href="/docs/Curriculo_MarceloIto_BSB.pdf"
            download="Curriculo_MarceloIto_BSB.pdf"
            className="home-button"
          >
            📄 Baixar Currículo
          </a>

          {/* Footer com hashtags */}
          <div className="home-footer">
            <span>#Frontend</span>
            <span>#Backend</span>
            <span>#DevOps</span>
            <span>#QA</span>
            <span>#Fullstack</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
