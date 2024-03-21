import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ubicacion from '../../assets/ubicacion.png';

const InformacionContacto = () => {
  return (
    <div className="col">
      <img src={ubicacion} alt=""/>
      <div className="info">
        <ul>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            San Roman 1546, La Rioja
          </li>
          <li>
            <FontAwesomeIcon icon={faMobileScreen} />
            Llamame: 3804 - 249741 
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            Email: facurael@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InformacionContacto;