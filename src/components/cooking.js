import React from 'react';
import { useInView } from 'react-intersection-observer';

function Cooking() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div className={`cooking ${inView ? 'active' : ''}`}>
        <img className="cooking__img" src="./image/09small.jpg" alt="cooking" />
      </div>
      <div className='cooking__padding'>
        <p className='title-pink center'>
          При открытии регистрации мы выделили 10 мест по скидке 7500 рублей при раннем
          бронирование.
        </p>
        <p className='center'>Чтобы занять себе место достаточно внести 3000 рублей, остальное при заезде.</p>
        <p className='title-pink center'>Напишите нам,чтобы занять место или уточнить подробности по кнопке ниже</p>
      </div>
      <div className="center">
        <a className="baner__button" href="https://wa.me/79631626238 ">
          Написать в Whatsapp
        </a>
        <a className="baner__button" href="https://t.me/aana_ambika">
          Написать в Telegram
        </a>
      </div>
    </div>
  );
}

export default Cooking;
