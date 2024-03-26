import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RedSocial = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default RedSocial;