import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">
                <div className="col">
                    <h3>Technical Skills</h3>
                    <div className="skill">
                        <span>Javascript</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>React.js</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Next.js</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Python</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>81%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>SQL</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>Professional Skills</h3>
                    <div className="skill">
                        <span>Comunicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Trabajo en Equipo</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Creatividad</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>99%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Dedicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Proyect Management</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>94%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;