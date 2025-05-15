import React from 'react';
import ElementoImagen from './ElementoImagen';

const CuadriculaImagenes = ({ imagenes }) => {
  return (
    <div
      className="cuadricula-imagenes"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}
    >
      {imagenes.map((imagen) => (
        <ElementoImagen key={imagen.id} src={imagen.src} alt={imagen.alt} />
      ))}
    </div>
  );
};

export default CuadriculaImagenes;
