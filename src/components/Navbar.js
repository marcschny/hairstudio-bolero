import React from 'react';
import { NavbarButton } from './NavbarButton';
import './Navbar.css';

function Navbar() {
  return (
      <>
      <nav className='navbar'>
            <ul>
                <li className='nav-item' onClick={() => document.getElementById('section-prices').scrollIntoView({behavior: "smooth"})} >
                    Preise
                </li>
                <li className='nav-item' onClick={() => document.getElementById('section-contact').scrollIntoView({behavior: "smooth"})} >
                    Kontakt
                </li>
            </ul>
      </nav>
      <nav className='navbar-mobile'>
        <NavbarButton text="Preise"  scrollTo="section-prices" />
        <NavbarButton text="Kontakt" scrollTo="section-contact" />
      </nav>
      </>
  );
}

export default Navbar;
