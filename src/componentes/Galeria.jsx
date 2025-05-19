import React, { useState } from 'react';
import CuadriculaImagenes from './CuadriculaImagenes';
import './cuadricula.css';
import img1 from '../../src/img/img1.png';
import img2 from '../../src/img/img2.png';


const Galeria = () => {
  const [imagenes, setImagenes] = useState([
     { id: 1, src: img1, alt: 'Descripción 1' },
     { id: 2, src: img2, alt: 'Descripción 2' },
  ]);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const manejarCarga = (e) => {
    const archivos = Array.from(e.target.files);
    const nuevasImagenes = archivos.map((archivo, index) => ({
      id: Date.now() + index,
      src: URL.createObjectURL(archivo),
      alt: archivo.name,
      file: archivo
    }));

    setImagenes((prev) => [...prev, ...nuevasImagenes]);
  };

  const eliminarImagen = (id) => {
    setImagenes(imagenes.filter(imagen => imagen.id !== id));
    if (imagenSeleccionada && imagenSeleccionada.id === id) {
      setImagenSeleccionada(null);
    }

    const imagenAEliminar = imagenes.find(img => img.id === id);
    if (imagenAEliminar && imagenAEliminar.src.startsWith('blob:')) {
      URL.revokeObjectURL(imagenAEliminar.src);
    }
  };

  const descargarImagen = (imagen) => {
    if (imagen.file) {
      const url = URL.createObjectURL(imagen.file);
      const a = document.createElement('a');
      a.href = url;
      a.download = imagen.alt || 'imagen';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      fetch(imagen.src)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = imagen.alt || 'imagen';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
    }
  };

  const abrirImagen = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  const cerrarImagen = () => {
    setImagenSeleccionada(null);
  };

  return (
    <div className="galeria">
      <h2>Galería de Fotos</h2>

   
      <input
        type="file"
        accept="image/*"
        multiple
        id="subir-imagen"
        style={{ display: 'none' }}
        onChange={manejarCarga}
      />

      <label htmlFor="subir-imagen" className="boton-subir">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Media / Image_01"> <path id="Vector" d="M3.00005 17.0001C3 16.9355 3 16.8689 3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4801 4 19.9079 4.21799C20.2842 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.2881 21 17.6679 20.9822 17.9774M3.00005 17.0001C3.00082 17.9884 3.01337 18.5058 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8036C18.9215 20 19.4805 20 19.9079 19.7822C20.2842 19.5905 20.5905 19.2837 20.7822 18.9074C20.9055 18.6654 20.959 18.3813 20.9822 17.9774M3.00005 17.0001L7.76798 11.4375L7.76939 11.436C8.19227 10.9426 8.40406 10.6955 8.65527 10.6064C8.87594 10.5282 9.11686 10.53 9.33643 10.6113C9.58664 10.704 9.79506 10.9539 10.2119 11.4541L12.8831 14.6595C13.269 15.1226 13.463 15.3554 13.6986 15.4489C13.9065 15.5313 14.1357 15.5406 14.3501 15.4773C14.5942 15.4053 14.8091 15.1904 15.2388 14.7607L15.7358 14.2637C16.1733 13.8262 16.3921 13.6076 16.6397 13.5361C16.8571 13.4734 17.0896 13.4869 17.2988 13.5732C17.537 13.6716 17.7302 13.9124 18.1167 14.3955L20.9822 17.9774M20.9822 17.9774L21 17.9996M15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        Subir imágenes
      </label>

      <CuadriculaImagenes
        imagenes={imagenes}
        onEliminar={eliminarImagen}
        onDescargar={descargarImagen}
        onAbrir={abrirImagen}
      />

      {imagenSeleccionada && (
        <div className="modal-imagen" onClick={cerrarImagen}>
          <div className="contenido-modal" onClick={e => e.stopPropagation()}>
            <img
              src={imagenSeleccionada.src}
              alt={imagenSeleccionada.alt}
              className="imagen-ampliada"
            />
            <div className="controles-imagen">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  descargarImagen(imagenSeleccionada);
                }}
                className="boton-descargar"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#878787"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                Descargar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  eliminarImagen(imagenSeleccionada.id);
                }}
                className="boton-eliminar"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Full"> <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                Eliminar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  cerrarImagen();
                }}
                className="boton-cerrar"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="  #878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;