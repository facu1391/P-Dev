import React from 'react';
import './Contacto.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ubicacion from '../../assets/ubicacion.png';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
        <div className="contenido-seccion">
            <h2>CONTACTO</h2>
            <div className="fila">
                <div className="col">
                    <input type="text" placeholder="Tú Nombre"/>
                    <input type="text" placeholder="Número telefónico"/>
                    <input type="text" placeholder="Dirección de correo"/>
                    <input type="text" placeholder="Tema"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button>
                        Enviar Mensaje<FontAwesomeIcon icon={faPaperPlane} />
                        <span className="overlay"></span>
                    </button>
                </div>
                <div className="col">
                    <img src={ubicacion} alt=""/>
                    <div className="info">
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} />
                                San Roman 1546, La Rioja
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMobileScreen} />
                                Llamame: 3804 - 249741 
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                Email: facurael@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto;