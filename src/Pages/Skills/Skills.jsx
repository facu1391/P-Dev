import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section class="skills" id="skills">
        <div class="contenido-seccion">
            <h2>Skills</h2>
            <div class="fila">
                <div class="col">
                    <h3>Technical Skills</h3>
                    <div class="skill">
                        <span>Javascript</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>React.js</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Next.js</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Python</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>81%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>SQL</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h3>Professional Skills</h3>
                    <div class="skill">
                        <span>Comunicación</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Trabajo en Equipo</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Creatividad</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>99%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Dedicación</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Proyect Management</span>
                        <div class="barra-skill">
                            <div class="progreso">
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