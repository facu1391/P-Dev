import React from 'react';
import { Link } from 'react-scroll';

import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
        <Link to="inicio" smooth={true} offset={-70} duration={100}>Facundo</Link>
        </div>
        <nav id="nav">
          <ul>
          <li><Link to="inicio" smooth={true} offset={-70} duration={100}>INICIO</Link></li>
            <li><Link to="sobremi" smooth={true} offset={-70} duration={100}>SOBRE MI</Link></li>
            <li><Link to="skills" smooth={true} offset={-70} duration={100}>SKILLS</Link></li>
            <li><Link to="curriculum" smooth={true} offset={-70} duration={100}>CURRICULUM</Link></li>
            <li><Link to="portfolio" smooth={true} offset={-70} duration={100}>PORTFOLIO</Link></li>
            <li><Link to="contacto" smooth={true} offset={-70} duration={100}>CONTACTO</Link></li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
}

function mostrarOcultarMenu() {

}

export default Header;