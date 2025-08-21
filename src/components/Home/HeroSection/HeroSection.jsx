import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,    
  });

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const tagVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textButtonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <section className="hero-section" ref={ref}>
      <div className="container hero-content">
        <div className="hero-text">
          <motion.p
            className="welcome-text"
            variants={tagVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Bem vinda à Fazzio
          </motion.p>
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Tudo para o seu móvel e marcenaria
          </motion.h1>
          <motion.p
            className="hero-description"
            variants={textButtonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Com mais de duas décadas de experiência e dedicação, a Fazzio é a sua
            parceira ideal em madeiras e ferragens. Contamos com um moderno centro de serviços automatizados
            para garantir a mais alta qualidade em cortes, usinagem e furação, atendendo às necessidades do
            profissional de marcenaria com excelência.
          </motion.p>
          <motion.div
            className="hero-buttons"
            variants={textButtonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <a href="#" className="btn btn-main btn-wood">
              Faça um Orçamento <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <a href="#" className="btn btn-secondary btn-wood">
              Explore nossos serviços <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mascote-1"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <img src="/uploads/imgs/mascote/mascote1b.png" alt="Mascote Fazzio" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;