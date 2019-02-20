import React from 'react';
import { CityLogo } from '../utils/icons';

const Footer = () => {
  return (
    <footer className='footer bck_blue'>
      <div className='footer_logo'>
        <CityLogo link={true} linkTo='/' width='70px' height='70px' />
      </div>
      <div className='footer_discl'>The Manchester city 2019. All rights reserved.</div>
    </footer>
  );
};
export default Footer;
