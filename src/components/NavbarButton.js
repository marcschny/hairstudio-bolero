import React from 'react';
import './NavbarButton.css';

export const NavbarButton = ({text, scrollTo}) => {

    return (
        <button className='navbar-button-mobile' onClick={() => document.getElementById(scrollTo).scrollIntoView({behavior: "smooth"})}>
            {text}
        </button>
    );
};