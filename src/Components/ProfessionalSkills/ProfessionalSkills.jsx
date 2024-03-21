import React from 'react';
import './ProfessionalSkills.css'
import SkillItem from '../../Components/SkillItem/SkillItem';

const ProfessionalSkills = () => {
  return (
    <div className="col">
      <h3>Professional Skills</h3>
      <SkillItem name="Comunicación" percentage={80} />
      <SkillItem name="Trabajo en Equipo" percentage={70} />
      <SkillItem name="Creatividad" percentage={99} />
      <SkillItem name="Dedicación" percentage={80} />
      <SkillItem name="Project Management" percentage={94} />
    </div>
  );
}

export default ProfessionalSkills;