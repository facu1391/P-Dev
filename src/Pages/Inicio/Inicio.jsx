import React from 'react';
import './Inicio.css';
import hero from '../../assets/hero.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Inicio = () => {
  return (
    <section id="inicio" class="inicio">
        <div class="contenido-banner">
            <div class="contenedor-img">
                <img src={hero} alt=""/>
            </div>
            <h1>Facundo Nuñez</h1>
            <h2>Dev Fullstack Web </h2>
            <div class="redes">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div>
    </section>
  )
}

export default Inicio;