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
        description="Durante mis años en el Colegio Provincial Anjullon, tuve la oportunidad de sumergirme en el estudio de las ciencias sociales mientras participaba activamente en una variedad de actividades extracurriculares. Mi tiempo en el colegio me proporcionó una educación sólida"
        alignRight={false} 
      />
      <CurriculumItem 
        title="Lic en Informatica"
        institution="Universidad Nacional de La Rioja"
        date="2023"
        description="Mi experiencia en la universidad hasta ahora ha sido emocionante y desafiante, y estoy ansioso por seguir aprendiendo y creciendo en el campo de la informática. He participado en proyectos prácticos que han fortalecido mis habilidades técnicas."
        alignRight={false} 
      />
      <CurriculumItem 
        title="Tecnicatura Desarrollo Software"
        institution="Agencia de Aprendizaje a lo largo de vida"
        date="2024"
        description="Este programa representa un nuevo capítulo emocionante en mi carrera educativa, y estoy entusiasmado por sumergirme en el mundo del desarrollo de software. Espero adquirir nuevas habilidades técnicas."
        alignRight={false} 
      />
    </div>
  );
};

export default EducationSection;