import React from 'react';
import { useInView } from 'react-intersection-observer';

function ProgrammFestival() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section id="programmFestival" 
      className={`programmFestival ${inView ? 'active' : ''}`}
      >
        <div className="programmFestival__img">
          {inView ? <img src="./image/12.jpg" alt="img" /> : <div className="skeleton23" />}
        </div>

        <div className="programmFestival__content">
          <div className="programmFestival__title">
            <h2>программа фестиваля</h2>
          </div>
          <div className="programmFestival__text">
            <p>
              Поэтому, дорогие друзья, приглашаем вас встретить грядущий 2024 год в действительно
              благоприятном месте - Ашраме Сочи на Vedalife!
            </p>
            <strong>Вас ждут:</strong>
            <ul>
              <li>познавательные семинары</li>
              <li>мастер-классы</li>
              <li>творческие вечера</li>
              <li>проживание в удобных и красивых номерах</li>
              <li>Кулинарные мастер-классы</li>
              <li>Мантра медитации</li>
              <li>Огненная церемония (ягья)</li>
              <li>Йога каждое утро</li>
              <li>Мантра вечеринка</li>
              <li>Вкуснейшая, сбалансированная, одухотворенная вегетарианская еда (прасад)</li>
              <li>Спектакль и Встреча Нового 2024 года</li>
              <li>Однодневный тур в Абхазию (за доп плату)</li>
            </ul>
            
          </div>
        </div>

        <img className="programmFestival__snowflake1" src="./image/snowflake.png" alt="snowflake" />

        <button className="programmFestival__btn"></button>
      </section>
    </div>
  );
}

export default ProgrammFestival;
