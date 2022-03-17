import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <div className='section-contact' id='section-contact'>
          <div className='section-contact-tile'>
              <div className='section-title'>Kontakt</div>
              <div className='section-contact-wrapper'>
                  <div className='contact-info-column'>
                    <span className='contact-info-name'>Schnydrig Sabrina</span>
                    <span className='contact-info-tel'>027 946 53 73</span>
                  </div>
                  <div className='location-wrapper'>
                    <span className='location-adress'>Balfrinstrasse 11, 3930 Visp</span>
                    <div className='location-map'>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.8994072384658!2d7.8800779158040495!3d46.29197258584761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f6b1a8b0bb195%3A0xb7b11bf9c1eed2dd!2sHair-Studio%20Bolero%20BARBER%20SHOP!5e0!3m2!1sde!2sch!4v1643751593311!5m2!1sde!2sch" 
                        title="iframe-location"
                        width="100%" 
                        height="100%" 
                        style={{ border: '0'}}
                        allowFullScreen=""
                        loading="lazy">
                      </iframe>
                    </div>
                  </div>
              </div>
          </div>
        <div className='section-contact-image-tile'></div>
    </div>
  );
}

export default ContactSection;
