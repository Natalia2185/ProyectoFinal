import React from 'react';
import './Sections.css'; // Agregamos los estilos del modal

const Sections = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form>
          <div className="Usuario">
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="Contraseña">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Ingresar</button>
        </form>
        {/* Aquí estamos llamando a onClose cuando el botón "Cerrar" se hace clic */}
        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Sections;