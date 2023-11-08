import React from 'react';
import { useInView } from 'react-intersection-observer';


function Cooking() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div className={`cooking ${inView ? 'active' : ''}`}>
        <img className="cooking__img" src="./image/09small.jpg" alt="cooking" />
      </div>
    </div>
  );
}

export default Cooking;
