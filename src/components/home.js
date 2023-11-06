import React from 'react';

function home() {
  return (
    <div>
      <section id="home" className="home">
        <div>
          <img className="home__img-treeth" src="./image/002.png" alt="home" />
        </div>
        <img className="home__img-snowflake" src="./image/snowflake.png" alt="snowflake" />


        <div>
          <img className="home__img" src="./image/09.jpg" alt="home" />
          <div>

            <h3 className="home__button-present0 home__button-present">+2 дня отдыха</h3> 
            <h3 className='home__button-present home__button-present2 home__button-present-pink'> в подарок </h3>
            <h3 className="home__button-present home__button-present3"> при оплате в ноябре</h3>
          </div>
        </div>

        <div className='home__box'>
        <div className=" home__date">
            <h3>29–5</h3>
            <div className="newYear__month">
              <button className="newYear__date-dec home__date-dec">декабря</button>
              <button className="home__date-jun">января</button>
            </div>
            <img className="newYear__month-img" src="./image/yearPink.png" alt="year"/>
          </div>

        <div className='home__content'>
          <div className="home__sochi">
            <h1>Сочи</h1>
          </div>

        <div className='home__button-box'>
        <h1 className="home__button-festival">
            Новогодний
            <br /> фестиваль
          </h1>
          <h3 className="home__button-ashram">в ашраме</h3>
        </div>
        </div>

        </div>
      </section>
    </div>
  );
}

export default home;
