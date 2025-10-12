import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import { blogCategories } from "../data/Blog/blogData";
import { useTheme } from "./context/ThemeContext";

// Componente customizado para estilizar o conteúdo markdown
const MarkdownRenderer = ({ children, className }) => {
  if (className === "language-js") {
    return <pre className="bg-dark text-white p-2 rounded">{children}</pre>;
  }
};

export const CategoryView = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const bgClass =
    theme === "dark" ? "bg-dark text-light" : "bg-light text-dark shadow-lg";
  const textClass = theme === "dark" ? "text-light" : "text-primary";
  const textStyle = theme === "dark" ? "text-light" : "text-dark";

  const category = blogCategories.find((c) => c.id === id);
  if (!category) {
    return (
      <div className="container text-center py-5">
        <h2 className="text-danger">Categoria não encontrada 😢</h2>
        <Link to="/blog" className="btn btn-secondary mt-3">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className={`mb-4 ${textStyle}`}>
        {category.icon} {category.title}
      </h2>
      <p className={`${textStyle}`}>{category.description}</p>

      {category.posts.length > 0 ? (
        <div className="accordion py-3" id="accordionExample">
          {category.posts.map((post, index) => (
            <div key={post.id} className="accordion-item">
              <h2 className="accordion-header" id={`heading${post.id}`}>
                <button
                  className={`accordion-button ${bgClass}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapsePost${post.id}`}
                  aria-expanded="false"
                  aria-controls={`collapsePost${post.id}`}
                >
                  {post.title}
                </button>
              </h2>
              <div
                id={`collapsePost${post.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${post.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {post.content ? (
                    <ReactMarkdown
                      components={{
                        code: MarkdownRenderer,
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  ) : (
                    <p className={`${textStyle}`}>
                      Conteúdo ainda não disponível.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={theme === "dark" ? "text-light" : "text-muted"}>
          Ainda não há notas nesta categoria.
        </p>
      )}

      <Link to="/blog" className="btn btn-outline-primary">
        ← Voltar às Categorias
      </Link>
    </div>
  );
};
