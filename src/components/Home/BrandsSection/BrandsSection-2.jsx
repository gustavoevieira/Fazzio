import React from "react";
import Marquee from "react-fast-marquee";
import './Brands.css';

const BrandsSection = () => {
  const brandLogos = [
    {
      src: "https://torralba.com.br/novo/wp-content/uploads/2022/09/logo-escuro.png",
      alt: "Logo Torralba",
      url: "https://torralba.com.br/"
    },
    {
      src: "https://inmes.com.br/wp-content/uploads/2021/07/cropped-Vers%C3%A3o-Original-1.png",
      alt: "Logo Inmes",
      url: "https://inmes.com.br/"
    },
    {
      src: "https://fm.sendpul.se/8da69b4e1429fd8486aa9473ae4c716d9114713/Logos/logo1.png",
      alt: "Logo Rometal",
      url: "https://www.rometal.com.br/"
    },
    {
      src: "https://openfieldmoveleiro.com.br/wp-content/uploads/2023/07/logo-openfield.svg",
      alt: "Logo Openfield",
      url: "https://openfieldmoveleiro.com.br/"
    },
    {
      src: "/uploads/imgs/others/logo-schimitt.png",
      alt: "Logo Schmitt",
      url: "https://www.schmittaramados.com.br"
    },
    {
      src: "https://ledline.net.br/wp-content/uploads/2025/02/Led-Line_Logo_3D-2048x614.png",
      alt: "Logo Ledline",
      url: "https://ledline.net.br/"
    },
    {
      src: "https://logodownload.org/wp-content/uploads/2021/11/tekbond-logo.png",
      alt: "Logo Tekbond",
      url: "https://www.tekbond.com.br/"
    },
    {
      src: "https://www.sayerlack.com.br/resources/img/menu/logo_menu.png",
      alt: "Logo Sayerlack",
      url: "https://www.sayerlack.com.br"
    },
    {
      src: "https://www.fgvtn.com.br/imagens/logo.svg?v=2",
      alt: "Logo da Marca 5",
      url: "https://torralba.com.br/"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/REHAU_Logo_sRGB_01.svg/1280px-REHAU_Logo_sRGB_01.svg.png",
      alt: "Logo da Marca 5",
      url: "https://torralba.com.br/"
    },
    {
      src: "https://www.fibraplac.com.br/application/modules/comum/assets/svg/logo-green.svg",
      alt: "Logo da Marca 5",
      url: "https://torralba.com.br/"
    },
  ];

  return (
    <section className="brands-section">
      <div className="container">
      </div>
      <Marquee className="marquee-container" direction="" speed={80} gradient={false} pauseOnHover={true}>
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