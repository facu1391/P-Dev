import React from 'react';
import { Element } from 'react-scroll';
import './SobreMi.css';

import DatosPersonales from '../../Components/DatosPersonales/DatosPersonales';
import Intereses from '../../Components/Intereses/Intereses';
import DescargarCV from '../../Components/DescargarCV/DescargarCV';

const SobreMi = () => {
  return (
    <Element name="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p><span>Hola, soy Facundo Nuñez.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde soluta minima necessitatibus, voluptas consectetur vero officiis quas, explicabo deleniti repellendus aliquid debitis maiores numquam voluptate reprehenderit in delectus dolores.</p>
        <div className="fila">
          <div className="col">
            <DatosPersonales />
          </div>
          <div className="col">
            <Intereses />
          </div>
        </div>
        <DescargarCV />
      </div>
    </Element>
  )
}

export default SobreMi;