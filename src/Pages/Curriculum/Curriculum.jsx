import React from 'react';
import './Curriculum.css';

const Curriculum = () => {
  return (
    <section id="curriculum" class="curriculum">
        <div class="contenido-seccion">
            <h2>Curriculum</h2>
            <div class="fila">
                <div class="col izquierda">
                    <h3>Educación</h3>
                    <div class="item izq">
                        <h4>Ciencias Sociales</h4>
                        <span class="casa">Colegio Provincial Anjullon</span>
                        <span class="fecha">2004 - 2009</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>
                    </div>
                    <div class="item izq">
                        <h4>Lic en Informatica</h4>
                        <span class="casa">Universidad Nacional de La Rioja</span>
                        <span class="fecha">2023</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>
                    </div>
                    <div class="item izq">
                        <h4>Tecnicatura Desarrollo Software</h4>
                        <span class="casa">Agencia de Aprendizaje a lo largo de vida</span>
                        <span class="fecha">2024  - </span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>
                    </div>
                </div>

                <div class="col derecha">
                    <h3>Experiencia de trabajo</h3>
                    <div class="item der">
                        <h4>Fullstack Developer</h4>
                        <span class="casa">Freelance</span>
                        <span class="fecha">2023</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                    <div class="item der">
                        <h4>Front Developer</h4>
                        <span class="casa">ClinchHR</span>
                        <span class="fecha">2023 - 2024</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                    <div class="item der">
                        <h4>Front Developer</h4>
                        <span class="casa">No Country</span>
                        <span class="fecha">2024 - 2024</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Curriculum;