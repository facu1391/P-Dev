import React from 'react';
import './DescargarCV.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DescargarCV = () => {
  const descargarCV = async () => {
    console.log('Descargando CV...');
    try {
      const downloadURL = import.meta.env.VITE_PDF_DOWNLOAD_URL;

      window.open(downloadURL, '_blank');
    } catch (error) {
      console.error('Error al descargar el CV:', error);
    }
  };
  
  return (
    <button onClick={descargarCV}>
      Descargar CV <FontAwesomeIcon icon={faDownload} />
      <span className="overlay"></span>
    </button>
  );
}

export default DescargarCV;