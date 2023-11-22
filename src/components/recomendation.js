import React from 'react';
import { useInView } from 'react-intersection-observer';


function Recomendation() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`recomendation ${inView ? 'active' : ''}`}>
      <h2>НАС РЕКОМЕНДУЮТ</h2>
      <div className="recomendation__box">
      <div className="recomendation__img">
        <img src="./image/recomendation/1.jpg" alt="img" />
        <h3>Владимир Древс</h3>
      </div>
      <div className="recomendation__img">
        <img src="./image/recomendation/2.jpg" alt="img" />
        <h3>Сатья</h3>
      </div>
      <div className="recomendation__img">
        <img src="./image/recomendation/3.jpg" alt="img" />
        <h3>Бхакти Расаяна Сага Свами</h3>
      </div>
      <div className="recomendation__img">
        <img src="./image/recomendation/4.jpg" alt="img" />
        <h3>Е.С. Бхакти Чайтанья Свами</h3>
      </div>
      <div className="recomendation__img">
        <img src="./image/recomendation/5.jpg" alt="img" />
        <h3>Бхагават</h3>
      </div>
      </div>
    </div>
  );
}

export default Recomendation;
