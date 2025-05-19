import React from 'react';
import ElementoImagen from './ElementoImagen';
import './cuadricula.css';

const CuadriculaImagenes = ({ imagenes, onEliminar, onDescargar, onAbrir }) => {
  return (
    <div className="cuadricula">
      {imagenes.map((imagen) => (
        <div key={imagen.id} className="contenedor-imagen">
          <img 
            src={imagen.src} 
            alt={imagen.alt}
            onClick={() => onAbrir(imagen)}
            className="imagen-cuadricula"
            loading="lazy" // Mejora rendimiento
          />
        </div>
      ))}
    </div>
  );
};

export default CuadriculaImagenes;