import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogCategories } from "../data/Blog/blogData";
import { useTheme } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { UpdateModal } from "./UpdateModal";


export const Blog = ({id}) => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const bgClass =
    theme === "dark" ? "bg-dark text-light" : "bg-light text-dark shadow-lg";
  const textClass = theme === "dark" ? "text-light" : "text-primary";
  const textStyle = theme === "dark" ? "text-light" : "text-dark";

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          className="container py-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container py-5" id={id}>
            <h1
              className={`mb-4 fw-bold text-center ${textClass}`}
              style={{ cursor: "pointer"}}
              onClick={handleModalOpen}
            >
              📚 Meu Journal Técnico
            </h1>

            <div className="row">
              {blogCategories.map((category) => (
                <div className="col-md-6 col-lg-4 mb-4" key={category.id}>
                  <div className={`card ${bgClass}`}>
                    <div className="card-body">
                      <h5 className={`text-center ${textClass} fw-bold mb-4`}>
                        {category.icon} {category.title}
                      </h5>
                      <p className="card-text textStyle">
                        {category.description}
                      </p>
                      <Link
                        to={`/blog/${category.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Ver notas
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modal de atualizações */}
      <UpdateModal show={showModal} handleClose={handleModalClose} />
    </>
  );
};
