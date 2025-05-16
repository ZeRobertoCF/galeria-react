import React from 'react';
import ElementoImagen from './ElementoImagen';
import './cuadricula.css';

const CuadriculaImagenes = ({ imagenes, onEliminar, onDescargar }) => {
  return (
    <div className="cuadricula-imagenes" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
    }}>
      {imagenes.map((imagen) => (
        <ElementoImagen 
          key={imagen.id} 
          src={imagen.src} 
          alt={imagen.alt} 
          id={imagen.id}
          onEliminar={onEliminar}
          onDescargar={onDescargar}
        />
      ))}
    </div>
  );
};

export default CuadriculaImagenes;