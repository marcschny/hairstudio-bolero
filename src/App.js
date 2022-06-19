import './App.css';
import Footer from './components/Footer';
import ContactSection from './components/sections/ContactSection';
import HeroSection from './components/sections/HeroSection';
import PricesSection from './components/sections/PricesSection';
import React from 'react';

function App() {
  
  return (
    <>
      <HeroSection />
      <PricesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
