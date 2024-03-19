import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <a href="#inicio" className="arriba">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <div className="redes">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
    </footer>
  );
}

export default Footer;