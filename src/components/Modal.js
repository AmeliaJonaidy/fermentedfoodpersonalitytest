import React from 'react';
import '../styles/Modal.css';

function Modal({ isOpen, onClose, title, content, icon }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-icon">{icon}</span>
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
