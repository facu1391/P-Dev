import React from 'react';
import './RedesSociales.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const RedesSociales = () => {
  return (
    <div className="redes">
      <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
    </div>
  );
};

export default RedesSociales;