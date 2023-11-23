import React from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from './modal/Modal';
import Iframe from 'react-iframe';

function Speakers() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section className={`speakers ${inView ? 'active' : ''}`}>
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

      <section className="speaker">
        <div className="speaker__box">
          <div className="speaker__img">
            <img src="./image/22.jpg" alt="img" />
          </div>
          <div className="speaker__content">
            <div className="speaker__title">
              <h2>Игорь Евстигнеев</h2>
            </div>
            <div className="speaker__text">
              <p>Философ и конфликтолог. </p>
              <p>Проведет семинар</p>
              <p>
                <strong>«Свобода и предопределение в отношениях»</strong>
              </p>
            </div>
          </div>
          <button className="btnModal">
            <Modal>
              <p>
                Игорь имеет опыт успешного наставничества, многолетней духовной практики и успешных
                семейных взаимоотношений, поэтому вся информация подается им легко, осознанно, а
                также артистично и, нередко, в интерактивной форме. Тема будет актуальна всем, кто
                интересуется развитием себе как личности и улучшением взаимоотношений в семье.
              </p>
              <p>
                <strong>"Свобода и предопределение в отношениях"</strong> - звучит интересно, ведь о
                внутренней свободе сейчас мечтает каждый, несмотря на то, находится он в отношениях
                или нет.
              </p>
              <p>
                Есть такое великое заблуждение, что, вступив в отношения, женщина сможет изменить
                мужчину, а мужчина - женщину. Так ведь? Вот мы и узнаем насколько это возможно и
                возможно ли вообще, рассмотрим вопрос механизма кармы в семейных отношениях. На
                лекциях нам будут предложены теория и практические методы поведения в тех или иных
                ситуациях.
              </p>
            </Modal>
          </button>
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
              <p>
                Проведет семинар<strong> «Дом семьи, любви и счастья»</strong>
              </p>
            </div>
          </div>
          <button className="btnModal">
            <Modal>
              <p>
                Слово "дом" много у кого вызывает теплые, приятные воспоминания. Там уютно и
                красиво, там любят и окружают заботой, там легко и радостно. Даже несмотря на
                трудности в отношениях между людьми или даже поколениями людей, которые возникают
                всегда и у всех, дом сохраняет свой неприкосновенный покой и добрую память.
              </p>
              <p>
                Понятно, что времена меняются и за ними меняется восприятие того, что связано с
                семьей и домашними устоями. Как бы то ни было, счастья хочется всем, мы к нему
                стремимся.
              </p>
              <p>
                И в этот Новый год, чтобы начать его с правильного понимания развития этой сферы
                жизни, мы предлагаем вам погрузиться в эту важную тему.
              </p>
              <p>
                На семинаре Ольги Зыбиной «Дом семьи, любви и счастья» вы узнаете, как создать
                гармоничное пространство, в котором легко строить доверительные, дружелюбные,
                глубокие и прочные взаимоотношения.
              </p>
            </Modal>
          </button>
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
              <h2>
                Роман Волков и<br /> Оксана Волкова-Чудаева
              </h2>
            </div>
            <div className="speaker__text">
              <p>Психологи по семейным отношениям. </p>
              <p>
                Проведут семинар-тренинг <strong>«Искусство отношений»</strong>
              </p>
            </div>
          </div>
          <button className="btnModal">
            <Modal>
              <p>
                Роман и Оксана проведут тренинг «Искусство отношений». Это трансформационный
                тренинг, после которого вы узнаете и будите применять в жизни что такое отношения:
                отношения с собой, отношения в паре, отношения с родителями и детьми.
              </p>
              <p>У вас будут упражнения и работа в парах-тройках.</p>
              <p>
                Вы узнаете: как быть с разногласиями в отношениях, как формировать долгосрочное
                видение отношений, как принять партнера, если он не такой как я.
              </p>
            </Modal>
          </button>
        </div>
      </section>
      <div >
      <Iframe
        url="https://vk.com/video_ext.php?oid=-42933644&id=456239431&hd=2"
        id=""
        className={`videoAshram ${inView ? 'active' : ''}`}
        display="block"
        position="relative"
      />
      </div>
    </div>
  );
}

export default Speakers;
