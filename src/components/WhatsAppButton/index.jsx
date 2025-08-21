import React from 'react';
import Lottie from 'lottie-react';
import './WhatsAppButton.css';
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/lottie/WhatsApp.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  if (!animationData) return null;

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5516997935919"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <Lottie animationData={animationData} loop style={{ width: 200, height: 200 }} />
    </a>
  );
};

export default WhatsAppButton;
