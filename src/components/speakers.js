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
        <div className="speakers__title">
          <h3>
            спикеры
            <br />
            фестиваля
          </h3>
        </div>
        <div className="speakers__date">
          <h3>28–4</h3>
          <div className="speakers__month">
            <button className="speakers__date-dec">декабря</button>
            <button className="speakers__date-jun">января</button>
            <img className="speakers__snowflake" src="./image/snowflake.png" alt="snowflake" />
          </div>
        </div>
      </section>

      {/* <Iframe
        url="https://vk.com/video_ext.php?oid=-42933644&id=456239431&hd=2"
        id=""
        className={`videoAshram ${inView ? 'active' : ''}`}
        display="block"
        position="relative"
      /> */}

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
            <details>
              <summary>Подробнее</summary>
              <p className="Podrobnee">
                Игорь имеет опыт успешного наставничества, многолетней духовной практики и успешных
                семейных взаимоотношений, поэтому вся информация подается им легко, осознанно, а
                также артистично и, нередко, в интерактивной форме. Тема будет актуальна всем, кто
                интересуется развитием себе как личности и улучшением взаимоотношений в семье.
              </p>
            </details>
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
            <details>
              <summary>Подробнее</summary>
              <p className="Podrobnee">
                Слово "дом" много у кого вызывает теплые, приятные воспоминания. Там уютно и
                красиво, там любят и окружают заботой, там легко и радостно. Даже несмотря на
                трудности в отношениях между людьми или даже поколениями людей, которые возникают
                всегда и у всех, дом сохраняет свой неприкосновенный покой и добрую память.
              </p>
              <p className="Podrobnee">
                Понятно, что времена меняются и за ними меняется восприятие того, что связано с
                семьей и домашними устоями. Как бы то ни было, счастья хочется всем, мы к нему
                стремимся.
              </p>
              <p className="Podrobnee">
                И в этот Новый год, чтобы начать его с правильного понимания развития этой сферы
                жизни, мы предлагаем вам погрузиться в эту важную тему.
              </p>
              <p className="Podrobnee">
                На семинаре Ольги Зыбиной «Дом семьи, любви и счастья» вы узнаете, как создать
                гармоничное пространство, в котором легко строить доверительные, дружелюбные,
                глубокие и прочные взаимоотношения.
              </p>
            </details>
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
            <img
              src="https://brsswami.com/wp-content/themes/brsswami/assets/img/site4.png "
              alt="img"
            />
          </div>
          <div className="speaker__content">
            <div className="speaker__title">
              <h2>Бхакти Расаяна Сагара Свами</h2>
            </div>
            <div className="speaker__text">
              <p>
                Монах, с которым советуются миллионеры. 14 кругосветных путешествий с лекциями по
                всему миру. Мудрец, соединяющий материальное и духовное
              </p>
            </div>
          </div>
          <button className="btnModal">
            <details>
              <summary>Подробнее</summary>
              <p className="Podrobnee">
                <ul className='podrobnee-li'>
                  <li>
                    Более 30 лет практикует монашеский уклад жизни в традиции бхакти-йоги. В 2016
                    году принял санньясу.
                  </li>
                  <li>
                    Преподает и консультирует лидеров общества и бизнеса более чем в 20 странах на
                    4-х континентах.
                  </li>
                  <li>
                    Использует в своих лекциях и тренингах древние священные писания и современные
                    разработки Гарвардской бизнес-школы.
                  </li>
                  <li> Развивает межконфессиональное сотрудничество на уровне стран и ООН. </li>
                  <li>
                    Выступает вдохновителем и духовным лидером международного бизнес-форума «Артха»
                    на русскоязычном пространстве.
                  </li>
                  <li>
                    Распространяя духовное знание, совершил 14 полных кругосветных путешествий.
                  </li>
                </ul>
              </p>
            </details>
          </button>
        </div>
      </section>
      <div></div>
    </div>
  );
}

export default Speakers;
