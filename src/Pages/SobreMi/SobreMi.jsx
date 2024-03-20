import React from 'react'
import './SobreMi.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHeadphones, faPlane, faPersonHiking, faBook, faCar, faDownload } from '@fortawesome/free-solid-svg-icons';

const SobreMi = () => {
  return (
    <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p><span>Hola, soy Facundo Nuñez.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde soluta minima necessitatibus, voluptas consectetur vero officiis quas, explicabo deleniti repellendus aliquid debitis maiores numquam voluptate reprehenderit in delectus dolores.</p>
            <div className="fila">
                <div className="col">
                    <h3>Datos Personales</h3>
                    <ul>
                        <li>
                            <strong>Cumpleaños</strong>
                            13-10-1991
                        </li>
                        <li>
                            <strong>Teléfono</strong>
                            3804249741
                        </li>
                        <li>
                            <strong>Email</strong>
                            facurael@gmail.com
                        </li>
                        <li>
                            <strong>Dirección</strong>
                            1546 La Rioja, Argentina
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <span>FREELANCE</span>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Intereses</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <FontAwesomeIcon icon={faGamepad} />  
                            <span>JUEGOS</span>
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faHeadphones} />
                            <span>MUSICA</span>
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>VIAJAR</span>
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faPersonHiking} />
                            <span>DEPORTE</span>
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faBook} />
                            <span>LIBROS</span>
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faCar} />
                            <span>AUTOS</span>
                        </div>
                    </div>
                </div>
            </div>
            <button>
                Descargar CV <FontAwesomeIcon icon={faDownload} />
                <span className="overlay"></span>
            </button>
        </div>
    </section>
  )
}

export default SobreMi;