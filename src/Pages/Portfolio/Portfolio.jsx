import React from 'react';
import { Element } from 'react-scroll';
import Proyecto from '../../Components/Proyecto/Proyecto';
import './Portfolio.css';

import aPP from '../../assets/P1.png';
import landi from '../../assets/P2.png';
import chatbeat from '../../assets/P3.png';
import ecommerce from '../../assets/P4.png';
import actual from '../../assets/p5.jpg';
import cotizador from '../../assets/P6.png';

const proyectos = [
  { imagen: aPP, titulo: 'App - Administrador de Pacientes', categoria: 'Fotografía' },
  { imagen: landi, titulo: 'Landing Page', categoria: 'Fotografía' },
  { imagen: chatbeat, titulo: 'ChatBeat', categoria: 'Fotografía' },
  { imagen: ecommerce, titulo: 'Proyect-ecommerce', categoria: 'Fotografía' },
  { imagen: actual, titulo: 'Diseño Creativo', categoria: 'Fotografía' },
  { imagen: cotizador, titulo: 'Cotizador-Prestamos', categoria: 'Fotografía' }
];

const Portfolio = () => {
  return (
    <Element name="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>PORTFOLIO</h2>
        <div className="galeria">
          {proyectos.map((proyecto, index) => (
            <Proyecto key={index} {...proyecto} />
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Portfolio;