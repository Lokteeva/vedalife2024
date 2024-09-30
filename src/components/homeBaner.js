import React from 'react';
import { sail } from './constants/constants.ts';

function HomeBaner() {
  return (
    <div id="home">
      <img className="baner__home" src="./image/1920-768.jpg" alt="home" />
      <img className="baner__home2" src="./image/1000-700.jpg" alt="home" />


      <div className="speakers__title">
      <div className="homeBaner__title">
            <h1>Первые 10 мест по скидке {sail}</h1>
          </div>
        <p> +1 день отдыха бесплатно</p>
        <p>Успейте занять одно из 10-ти первых мест по скидке {sail}.</p>
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

export default HomeBaner;
