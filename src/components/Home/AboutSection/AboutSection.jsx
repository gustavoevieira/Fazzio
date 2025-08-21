import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="about-section"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="about-us">
          <div className="about-text">
            <p className="section-tag">Conheça a Fazzio</p>
            <div className="bar"></div>
            <p className='about-text-1'>Fundada em 28 de junho de 1996, a Fazzio Madeiras, iniciou suas atividades fornecendo
              produtos como colas, laminados, compensados e sarrafeados para profissionais de marcenaria,
              com sua sede instalada na cidade de Dourado, centro geográfico do estado de São Paulo.
              Atualmente possui uma estrutura com mais de 6 mil metros quadrados de área construída. Com
              uma frota própria, a Fazzio atende uma região num raio aproximado de 150km de sua matriz,
              entregando nas principais cidades do centro do estado, como, Ribeirão Preto, Bauru,
              Araraquara, São Carlos, Jaú entre outras. Além de tudo isso, a Fazzio possui um dos mais
              modernos centros de serviços automatizados, oferecendo com altíssima qualidade os serviços
              de corte, colação, usinagem e furação, além de afiações de serras e facas para o
              profissional da marcenaria.</p>
          </div>
          <div className="about-image">
            <img src="uploads/imgs/others/sobreOK.png" alt="Sobre" />
          </div>
        </div>
        <div className="about-text-2">
          <p>A Fazzio, faz parte de uma das maiores redes nacionais de revendas de materiais para
            fabricação de móveis, a Rede Pró. Com essa parceria a Fazzio proporciona aos clientes melhores
            preços, melhores produtos, campanhas, treinamentos, mix de produtos. A Fazzio conta com uma
            infraestrutura de atendimento e de televendas, operando de forma integrada a um sistema central
            de controle de estoque e emissão de pedidos. Isso tudo com uma variada linha de produtos para
            atender sua demanda de mercado, a Fazzio conta com mais de 6 mil itens a pronta entrega,
            incluindo mais de 300 padrões de MDF dos principais fornecedores do mercado. Atendimento
            personalizado, inovação, qualidade, são alguns dos diferenciais e em breve para um melhor
            atendimento aos clientes, está sendo construída uma loja totalmente reformulada com mais de
            500m2 no estilo minimalista, onde arquitetos, marceneiros, consumidores, serão muito bem-vindos.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;