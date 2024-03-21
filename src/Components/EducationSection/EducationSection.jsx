import React from 'react';
import './EducationSection.css';

import CurriculumItem from '../../Components/CurriculumItem/CurriculumItem';

const EducationSection = () => {
  return (
    <div className="col izquierda">
      <h3>Educación</h3>
      <CurriculumItem 
        title="Ciencias Sociales"
        institution="Colegio Provincial Anjullon"
        date="2004 - 2009"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit..."
        alignRight={false} // Alinea el conector y el círculo a la izquierda
      />
      <CurriculumItem 
        title="Lic en Informatica"
        institution="Universidad Nacional de La Rioja"
        date="2023"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit..."
        alignRight={false} // Alinea el conector y el círculo a la izquierda
      />
      <CurriculumItem 
        title="Tecnicatura Desarrollo Software"
        institution="Agencia de Aprendizaje a lo largo de vida"
        date="2024"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit..."
        alignRight={false} // Alinea el conector y el círculo a la izquierda
      />
    </div>
  );
};

export default EducationSection;