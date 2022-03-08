import React from 'react';
import Navbar from '../Navbar';
import OpeningHours from '../OpeningHours';
import './HeroSection.css';


function HeroSection() {


  return (
      <div className='hero-container'>
        <div className='hero-container-overlay'>
          <div className='hero-container-title'>
            Hair-studio <br/>
            Bolero
          </div>
          <Navbar />
          <OpeningHours />
        </div>
      </div>
  );
}

export default HeroSection;
