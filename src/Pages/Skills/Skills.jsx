import React from 'react'
import { Element } from 'react-scroll';
import './Skills.css'

import TechnicalSkills from '../../Components/TechnicalSkills/TechnicalSkills';
import ProfessionalSkills from '../../Components/ProfessionalSkills/ProfessionalSkills'

const Skills = () => {
  return (
    <Element className="skills" name="skills">
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
          <TechnicalSkills />
          <ProfessionalSkills />
        </div>
      </div>
    </Element>
  )
}

export default Skills;