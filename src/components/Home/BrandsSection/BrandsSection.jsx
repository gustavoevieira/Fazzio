import React from "react";
import Marquee from "react-fast-marquee";
import './Brands.css';

const BrandsSection = () => {
  const brandLogos = [
    {
      src: "https://iemi.com.br/wp-content/uploads/2022/10/logo-arauco-1.png",
      alt: "Logo Arauco",
      url: "https://www.arauco.com.br"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/REHAU_Logo_sRGB_01.svg/1280px-REHAU_Logo_sRGB_01.svg.png",
      alt: "Logo REHAU",
      url: "https://www.rehau.com/br-pt"
    },
    {
      src: "https://www.fibraplac.com.br/application/modules/comum/assets/svg/logo-green.svg",
      alt: "Logo Fibraplac",
      url: "https://www.fibraplac.com.br/"
    },
    {
      src: "https://www.guararapes.com.br/images/logo-negativa.svg", 
      alt: "Logo Guararapes",
      url: "https://www.guararapes.com.br/"
    },
    {
      src: "https://boschferramentasbrasil.vtexassets.com/assets/vtex/assets-builder/boschferramentasbrasil.builderio/3.1.22/bosch-logo___45217532b601d7f2eb3a38c6b5050898.svg",
      alt: "Logo Bosch",
      url: "https://www.bosch.com.br/"
    },
    {
      src: "https://baldan.ind.br/assets/core/publica/imagens/logo.png",
      alt: "Logo Baldan",
      url: "https://baldan.ind.br/"
    },
    {
      src: "https://www.lojaduratex.com.br/s/sfsites/c/cms/delivery/media/MC4WHXY5MU4ZG2JCPYUYLAIU3RAY",
      alt: "Logo Duratex",
      url: "https://www.duratexmadeira.com.br/"
    },
    {
      src: "https://www.fgvtn.com.br/imagens/logo.svg?v=2",
      alt: "Logo FGV",
      url: "https://www.fgvtn.com.br/"
    },
    {
      src: "https://www.eucatex.com.br/planetaeucatex/img/logo-eucatex.png",
      alt: "Logo Eucatex",
      url: "https://www.eucatex.com.br/"
    },
    {
      src: "https://1000logos.net/wp-content/uploads/2017/12/Makita-logo.png",
      alt: "Logo Makita",
      url: "https://www.makita.com.br/"
    },
    {
      src: "https://www.renna.com.br/application/modules/comum/assets/img/logo-black.png",
      alt: "Logo Renna",
      url: "https://www.renna.com.br/"
    },
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <h2>Nossas Marcas Parceiras</h2>
      </div>
      <Marquee className="marquee-container" speed={80} gradient={false} pauseOnHover={true}> 
        {brandLogos.map((logo, index) => (
          <a href={logo.url} key={index} target="_blank" rel="noopener noreferrer">
            <img
              src={logo.src}
              alt={logo.alt}
              className="marquee-image"
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
};

export default BrandsSection;