import React from 'react';
import './Footer.css';

//RI
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';

function Footer() {
  return (
    <footer className='footer-container'> 
        <a href="https://www.instagram.com/hair_studio_bolero/" target='_blank' rel='noopener noreferrer'><InstagramLineIcon className='fai-insta' /></a>
        <span className='copyrights'>Hair-Studio Bolero, 3930 Visp</span>
    </footer>
  );
}

export default Footer;
