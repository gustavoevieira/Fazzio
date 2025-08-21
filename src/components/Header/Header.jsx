// src/components/Header/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe useLocation
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Obtenha a localização atual
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* ... Top Bar ... */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <Link to="/" className="logo">
            <img src="/uploads/imgs/logo/logoSite4.png" alt="Fazzio Logo" className="logo-img" />
          </Link>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Pagina Inicial
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className={location.pathname === '/sobre' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className={location.pathname.startsWith('/produtos') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className={location.pathname.startsWith('/servicos') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/cortecloud"
                  className={location.pathname === '/cortecloud' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  CorteCloud
                </Link>
              </li>
              <li>
                <Link
                  to="/problue"
                  className={location.pathname === '/problue' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Problue
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className={location.pathname === '/contato' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Contato
                </Link>
              </li>

            </ul>
          </nav>
          <div className="header-actions"></div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;