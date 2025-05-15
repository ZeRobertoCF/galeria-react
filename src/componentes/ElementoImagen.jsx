import React from 'react';

const ElementoImagen = ({ src, alt }) => {
  return (
    <div className="elemento-imagen" style={{ border: '1px solid #ccc', padding: '8px' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ElementoImagen;
