// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Sections from './Sections';
import AboutUs from './SobreNosotros';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div>
      <nav>
        <img
          src="https://www.coca-colaentuhogar.com/static/version1733515950/frontend/Bounteous/mexico/es_MX/images/logo-rainbow.svg"
          alt="Logo Coca-Cola"
        />

        <Link to="/">Inicio</Link>
         <Link to="#productos">Productos</Link>
         <Link to="/sobre-nosotros">Sobre Nosotros (Pág. Externa)</Link>
          <Link to="#redessociales">Redes Sociales</Link>

          <button onClick={openModal}>Ingresar</button>
        </nav>
        
        {isModalOpen && <Sections onClose={closeModal} />}
      </div>
    </header>
  );
};

export default Header;
