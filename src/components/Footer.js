import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "./context/ThemeContext";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="text-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ display: "inline-block", width: "50%" }}>
              <hr className={`divider-${theme}`} />
            </div>
          </div>
          <span className="small text-secondary">Desenvolvido com ❤️ por Marcelo Ito</span>
        </div>
      </div>
    </footer>
  );
};
