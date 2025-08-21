import React from 'react';
import './Work.css';

const WorkflowSection = () => {
  // Array de objetos com os dados do fluxo de trabalho da Fazzio.
  const workflowSteps = [
    {
      step: 1,
      title: "Avaliação do Projeto",
      description: "Discutimos seu projeto, entendendo suas necessidades e selecionando os melhores materiais e acabamentos."
    },
    {
      step: 2,
      title: "Plano de Corte Otimizado",
      description: "Nosso sistema de inteligência otimiza o uso das chapas, reduzindo custos e desperdício de material."
    },
    {
      step: 3,
      title: "Serviços de Usinagem",
      description: "Realizamos o corte e usinagem com alta precisão e rapidez, preparando as peças para a montagem."
    },
    {
      step: 4,
      title: "Colação de Borda",
      description: "Descrição colação de borda"
    },
    {
      step: 5,
      title: "Entrega e Suporte",
      description: "Garantimos que suas peças sejam entregues no prazo e prontas para a montagem, com todo o suporte necessário."
    },
  ];

  return (
    <section className="workflow-section">
      <div className="container">
        <p className="section-tag">Nosso Processo</p>
        <h2>Como Transformamos Seus Projetos</h2>
        <div className="workflow-grid">
          {workflowSteps.map((item) => (
            <div className="workflow-item" key={item.step}>
              <div className="step-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;