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
    <section id="portfolio" className="portfolio">
        <div className="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div className="galeria">
                <div className="proyecto">
                    <img src={aPP} alt=""/>
                    <div className="overlay">
                        <h3>App - Administrador de Pacientes</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src={landi} alt=""/>
                    <div className="overlay">
                        <h3>Landing Page</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src={chatbeat} alt=""/>
                    <div className="overlay">
                        <h3>ChatBeat</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src={ecommerce} alt=""/>
                    <div className="overlay">
                        <h3>Proyect-ecommerce</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src={actual} alt=""/>
                    <div class="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src={cotizador} alt=""/>
                    <div className="overlay">
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