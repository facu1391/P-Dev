import React from 'react';
import './TechnicalSkills.css';
import SkillItem from '../../Components/SkillItem/SkillItem';

const TechnicalSkills = () => {
  return (
    <div className="col">
      <h3>Technical Skills</h3>
      <SkillItem name="Javascript" percentage={95} />
      <SkillItem name="React.js" percentage={95} />
      <SkillItem name="Next.js" percentage={90} />
      <SkillItem name="Python" percentage={81} />
      <SkillItem name="SQL" percentage={70} />
    </div>
  );
}

export default TechnicalSkills;