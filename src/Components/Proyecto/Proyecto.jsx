import React from 'react';
import './Proyecto.css';

const Proyecto = ({ imagen, titulo, categoria }) => {
  return (
    <div className="proyecto">
      <img src={imagen} alt=""/>
      <div className="overlay">
        <h3>{titulo}</h3>
        <p>{categoria}</p>
      </div>
    </div>
  );
}

export default Proyecto;