import React from 'react';
import './Curriculum.css';

const Curriculum = () => {
  return (
    <section id="curriculum" className="curriculum">
        <div className="contenido-seccion">
            <h2>Curriculum</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Educación</h3>
                    <div className="item izq">
                        <h4>Ciencias Sociales</h4>
                        <span className="casa">Colegio Provincial Anjullon</span>
                        <span className="fecha">2004 - 2009</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>Lic en Informatica</h4>
                        <span className="casa">Universidad Nacional de La Rioja</span>
                        <span className="fecha">2023</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>Tecnicatura Desarrollo Software</h4>
                        <span className="casa">Agencia de Aprendizaje a lo largo de vida</span>
                        <span className="fecha">2024  - </span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                </div>

                <div className="col derecha">
                    <h3>Experiencia de trabajo</h3>
                    <div className="item der">
                        <h4>Fullstack Developer</h4>
                        <span className="casa">Freelance</span>
                        <span className="fecha">2023</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Front Developer</h4>
                        <span className="casa">ClinchHR</span>
                        <span className="fecha">2023 - 2024</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Front Developer</h4>
                        <span className="casa">No Country</span>
                        <span className="fecha">2024 - 2024</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Curriculum;