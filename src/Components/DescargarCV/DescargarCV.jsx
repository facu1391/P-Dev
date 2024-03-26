import React from 'react';
import './DescargarCV.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DescargarCV = () => {
  
  return (
    <button>
      Descargar CV <FontAwesomeIcon icon={faDownload} />
      <span className="overlay"></span>
    </button>
  );
}

export default DescargarCV;