import React from 'react'

function speakers() {
  return (
    <div>
      <section className="speakers">
  <div className="speakers__year">
    <img src="./image/year.png" alt="year"/>
  </div>
  <div className="speakers__title">
    <h3> спикеры<br/>фестиваля</h3>
  </div>
  <div className="speakers__date">
    <h3>29–5</h3>
    <div className="speakers__month">
      <button className="speakers__date-dec">декабря</button>
    <button className="speakers__date-jun">января</button>
    </div>
  </div>
</section>

<section className="speaker">
  <div className="speaker__box">
    <div className="speaker__img">
      <img src="./image/22.jpg" alt="img"/>
    </div>
    <div className="speaker__content">
      <div className="speaker__title">
        <h2>ишана прабху</h2>
      </div>
      <div className="speaker__text">
        <p>Президент Фестиваля Ведалайф Сочи</p>
        <p>Президент храма Ашрам Сочи Нью Джаганнатха Пури</p>
      </div>
    </div>
  </div>
  <div className="speaker__box">
    <div className="speaker__img">
      <img src="./image/21.jpg" alt="img"/>
    </div>
    <div className="speaker__content">
      <div className="speaker__title">
        <h2>арджуна прия деви даси</h2>
      </div>
      <div className="speaker__text">
        <p>Психолог-консультант, гештальт-терапевт,</p>
        <p>васту-специалист, коуч, наставник, бизнесмен</p>
      </div>
    </div>
  </div>
  <img className="speaker__snowflake" src="./image/snowflake.png" alt="snowflake"/>
  <img className="speaker__snowflake1" src="./image/snowflake.png" alt="snowflake"/>
  <img className="speaker__snowflake2" src="./image/snowflake.png" alt="snowflake"/>
  <button className="speaker__btn1"></button>
  <button className="speaker__btn2"></button>
</section>

<section className="speaker2">
  <div className="speaker__box">
    <div className="speaker__img">
      <img src="./image/19.jpg" alt="img"/>
    </div>
    <div className="speaker__content">
      <div className="speaker__title">
        <h2>рупа рагунатха прабху</h2>
      </div>
      <div className="speaker__text">
        <p>текс текс текс текс текс текс текс</p>
        <p>текс текс текс текс текс текс текс</p>
      </div>
    </div>
  </div>
  <div className="speaker__box">
    <div className="speaker__img">
      <img src="./image/20.jpg" alt="img"/>
    </div>
    <div className="speaker__content">
      <div className="speaker__title">
        <h2>уттама матаджи</h2>
      </div>
      <div className="speaker__text">
        <p>текс текс текс текс текс текс текс</p>
        <p>текс текс текс текс текс текс текс</p>
      </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default speakers
