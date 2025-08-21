// src/pages/ProbluePage/index.jsx

import React from 'react';

import './ProbluePage.css';

// Dados para a seção de Benefícios
const benefitsData = [
    { text: 'Parcelamento em até 18x', icon: "fa-solid fa-receipt" },
    { text: 'Recebimento no dia seguinte', icon: "fa-solid fa-money-bill" },
    { text: 'Taxas atraentes', icon: 'fa-solid fa-percent' },
    { text: 'Transmita mais confiança e credibilidade para o cliente', icon: 'fa-solid fa-handshake' },
    { text: 'Ofereça mais uma alternativa de pagamento', icon: 'fa-solid fa-credit-card' },
    { text: 'Elimine a Inadimplência', icon: 'fa-solid fa-chart-line' },
];


const ProbluePage = () => {
    return (
        <>
            <main className="problue-page">
                {/* Seção Hero */}
                <section className="problue-hero">
                    <div className="container problue-content">
                        <div className="problue-text">
                            <img src="https://static.wixstatic.com/media/298f37_b7adce614d6b43e89babe4f2cad9635f~mv2.png/v1/fill/w_205,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/problue_color.png" alt="" />
                            <h1>A Máquina para Marcenaria!</h1>
                            <div className="bar"></div>
                            <p>A PRÓblue é a máquina de crédito da Rede PRÓ, que oferece diversas vantagens para profissionais de marcenaria. Com ela, você garante pagamento no dia seguinte e pode parcelar as vendas para seus clientes em até 18 vezes, sem precisar de uma conta bancária para começar a usar. Além disso, a máquina não tem taxa de adesão ou mensalidade, e as taxas de juros são as menores do mercado.</p>
                            <p>É uma solução que traz mais confiança e credibilidade para o seu negócio, eliminando a inadimplência e permitindo que você acompanhe suas vendas em tempo real através do portal da PRÓblue.</p>
                            <a href="https://www.problue.com.br/" className="btn btn-primary">Pedir minha PRÓblue!</a>
                        </div>
                        <div className="problue-image">
                            <img src="uploads/imgs/mascote/mascote2.png" alt="Mascote Fazzio com a máquina Problue" />
                        </div>
                    </div>
                </section>

                {/* Seção de Benefícios */}
                <section className="benefits-section">
                    <div className="container">
                        <h2>Benefícios</h2>
                        <div className="benefits-grid">
                            {benefitsData.map((item, index) => (
                                <div className="benefit-item" key={index}>
                                    <div className="icon-wrapper">
                                        <i className={item.icon}></i>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default ProbluePage;