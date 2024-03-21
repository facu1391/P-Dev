import React from 'react';
import './CurriculumItem.css'; 


const CurriculumItem = ({ title, institution, date, description, alignRight }) => {
  return (
    <div className="item">
      <h4>{title}</h4>
      <span className="casa">{institution}</span>
      <span className="fecha">{date}</span>
      <p>{description}</p>
      <div className={alignRight ? "conectord" : "conectori"}>
        <div className={alignRight ? "circulod" : "circuloi"}></div> 
      </div>
    </div>
  );
};

export default CurriculumItem;