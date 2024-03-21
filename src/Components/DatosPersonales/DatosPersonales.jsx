import React from 'react';
import './DatosPersonales.css';

const DatosPersonales = () => {
  return (
    <div className="fila"> 
      <div className="col">
        <h3>Datos Personales</h3>
        <ul>
          <li><strong>Cumpleaños:</strong> 13-10-1991</li>
          <li><strong>Teléfono:</strong> 3804249741</li>
          <li><strong>Email:</strong> facurael@gmail.com</li>
          <li><strong>Dirección:</strong> 1546 La Rioja, Argentina</li>
          <li><strong>Cargo:</strong> <span>FREELANCE</span></li>
        </ul>
      </div>
    </div>
  );
}

export default DatosPersonales;