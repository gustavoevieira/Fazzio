import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUpItem = ({ icon, end, text, suffix = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  return (
    <div className="stat-item" ref={ref}>
      <div className="icon-wrapper">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>
        {inView ? <CountUp end={end} duration={2} suffix={suffix} /> : '0'}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default CountUpItem;