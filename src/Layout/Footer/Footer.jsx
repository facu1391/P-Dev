import React from 'react';
import { Link } from 'react-scroll';
import AnglesIcons from '../../Components/AnglesIcons/AnglesIcons';
import RedesSociales from '../../Components/RedesSociales/RedesSociales';

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Link to="inicio" className="arriba">
        <AnglesIcons />
      </Link>
      <RedesSociales />
    </footer>
  );
}

export default Footer;