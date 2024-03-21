import React from 'react';
import RedesSociales from '../../Components/RedesSociales/RedesSociales';

import './Inicio.css';
import hero from '../../assets/hero.png';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={hero} alt=""/>
        </div>
        <h1>Facundo Nuñez</h1>
        <h2>Dev Fullstack Web</h2>
        <RedesSociales />
      </div>
    </section>
  )
}

export default Inicio;