import React, { useState } from 'react';
import CuadriculaImagenes from './CuadriculaImagenes';

const Galeria = () => {
  const [imagenes, setImagenes] = useState([
    { id: 1, src: 'https://via.placeholder.com/300x200', alt: 'Imagen 1' },
    { id: 2, src: 'https://via.placeholder.com/300x200', alt: 'Imagen 2' },
  ]);

  const manejarCarga = (e) => {
    const archivos = Array.from(e.target.files);
    const nuevasImagenes = archivos.map((archivo, index) => ({
      id: Date.now() + index,
      src: URL.createObjectURL(archivo),
      alt: archivo.name,
    }));

    setImagenes((prev) => [...prev, ...nuevasImagenes]);
  };

  return (
    <div className="galeria">
      <h2>Galería de Fotos</h2>

      <input type="file" accept="image/*" multiple onChange={manejarCarga} />
      <CuadriculaImagenes imagenes={imagenes} />
    </div>
  );
};

export default Galeria;
