import React from 'react';
import './Footer.css';

//RI
import FacebookBoxFillIcon from 'remixicon-react/FacebookBoxFillIcon';

function Footer() {
  return (
    <footer className='footer-container'> 
        <a href="#" target='_blank'><FacebookBoxFillIcon className='fai-fb' /></a>
        <span className='copyrights'>&copy; Hair-Studio Bolero, 3930 Visp, All Rights Reserved</span>
    </footer>
  );
}

export default Footer;
