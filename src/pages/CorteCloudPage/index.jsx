// src/pages/CorteCloudPage/index.jsx

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CorteCloudPage.css';

// Componente para um Card de Recurso
const FeatureCard = ({ title, description }) => (
    <div className="cortecloud-card">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

// Componente para um Passo
const Step = ({ number, title, description }) => (
    <div className="cortecloud-step">
        <span className="step-number">{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const CorteCloudPage = () => {
    // Dados para as seções de cards
    const features = [
        { title: "Plano de corte otimizado", description: "Algoritmos calculam o encaixe ideal das peças nas chapas, reduzindo desperdícios e tempo de máquina." },
        { title: "Rede de prestadores", description: "Envie o pedido para quem realiza corte, furação e aplicação de borda, com prazos e preços claros." },
        { title: "Gestão do pedido", description: "Do orçamento à produção: acompanhe status, notas e histórico em um só lugar." }
    ];

    const steps = [
        { number: 1, title: "Crie ou importe o projeto", description: "Desenhe o armário, nicho ou painel e defina medidas, materiais e ferragens. Também é possível importar de softwares compatíveis." },
        { number: 2, title: "Gere o plano de corte", description: "Otimização automática das chapas com lista de peças, etiquetas e instruções de usinagem." },
        { number: 3, title: "Envie para produção", description: "Selecione um prestador credenciado próximo a você para realizar cortes, furações e bordas." },
        { number: 4, title: "Receba e monte", description: "As peças chegam identificadas e prontas para montagem — menos erros, mais velocidade." }
    ];

    return (
        <>
            <main className="cortecloud-page">

                {/* Seção Hero */}
                <section className="cortecloud-hero">
                    <div className="container grid grid-logo-corte">
                        <div>
                            <img className='corte-logo' src="https://cortecloud.com.br/assets/images/logo-white.a6606a86.svg" alt="" />
                            <h1>Planejamento e corte inteligente para marcenaria e móveis sob medida</h1>
                            <p>O <strong>CorteCloud</strong> é uma plataforma que integra <em>projeto → otimização de chapas → produção</em>. Você monta o seu móvel, recebe o plano de corte otimizado e envia diretamente para uma rede de prestadores que fazem cortes, furações e bordas.</p>
                            <a href="https://cortecloud.com.br/" className="btn primary">Gerar meu primeiro orçamento</a>
                        </div>
                    </div>
                </section>

                {/* Seção "O que é" */}
                <section className="cortecloud-section" id="o-que-e">
                    <div className="container">
                        <h2>O que é o CorteCloud?</h2>
                        <p className="lead">É um ecossistema digital que conecta marceneiros, designers, arquitetos, lojas e consumidores às indústrias e prestadores de serviço.</p>
                        <div className="cortecloud-cards-grid">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} title={feature.title} description={feature.description} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seção "Como funciona" */}
                <section className="cortecloud-section" id="como-funciona">
                    <div className="container">
                        <h2>Como funciona na prática</h2>
                        <div className="cortecloud-cards-grid">
                            {steps.map((step, index) => (
                                <Step key={index} number={step.number} title={step.title} description={step.description} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ... Adicione as outras seções (Vantagens, Para quem é, FAQ, CTA) usando a mesma lógica de componentes. ... */}
            </main>
        </>
    );
};

export default CorteCloudPage;