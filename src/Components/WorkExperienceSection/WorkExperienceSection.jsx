import React from 'react';
import './WorkExperienceSection.css'

import CurriculumItem from '../../Components/CurriculumItem/CurriculumItem';

const WorkExperienceSection = () => {
  return (
    <div className="col derecha">
      <h3>Experiencia de trabajo</h3>
      <CurriculumItem 
        title="Front Developer"
        institution="ClinchHR"
        date="2023 - 2024"
        description="Es una plataforma informativa diseñada para proporcionar a los clientes una visión completa de su empresa. Aquí, los visitantes encontrarán detalles exhaustivos sobre la empresa, sus servicios, productos, valores fundamentales y otros aspectos relevantes."
        alignRight={true} 
      />
       <CurriculumItem 
        title="Front Developer"
        institution="No Country"
        date="2024"
        description="ChatBeat es conectar a la gente a través de la música. Que la música sea un disparador para romper el hielo y conocerse más. Que las melodías y las letras sean también un mensaje, una invitación, una linda coincidencia."
        alignRight={true} 
      />
      <CurriculumItem 
        title="Fullstack Developer"
        institution="Freelance"
        date="2023"
        description="La motivación detrás de la construcción de la aplicación de administración de pacientes fue crear una herramienta eficiente y accesible para mejorar la gestión y atención de los pacientes en entornos médicos."
        alignRight={true}
      />
    </div>
  );
};

export default WorkExperienceSection;