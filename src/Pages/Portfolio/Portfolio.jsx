import React from 'react';
import './Portfolio.css';

import aPP from '../../assets/P1.png';
import landi from '../../assets/P2.png';
import chatbeat from '../../assets/P3.png';
import ecommerce from '../../assets/P4.png';
import actual from '../../assets/p5.jpg';
import cotizador from '../../assets/P6.png';

const Portfolio = () => {
  return (
    <section id="portfolio" class="portfolio">
        <div class="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div class="galeria">
                <div class="proyecto">
                    <img src={aPP} alt=""/>
                    <div class="overlay">
                        <h3>App - Administrador de Pacientes</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div class="proyecto">
                    <img src={landi} alt=""/>
                    <div class="overlay">
                        <h3>Landing Page</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div class="proyecto">
                    <img src={chatbeat} alt=""/>
                    <div class="overlay">
                        <h3>ChatBeat</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div class="proyecto">
                    <img src={ecommerce} alt=""/>
                    <div class="overlay">
                        <h3>Proyect-ecommerce</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div class="proyecto">
                    <img src={actual} alt=""/>
                    <div class="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div class="proyecto">
                    <img src={cotizador} alt=""/>
                    <div class="overlay">
                        <h3>Cotizador-Prestamos</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio;