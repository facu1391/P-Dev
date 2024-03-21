import React from 'react'
import './Skills.css'

import TechnicalSkills from '../../Components/TechnicalSkills/TechnicalSkills';
import ProfessionalSkills from '../../Components/ProfessionalSkills/ProfessionalSkills'

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
          <TechnicalSkills />
          <ProfessionalSkills />
        </div>
      </div>
    </section>
  )
}

export default Skills;