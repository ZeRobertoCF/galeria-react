import React from 'react';
import './cuadricula.css';

const ElementoImagen = ({ src, alt, onEliminar, id, onDescargar }) => {
  return (
    <div className="elemento-imagen" style={{ 
      border: '1px solid #ccc', 
      padding: '8px',
      position: 'relative'
    }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
      
      <div style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        display: 'flex',
        gap: '8px'
      }}>
       <button 
  onClick={() => onDescargar({ src, alt, id })}
  style={{ 
    background: '#4CAF50', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer',
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <svg 
    width="16px" 
    height="16px" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: '4px' }}
  >
    <path 
      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</button>
        <button 
  onClick={() => onEliminar(id)}
  style={{ 
    background: '#f44336', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer',
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <svg 
    width="16px" 
    height="16px" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: '4px' }}
  >
    <path 
      d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</button>
      </div>
    </div>
  );
};

export default ElementoImagen;