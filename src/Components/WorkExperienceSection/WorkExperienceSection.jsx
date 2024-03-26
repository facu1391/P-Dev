import React from 'react';
import './WorkExperienceSection.css'

import CurriculumItem from '../../Components/CurriculumItem/CurriculumItem';

const WorkExperienceSection = () => {
  return (
    <div className="col derecha">
      <h3>Experiencia de trabajo</h3>
      <CurriculumItem 
        title="Fullstack Developer"
        institution="Freelance"
        date="2023"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit..."
        alignRight={true}
      />
      <CurriculumItem 
        title="Front Developer"
        institution="ClinchHR"
        date="2023 - 2024"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit..."
        alignRight={true} 
      />
      <CurriculumItem 
        title="Front Developer"
        institution="No Country"
        date="2024"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit..."
        alignRight={true} 
      />
      
    </div>
  );
};

export default WorkExperienceSection;