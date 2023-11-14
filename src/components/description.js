import React from 'react';
import { useInView } from 'react-intersection-observer';

function Description() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      

      <section className="description">
        <div className="description__box box2">
          <div className="description__img description__img-revers">
            {inView ? <img src="./image/02.jpg" alt="img" /> : <div className="skeleton10" />}
          </div>

          <div className="description__content">
            <div className="description__title">
              <h2>мантра медитация</h2>
            </div>
            <div className="description__text description__text-revers">
              <p>
                Каждый день мы будем проводить мантра медитации и соприкасаться со своим внутренним
                Я. Будем выстраивать связь с Высшим началом и искать ответы на вечные вопросы бытия
                изнутри
              </p>
            </div>
          </div>

          <img className="description__snowflake2 " src="./image/snowflake.png" alt="snowflake" />
        </div>
      </section>

      <section className="description">
        <div className="description__box">
          <div className="description__img">
            {inView ? <img src="./image/03.jpg" alt="img" /> : <div className="skeleton10" />}
          </div>

          <div className="description__content">
            <div className="description__title">
              <h2>кулинарный мастер-класс</h2>
            </div>
            <div className="description__text">
              <p>
                Кулинарные мастер-классы дадут вам понимание что вегетарианская еда - это не
                картошка, зелень и капуста с огурцами :).
              </p>
              <p>
                Вегетарианство - это сбалансированное, вкусное и разнообразное питание. Не верите?
                Мы вам это докажем и покажем на наших кулинарных мастер-классах!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="description">
        <div className="description__box box2">
          <div className="description__img description__img-revers">
            {inView ? <img src="./image/04.jpg" alt="img" /> : <div className="skeleton10" />}
          </div>

          <div className="description__content">
            <div className="description__title">
              <h2>йога</h2>
            </div>
            <div className="description__text description__text-revers">
              <p>
                Йога - это не просто упражнения, это глубокая философия! Йога на санскрите
                переводиться как "связь", а вот что это за связь, с кем - это вы узнаете на утренней
                йоге, которая будет проходить каждый день. Будем просыпаться под йогу и
                настраиваться на день!
              </p>
            </div>
          </div>
        </div>
        <img className="description__snowflake3" src="./image/snowflake.png" alt="snowflake" />
        <button className="description__btnEnd"></button>
      </section>

      <section className="description">
        <div className="description__box">
          <div className="description__img">
            {inView ? <img src="./image/05.jpg" alt="img" /> : <div className="skeleton10" />}
          </div>

          <div className="description__content">
            <div className="description__title">
              <h2>женский круг</h2>
            </div>
            <div className="description__text">
              <p>
                В женских кругах вы будите дружественной, камерной атмосфере при свечах обсуждать
                как прошёл день, пообщаетесь с нашими спикерами на женские темы, зарядитесь женской
                энергией вдохновения и радости
              </p>
            </div>
          </div>

          <img className="description__snowflake1" src="./image/snowflake.png" alt="snowflake" />

          <button className="description__btn2"></button>
        </div>
      </section>

      <section className="description">
        <div className="description__box box2">
          <div className="description__img description__img-revers">
            {inView ? <img src="./image/06.jpg" alt="img" /> : <div className="skeleton10" />}
          </div>

          <div className="description__content">
            <div className="description__title">
              <h2>мастер-класс сари и дхоти</h2>
            </div>
            <div className="description__text description__text-revers">
              <p>
                Ведическая культура - это очень красиво. Вы будите учиться одеваться традиционные
                сари (женщины) и дхоти (мужчины).
              </p>
              <p>
                Мало того что это красиво, так это еще и меняет внутренние ощущения, словами это не
                передать. Нужно одеться!
              </p>
              <p>
                Будите выглядеть как настоящие индийские женщины и мужчины :). А потом все идём
                делать фотосессию, чтобы вы могли показать ваше преображение в ваших соц сетях 😉
              </p>
            </div>
          </div>

          <img className="description__snowflake4 " src="./image/snowflake.png" alt="snowflake" />
        </div>
      </section>

      <section className="description">
        <div className="description__box">
          <div className="description__img">
            {inView ? <img src="./image/07.jpg" alt="img" /> : <div className="skeleton23" />}
          </div>

          <div className="description__content">
            <div className="description__title">
              <h2>мастер-класс танцуют все</h2>
            </div>
            <div className="description__text">
              <p>
                {' '}
                Ведическая культура - это не только изучение древних книг, это чистый образ жизни. И
                даже танцевать можно так, чтобы этот танец помогал очистить сознание и приблизиться
                к совершенству жизни.
              </p>
              <p>На мастер классе мы познакомимся с культурой современного храмового танца.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="description">
        <div className="description__box box2">
          <div className="description__img description__img-revers">
            {inView ? <img src="./image/08.jpg" alt="img" /> : <div className="skeleton10" />}
          </div>

          <div className="description__content">
            <div className="description__title">
              <h2>новогодний спектакль</h2>
            </div>
            <div className="description__text description__text-revers">
              <p>
                Традиционно мы за 2-3 месяца начинаем готовить новогодний спектакль - это
                философское, но при этом с юмором театральное действие на несколько часов.
              </p>
              
            </div>
          </div>
        </div>
        <img className="description__snowflake5" src="./image/snowflake.png" alt="snowflake" />
        <button className="description__btnEnd2"></button>
      </section>
    </div>
  );
}

export default Description;
