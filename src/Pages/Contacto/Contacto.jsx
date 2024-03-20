import React from 'react';
import './Contacto.css';

import ubicacion from '../../assets/ubicacion.png'

const Contacto = () => {
  return (
    <section id="contacto" class="contacto">
        <div class="contenido-seccion">
            <h2>CONTACTO</h2>
            <div class="fila">
                <div class="col">
                    <input type="text" placeholder="Tú Nombre"/>
                    <input type="text" placeholder="Número telefónico"/>
                    <input type="text" placeholder="Dirección de correo"/>
                    <input type="text" placeholder="Tema"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button>
                        Enviar Mensaje<i class="fa-solid fa-paper-plane"></i>
                        <span class="overlay"></span>
                    </button>
                </div>
                <div class="col">
                    <img src={ubicacion} alt=""/>
                    <div class="info">
                        <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                San Roman 1546, La Rioja
                            </li>
                            <li>
                                <i class="fa-solid fa-mobile-screen"></i>
                                Llamame: 3804 - 249741 
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
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

export default Contacto