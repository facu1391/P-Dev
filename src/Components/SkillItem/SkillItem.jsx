import React from 'react';
import './SkillItem.css';

const SkillItem = ({ name, percentage }) => {
  return (
    <div className="skill">
      <span>{name}</span>
      <div className="barra-skill">
        <div className="progreso" style={{ width: `${percentage}%` }}>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;