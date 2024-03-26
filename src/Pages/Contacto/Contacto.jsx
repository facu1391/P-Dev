import React from 'react';
import { Element } from 'react-scroll';
import './Contacto.css';

import FormularioContacto from '../../Components/FormularioContacto/FormularioContacto';
import InformacionContacto from '../../Components/InformacionContacto/InformacionContacto';

const Contacto = () => {
  return (
    <Element name="contacto" className="contacto">
        <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
            <FormularioContacto />
            <InformacionContacto />
        </div>
        </div>
   </Element>
  )
}

export default Contacto;