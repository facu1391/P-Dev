import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const FormularioContacto = () => {
  return (
    <div className="col">
      <input type="text" placeholder="Tú Nombre"/>
      <input type="text" placeholder="Número telefónico"/>
      <input type="text" placeholder="Dirección de correo"/>
      <input type="text" placeholder="Tema"/>
      <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
      <button>
        Enviar Mensaje<FontAwesomeIcon icon={faPaperPlane} />
        <span className="overlay"></span>
      </button>
    </div>
  );
}

export default FormularioContacto;