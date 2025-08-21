import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-column about">
          <a href="#" className="logo">
            <img src="/uploads/imgs/logo/logoSite4.png" alt="Lawify Logo" className="logo-img" />
          </a>
          <p>
            Com mais de duas décadas de experiência e dedicação, a Fazzio Madeiras e Ferragens é sua parceira ideal para navegar pelo mundo da marcenaria e dos projetos com madeira.
          </p>
          <p>Siga-nos!</p>
          <div className="social-links">
            <a href="https://www.facebook.com/fazzio.madeiras"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/fazziomadeiras/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/fazziomadeira/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-column links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#">Pagina Inicial</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">CorteCloud</a></li>
          </ul>
        </div>
        <div className="footer-column services">
          <h3>Nossos Serviços</h3>
          <ul>
            <li><a href="#">Corte de Chapas</a></li>
            <li><a href="#">Colação de Borda</a></li>
            <li><a href="#">Centro de Usinagem</a></li>
            <li><a href="#">Afiação de Serras e Facas</a></li>
            <li><a href="#">Sistema Tintométrico</a></li>
          </ul>
        </div>
        <div className="footer-column contact">
          <h3>Contato</h3>
          <ul>
            <li><i className="fas fa-phone-alt"></i>  (16) 3345-9100</li>
            <li><i className="fas fa-envelope"></i>  contato@fazziomadeiras.com.br</li>
            <li><i className="fas fa-map-marker-alt"></i>  Savéria D’Angelo Fazzio, 1752, Jd. Paulista - Dourado - SP</li>
          </ul>
        </div>
      </div>
      <div className='Ft-btm'>
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Fazzio Madeiras. Todos os direitos reservados.</p>
          <div className="privacy-policy-container">
            {/* A linha abaixo foi alterada */}
            <Link to="/Policy" className="privacy-policy">Política de Privacidade</Link>
          </div>
          <div className="dev-logo">
            <a href="https://www.gustavoevieira.me" target="_blank" rel="noopener noreferrer"><img src="/uploads/imgs/others/VyraOne-Logo-V.png" alt="Logo VyraOne" /></a>
          </div>
        </div>
      </div>
    </footer >
  );

};


export default Footer;