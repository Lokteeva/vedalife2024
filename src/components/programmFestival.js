import React from 'react';
import { useInView } from 'react-intersection-observer';

function ProgrammFestival() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section id="programmFestival" className={`programmFestival ${inView ? 'active' : ''}`}>
        <div className="programmFestival__img">
          {inView ? <img src="./image/12.jpg" alt="img" /> : <div className="skeleton23" />}
        </div>

        <div className="programmFestival__content">
          <div className="programmFestival__title">
            <h2>программа фестиваля</h2>
          </div>
          <div className="programmFestival__text">
            <p>
              Новогодний фестиваль Vedalife – это <strong>уникальное место силы для каждого</strong>, вы найдете
              здесь что-то своё!
            </p>
            <strong>В программе фестиваля:</strong>
            <ul>
              <li>🔹 Семинары и лекции по ведической философии, васту, отношениям</li>
              <li>🔸 Кулинарные мастер-классы с вегетарианскими вкусняшками</li>
              <li>🔹 Мантра медитации для свободы от тревог и беспокойств</li>
              <li>🔸 Огненная церемония (ягья) для привлечения всего благоприятного</li>
              <li>🔹 Йога каждое утро</li>
              <li>🔸 Мантра вечеринка</li>
              <li>🔹 Вкуснейшая, сбалансированная, одухотворенная вегетарианская еда (прасад)</li>
              <li>🔸 Веселый и душевный спектакль и Встреча Нового 2024 года</li>
              <li>🔹 Однодневный тур в Абхазию (за небольшую доплату)</li>
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
