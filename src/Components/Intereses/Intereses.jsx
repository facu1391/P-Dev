import React from 'react';
import './Intereses.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHeadphones, faPlane, faPersonHiking, faBook, faCar } from '@fortawesome/free-solid-svg-icons';

const Intereses = () => {
  return (
    <div>
      <h3>Intereses</h3>
      <div className="contenedor-intereses">
        <div className="interes">
          <FontAwesomeIcon icon={faGamepad} />
          <span>JUEGOS</span>
        </div>
        <div className="interes">
          <FontAwesomeIcon icon={faHeadphones} />
          <span>MUSICA</span>
        </div>
        <div className="interes">
          <FontAwesomeIcon icon={faPlane} />
          <span>VIAJAR</span>
        </div>
        <div className="interes">
          <FontAwesomeIcon icon={faPersonHiking} />
          <span>DEPORTE</span>
        </div>
        <div className="interes">
          <FontAwesomeIcon icon={faBook} />
          <span>LIBROS</span>
        </div>
        <div className="interes">
          <FontAwesomeIcon icon={faCar} />
          <span>AUTOS</span>
        </div>
      </div>
    </div>
  );
}

export default Intereses;