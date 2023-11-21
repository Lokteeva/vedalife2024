import React from 'react';
import { useInView } from 'react-intersection-observer';

function Festival() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section className={`festival ${inView ? 'active' : ''}`}>
        <div className="festival__content">
          <div className="festival__title">
            <h2> ФЕСТИВАЛЬ И НОВЫЙ ГОД</h2>
          </div>
          <div className="festival__text">
            <p>
              Фестиваль Ведалайф проходит уже <strong>больше 10 лет</strong>. За это время было проведено почти <strong>40
              фестивалей!</strong>
            </p>
            <p>
              Ведалайф проходит в комфортабельных условиях действующего ашрама в 15 минутах ходьбы
              до моря и под чутким руководством заботливых администраторов. Вы будите обогреты
              теплотой нашего коллектива в это прохладное время года.
            </p>
            <p>
             <strong> У нас уже были и рекомендуют: Сатья, Владимир Древс, Сагара Свами, Бхакти Чайтанья
              Свами, Бхагават</strong>
            </p>
          </div>
        </div>
        <div className="festival__img">
          {inView ? <img src="./image/10.jpg" alt="img" /> : <div className="skeleton23" />}
        </div>

        <img className="festival__snowflake1" src="./image/snowflake.png" alt="snowflake" />
        <img className="festival__snowflake2" src="./image/snowflake.png" alt="snowflake" />

        <button className="festival__btn"></button>
      </section>
    </div>
  );
}

export default Festival;
