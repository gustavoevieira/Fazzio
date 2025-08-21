import React from 'react';
import Lottie from 'lottie-react';
import whatsappAnimation from '../../../public/assets/lottie/whatsapp.json';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=5516997935919"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <Lottie 
        animationData={whatsappAnimation} 
        loop={true} 
        style={{ width: 200, height: 200 }} 
      />
    </a>
  );
};

export default WhatsAppButton;