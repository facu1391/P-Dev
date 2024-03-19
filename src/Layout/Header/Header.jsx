import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Facundo</a>
        </div>
        <nav id="nav">
          <ul>
            <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
            <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
            <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
            <li><a href="#curriculum" onClick={seleccionar}>CURRICULUM</a></li>
            <li><a href="#portfolio" onClick={seleccionar}>PORTFOLIO</a></li>
            <li><a href="#contacto" onClick={seleccionar}>CONTACTO</a></li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
}

function seleccionar() {
 
}

function mostrarOcultarMenu() {
 
}

export default Header;