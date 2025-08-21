import React from 'react';
import './TopBar.css';

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="contact-info">
          <span><i className="fas fa-phone-alt"></i> (16) 3345-9100</span>
          <span><i className="fas fa-envelope"></i> contato@fazziomadeiras.com.br</span>
          <span><i className="fas fa-map-marker-alt"></i> Savéria D’Angelo Fazzio, 1752 - Dourado-SP</span>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/fazzio.madeiras"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/fazziomadeiras/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/fazziomadeira/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;