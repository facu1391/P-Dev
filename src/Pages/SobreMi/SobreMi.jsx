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
        <p>
          <span>Hola, soy Facundo Nuñez </span> 
          soy de La Rioja, Argentina.
          Tengo 2 años de experiencia como Desarrollador Web fullstack. Estoy especializado en el desarrollo de aplicaciones web únicas.
        </p>
        <p>
          Una de mis experiencias más significativas fue trabajar como freelancer para 
          la empresa ClichHr, donde colaboré con un equipo completo en el desarrollo y 
          lanzamiento de una landing page que actualmente está en funcionamiento. Este proyecto me 
          permitió aplicar mis habilidades como Desarrollador Web fullstack y obtener resultados tangibles para 
          nuestros clientes.
        </p>
        <p>
            En No Country, tuve el privilegio de formar parte de un equipo altamente 
            colaborativo y diverso. Trabajamos en el desarrollo de ChatBeat, una aplicación 
            que tenía como objetivo conectar a las personas a través de la música. Durante este tiempo, 
            contribuí en áreas como el desarrollo backend, frontend, diseño UI/UX, QA y gestión de proyectos. Esta 
            experiencia me brindó un amplio conocimiento y me permitió crecer tanto profesional como personalmente.
        </p>
        <p>
            Finalmente, otra experiencia destacada fue el desarrollo de una aplicación
            para administrar pacientes de veterinaria. Aunque fue un 
            desafío, me permitió profundizar en mis conocimientos técnicos. Esta experiencia personal 
            me enseñó valiosas lecciones y me ayudó a mejorar mis habilidades como desarrollador.
        </p>
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
  );
};

export default SobreMi;