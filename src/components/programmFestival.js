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
            <p>Встретьте Новый 2025 год в кругу светлых и приятных людей с 28 дек по 4 янв!</p>
            <strong>В программе фестиваля:</strong>
            <ul>
              <li>🔹 Самый трезвый Новый год</li>
              <li>🔸 Без глупых шоу из телевизора</li>
              <li>🔹 Только вегетарианское кулинарное разнообразие</li>
              <li>🔸 Совместные медитации</li>
              <li>🔹 Церемонии коррекции судьбы (ягьи)</li>
              <li>🔸 Взрывной новогодний огонек со спектаклем</li>
              <li>🔹 Семинары и тренинги для прокачки себя</li>
            </ul>
            <p>И бонусом для вас будет:</p>
            <ul>
              <li>🔹 Йога каждое утро</li>
              <li>🔸 Абхазия за 1 день (тур за доп плату)</li>
              <li>🔹 Море, горы и солнце среди зимы</li>
            </ul>
            <p>
              Почетный гость фестиваля - Бхакти Расаяна Сагара Свами (настоящий монах, который
              практикует более 30-ти лет)
            </p>
            <p>Есть вопросы? Напишите нам по кнопке ниже</p>
            <div className='center'>
              <a className="baner__button" href="https://wa.me/79631626238 ">
                Написать в Whatsapp
              </a>
              <a className="baner__button" href="https://t.me/aana_ambika">
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>

        <img className="programmFestival__snowflake1" src="./image/snowflake.png" alt="snowflake" />

        <button className="programmFestival__btn"></button>
      </section>
    </div>
  );
}

export default ProgrammFestival;
