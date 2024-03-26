import React from 'react';
import { Element } from 'react-scroll';
import RedesSociales from '../../Components/RedesSociales/RedesSociales';

import './Inicio.css';
import hero from '../../assets/hero.png';

const Inicio = () => {
  return (
    <Element name="inicio" className="inicio">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={hero} alt=""/>
        </div>
        <h1>Facundo Nuñez</h1>
        <h2>Dev Fullstack Web</h2>
        <RedesSociales />
      </div>
    </Element>
  )
}

export default Inicio;