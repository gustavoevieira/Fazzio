import React from 'react';
import './Products.css';

const products = [
  {
    name: 'MDF',
    icon: 'fa-solid fa-box',
    url: '/produtos/mdf'
  },
  {
    name: 'Fitas de Borda',
    icon: 'fa-solid fa-tape',
    url: '/produtos/fitas',
  },
  {
    name: 'Compensados',
    icon: 'fa-solid fa-layer-group',
    url: '/produtos/compensados',
  },
  {
    name: 'Laminados',
    icon: 'fa-solid fa-grip-lines-vertical',
    url: '/produtos/laminados',
  },
  {
    name: 'Máquinas Estacionárias',
    icon: 'fa-solid fa-screwdriver-wrench',
    url: '/produtos/maquinas',
  },
  {
    name: 'Ferramentas Elétricas',
    icon: 'fa-solid fa-bolt',
    url: '/produtos/ferramentas',
  },
  {
    name: 'Tintas e Vernizes',
    icon: 'fa-solid fa-paint-roller',
    url: '/produtos/tintas',
  },
  {
    name: 'Ferragens',
    icon: 'fa-solid fa-gear',
    url: '/produtos/ferragens',
  },
  {
    name: 'Aramados',
    icon: 'fa-solid fa-braille',
    url: '/produtos/armados',
  },
  {
    name: 'Adesivos e Colas',
    icon: 'fa-solid fa-flask',
    url: '/produtos/colas',
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="container">
        <h2>PRODUTOS</h2>
        <p>
          Mais de 6 mil itens a pronta entrega, incluindo mais de 300 padrões de MDF além de um mix composto de tintas, vernizes, seladores, lixas, acessórios para acabamento, mdf cru e madeirado, parafusos, colas, acessórios para esquadrias, ferragens em geral, distribuidor Sayerlack, com sistema tintométrico digital com mais de 700 cores em tintas PU e Nitro.
        </p>

        <div className="products-grid">
          {products.map((product, index) => (
            <a href={product.url} key={index}>
              <div className="product-item">
                <div className="icon-wrapper">
                  <i className={`fas ${product.icon}`}></i>
                </div>
                <p>{product.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;