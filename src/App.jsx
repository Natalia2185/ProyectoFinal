import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  
import './App.css';
import AboutUs from './SobreNosotros';  // Asegúrate de que el archivo exista y tenga el componente

// Si las imágenes están en la carpeta src/imagenes/
import cocacolaoriginal from './imagenes/cocacolaoriginal.png';
import cocacolazero from './imagenes/cocacolazero.png';
import cocacolalight from './imagenes/cocacolalight.png';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={
          <>
            <div id="productos">
              <h2>Productos</h2>
              <p>Algunos de los productos Coca-Cola son:</p>
              <div>
                <li>Coca-Cola Original</li>
                <img src={cocacolaoriginal} alt="Coca-Cola Original" className="image-logo" style={{ width: '300px', height: '190px' }} />

                <li>Coca-Cola Zero</li>
                <img src={cocacolazero} alt="Logo de Coca-Cola Zero" className="image-logo" style={{ width: '280px', height: '190px' }} />
               
                <li>Coca-Cola Light</li>
                <img src={cocacolalight} alt="Coca-Cola Light" className="image-logo" style={{ width: '280px', height: '190px' }}/>
              </div>
            </div>

            <div id="redessociales">
              <h2>Redes Sociales</h2>
              <p>Enlaces a nuestras redes sociales:</p>
              <ul>
                <li><a href="https://www.facebook.com/coca-cola" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://x.com/CocaColaMx?t=mCaD8zoQxdMmd1mvusA5aA&s=08" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com/cocacolamx?igsh=bjRqdmV1cXptMmkz" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </>
        } />
        
        {/* Ruta para la página externa "Sobre Nosotros" */}
        <Route path="/sobre-nosotros" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
