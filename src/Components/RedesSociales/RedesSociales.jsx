import React from 'react';
import './RedesSociales.css';
import RedSocial from '../RedSocial/RedSocial';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const RedesSociales = () => {
  return (
    <div className="redes">
      <RedSocial link={import.meta.env.VITE_FACEBOOK_URL} icon={faFacebookF} />
      <RedSocial link={import.meta.env.VITE_TWITTER_URL} icon={faTwitter} />
      <RedSocial link={import.meta.env.VITE_GITHUB_URL} icon={faGithub} />
      <RedSocial link={import.meta.env.VITE_LINKEDIN_URL} icon={faLinkedinIn} />
    </div>
  );
};

export default RedesSociales;