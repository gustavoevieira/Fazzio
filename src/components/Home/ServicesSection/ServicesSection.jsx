// src/components/Home/ServicesSection/ServicesSection.jsx

import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    image: 'uploads/imgs/services/hand-saw.png',
    alt: 'Corte de Chapas',
    title: 'Corte de Chapas',
    description: 'Cortes de chapas com alta precisão e agilidade em equipamentos de última geração.',
    url: '#',
    icon: '/uploads/imgs/services/hand-saw.png',
    type: 'upload' // Imagem de upload
  },
  {
    image: 'uploads/imgs/services/colacao.png',
    alt: 'Colação de Borda',
    title: 'Colação de Borda',
    description: 'Serviço de colação de borda com máquina automática que agrega qualidade ao móvel.',
    url: '#',
    icon: 'fa-solid fa-tape',
    type: 'fontawesome' // Ícone do Font Awesome
  },
  {
    image: '/uploads/imgs/services/milling-machine.png',
    alt: 'Centro de Usinagem',
    title: 'Centro de Usinagem',
    description: 'Centro de usinagem CNC de alta tecnologia para cortes, furos e canais em chapas de MDF.',
    url: '#',
    icon: '/uploads/imgs/services/milling-machine.png',
    type: 'upload' // Imagem de upload
  },
  {
    image: '/uploads/imgs/services/knife.png',
    alt: 'Afiação de  Facas',
    title: 'Afiação de Facas',
    description: 'Serviço de afiação de discos de serra e facas com máquinas CNC de alta precisão.',
    url: '#',
    icon: '/uploads/imgs/services/knife.png',
    type: 'upload' 
  },
  {
      image: '/uploads/imgs/services/chainsaw.png',
      alt: 'Afiação de Serras ',
      title: 'Afiação de Serras ',
      description: 'Serviço de afiação de discos de serra e facas com máquinas CNC de alta precisão.',
      url: '#',
      icon: '/uploads/imgs/services/chainsaw.png',
      type: 'upload' // Imagem de upload
    },
    {
      image: '/uploads/imgs/services/can.png',
      alt: 'Afiação de Serras e Facas',
      title: 'Sistema Sayerlack',
      description: 'Serviço de afiação de discos de serra e facas com máquinas CNC de alta precisão.',
      url: '#',
      icon: '/uploads/imgs/services/can.png',
      type: 'upload' // Imagem de upload
    },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about-services-section" ref={ref}>
      <div className="container">
        <p className="section-tag">Serviços</p>
        <div className="bar"></div>
        <div className="services-main-layout">
          
          {/* Coluna da Esquerda (Imagem) */}
          <div className="services-image-container">
            <p>Na Fazzio, nosso objetivo é ser o seu parceiro na marcenaria. Com um moderno centro de serviços, agilizamos seu trabalho do início ao fim. Desde o corte preciso das chapas até o acabamento de alta qualidade, garantimos que suas peças cheguem prontas para a montagem. <br />     
<strong> Mais agilidade, menos trabalho. Seu projeto, nossa paixão.</strong></p>
            <img src="/uploads/imgs/mascote/mascotec1.png" alt="Serviços Fazzio" className="services-main-image" />
          </div>

          {/* Coluna da Direita (Grid de Serviços) */}
          <div className="services-grid-container">
            <h2>Nossos Serviços</h2>
            <div className="services-grid">
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card-top-content">
                    <div className="service-icon-wrapper">
                      {service.type === 'fontawesome' ? (
                        <i className={`fas ${service.icon}`}></i>
                      ) : (
                        <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
                      )}
                    </div>
                    <a href={service.url} className="btn-details">Ver Detalhes</a>
                  </div>
                  <h3>{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;