// src/pages/SobrePage/index.jsx

import React from 'react';
import './SobrePage.css';

// Dados da Linha do Tempo
const timelineEvents = [
  {
    year: '1996',
    title: 'Fundação da Fazzio Madeiras',
    description: 'Início das atividades em Dourado-SP, fornecendo produtos básicos para marcenaria, como colas, laminados e compensados.'
  },
  {
    year: '2005',
    title: 'Expansão e Modernização',
    description: 'Abertura de nova sede com 6 mil m² e aquisição de frota própria, expandindo a área de atuação para cidades como Ribeirão Preto e Araraquara.'
  },
  {
    year: '2015',
    title: 'Adesão à Rede Pró',
    description: 'Parceria com a Rede Pró, uma das maiores redes de revendas do Brasil, para oferecer melhores preços e um mix de produtos ainda maior.'
  },
  {
    year: '2020',
    title: 'Centro de Serviços Automatizados',
    description: 'Implantação de um moderno centro com máquinas CNC para corte, usinagem e furação, garantindo alta precisão para os clientes.'
  },
  {
    year: 'Hoje',
    title: 'Inovação e Crescimento',
    description: 'Lançamento de novas soluções, como o sistema tintométrico e a nova loja no estilo minimalista, para melhor atender arquitetos, marceneiros e consumidores.'
  }
];

const SobrePage = () => {
  return (
    <>
      <main className="sobre-page">
        {/* Seção Sobre Nós (reaproveitada do seu AboutSection) */}
        <section className="about-us-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <p className="section-tag">Nossa História</p>
                <h2>Conheça a Fazzio</h2>
                <p>
                  Fundada em 28 de junho de 1996, a Fazzio Madeiras, iniciou suas atividades fornecendo produtos como colas, laminados, compensados e sarrafeados para profissionais de marcenaria, com sua sede instalada na cidade de Dourado, centro geográfico do estado de São Paulo.
                </p>
                <p>
                  Atualmente possui uma estrutura com mais de 6 mil metros quadrados de área construída. Com uma frota própria, a Fazzio atende uma região num raio aproximado de 150km de sua matriz, entregando nas principais cidades do centro do estado, como, Ribeirão Preto, Bauru, Araraquara, São Carlos, Jaú entre outras.
                </p>
              </div>
              <div className="about-image">
                <img src="/uploads/imgs/logo/banner-1-400x284.jpg" alt="Sede da Fazzio Madeiras" />
              </div>
            </div>
            <p className="about-paragraph-2">
              A Fazzio, faz parte de uma das maiores redes nacionais de revendas de materiais para fabricação de móveis, a Rede Pró. Com essa parceria a Fazzio proporciona aos clientes melhores preços, melhores produtos, campanhas, treinamentos, mix de produtos.
            </p>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illum sapiente dolore quis tempore porro maiores eveniet error magni dolores a rerum possimus odit, recusandae qui obcaecati ipsa veniam autem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo amet nihil harum similique maxime adipisci soluta atque voluptatum excepturi deleniti debitis et, ducimus nostrum, accusantium quisquam ratione, minima aut?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt officia eligendi velit. Ullam libero, minus earum voluptate ipsam blanditiis tempora. Corrupti voluptatibus architecto, quaerat quisquam vero ratione ipsum iste.</p>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a quam, nam, iste nobis reiciendis reprehenderit fugit exercitationem tempora rerum ratione. Labore, rerum corporis! Enim placeat consectetur ex impedit laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo tempora eaque ipsum, doloremque quidem. Non harum voluptate ad ratione minima explicabo tenetur, deleniti repellat laborum distinctio dolores ipsum quisquam!</p>
          </div>
        </section>

        {/* Seção de Fotos */}
        <section className="photo-gallery-section">
          <div className="container">
            <h2>Nossa Equipe e Estrutura</h2>
            <div className="photo-grid">
              <div>
                Vendas
                <img src="/uploads/imgs/others/3839737.png" alt="Foto da equipe 1" />
              </div>
              <div>
                Financeiro
                <img src="/uploads/imgs/others/3839737.png" alt="Foto da equipe 2" />
              </div>
              <div>
                Operacional
                <img src="/uploads/imgs/others/3839737.png" alt="Foto da estrutura 1" />
              </div>
              <div>
                Fazzio
                <img src="/uploads/imgs/others/3839737.png" alt="Foto da estrutura 2" />
              </div>
            </div>
          </div>
        </section>

        {/* Seção da Linha do Tempo */}
        <section className="timeline-section">
          <div className="container">
            <h2>Nossa Trajetória</h2>
            <div className="timeline-grid">
              {timelineEvents.map((event, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-year">{event.year}</div>
                  <div className="timeline-content">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SobrePage;