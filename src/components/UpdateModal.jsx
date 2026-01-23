// src/components/UpdateModal.jsx

import React from "react";
import { updateNotes } from "../data/Blog/updateNotes";
import { useTheme } from "./context/ThemeContext";

export const UpdateModal = ({ show, handleClose }) => {
  const { theme } = useTheme();

  const bg = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-backdrop fade show" onClick={handleClose}></div>

      <div
        className={`modal-dialog modal-dialog-centered`}
        role="document"
        style={{ zIndex: 1050 }}
      >
        <div className={`modal-content ${bg}`}>
          <div className="modal-header">
            <h5 className="modal-title">📅 Notas de Atualização</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>

          <div className="modal-body">
            {updateNotes.map((update, index) => (
              <div key={index} className="mb-3">
                <strong>{update.date}</strong>
                <ul className="mb-0">
                  {update.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
