import React from 'react';
import { Element } from 'react-scroll';
import './Curriculum.css';

import EducationSection from '../../Components/EducationSection/EducationSection';
import WorkExperienceSection from '../../Components/WorkExperienceSection/WorkExperienceSection';

const Curriculum = () => {
  return (
    <Element name="curriculum" className="curriculum">
        <div className="contenido-seccion">
        <h2>Curriculum</h2>
        <div className="fila">
            <EducationSection />
            <WorkExperienceSection />
        </div>
        </div>
    </Element>
  )
}

export default Curriculum;