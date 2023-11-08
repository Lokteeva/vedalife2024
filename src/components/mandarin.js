import React from 'react';
import { useInView } from 'react-intersection-observer';


function Mandarin() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div className="mandarin">
        <img 
        className={`mandarin__img ${inView ? 'active' : ''}`} 
         src="./image/13.jpg" alt="mandarin" />
      </div>
    </div>
  );
}

export default Mandarin;
