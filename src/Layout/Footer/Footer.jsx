import React from 'react';
import AnglesIcons from '../../Components/AnglesIcons/AnglesIcons';
import RedesSociales from '../../Components/RedesSociales/RedesSociales';

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#inicio" className="arriba">
        <AnglesIcons />
      </a>
      <RedesSociales />
    </footer>
  );
}

export default Footer;