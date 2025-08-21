import React from 'react';
import './Stats.css';
import CountUpItem from './CountUpItem';

const statsData = [
  { icon: 'fa-palette', end: 300, text: 'Padrões de MDF', suffix: ' +' },
  { icon: 'fa-archive', end: 6000, text: 'Itens a Pronta Entrega', suffix: ' +' },
  { icon: 'fa-building', end: 500, text: 'm² de Área Construída', suffix: ' +' },
  { icon: 'fa-award', end: 25, text: 'Anos de Experiência', suffix: ' +' },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container stats-grid">

          {statsData.map((stat, index) => (
            <CountUpItem
              key={index}
              icon={stat.icon}
              end={stat.end}
              text={stat.text}
              suffix={stat.suffix}
            />
          ))}

      </div>
    </section>
  );
};

export default StatsSection;
