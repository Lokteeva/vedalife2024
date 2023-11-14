import React from 'react';
import { useInView } from 'react-intersection-observer';


function Speakers() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section  className={`speakers ${inView ? 'active' : ''}`}>
        <div className="speakers__year">
          <img src="./image/year.png" alt="year" />
        </div>
        <div className="speakers__title">
          <h3>
            {' '}
            спикеры
            <br />
            фестиваля
          </h3>
        </div>
        <div className="speakers__date">
          <h3>29–5</h3>
          <div className="speakers__month">
            <button className="speakers__date-dec">декабря</button>
            <button className="speakers__date-jun">января</button>
            <img className="speakers__snowflake" src="./image/snowflake.png" alt="snowflake" />
          </div>
        </div>
      </section>

      <section  className="speaker">
        <div className="speaker__box">
          <div className="speaker__img">
            <img src="./image/22.jpg" alt="img" />
          </div>
          <div className="speaker__content">
            <div className="speaker__title">
              <h2>Игорь Евстигнеев</h2>
            </div>
            <div className="speaker__text">
              <p>Философ и конфликтолог.  </p>
              <p>Проведет семинар</p>
              <p><strong>«Свобода и предопределение в отношениях»</strong></p>
            </div>
          </div>
        </div>
        <div className="speaker__box">
          <div className="speaker__img">
            <img src="./image/21.jpg" alt="img" />
          </div>
          <div className="speaker__content">
            <div className="speaker__title">
              <h2>Ольга Зыбина</h2>
            </div>
            <div className="speaker__text">
              <p>Психолог-консультант, гештальт-терапевт,</p>
              <p>васту-специалист, коуч, наставник, бизнесмен.</p>
              <p>Проведет семинар<strong> «Дом семьи, любви и счастья»</strong></p>
            </div>
          </div>
        </div>
        <img className="speaker__snowflake" src="./image/snowflake.png" alt="snowflake" />
        <img className="speaker__snowflake1" src="./image/snowflake.png" alt="snowflake" />
        <img className="speaker__snowflake2" src="./image/snowflake.png" alt="snowflake" />
        <button className="speaker__btn1"></button>
        <button className="speaker__btn2"></button>
      </section>

      <section className="speaker2">
        <div className="speaker__box">
          <div className="speaker__img">
            <img src="./image/19.jpg" alt="img" />
          </div>
          <div className="speaker__content">
            <div className="speaker__title">
              <h2>Роман Волков и<br/> Оксана Волкова-Чудаева</h2>
            </div>
            <div className="speaker__text">
              <p>Психологи по семейным отношениям.  </p>
              <p>Проведут семинар-тренинг <strong>«Искусство отношений»</strong></p>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Speakers;
