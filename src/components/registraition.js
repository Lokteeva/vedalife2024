import React from 'react'

function registraition() {
  return (
    <div>
       <section id='registraition' className="registraition">
    <div className="registraition__content">
      <div className="registraition__title">
        <h2> РЕГИСТРАЦИЯ</h2>
      </div>
      <div className="registraition__text">
        <p>
          Поэтому, дорогие друзья, приглашаем вас встретить грядущий 2024 год в действительно благоприятном месте - Ашраме Сочи на Vedalife!
        </p>
        <p>
          Оставить заявку, чтобы успеть забронировать место по самой выгодной цене! 
        </p>
        <p>Оставить заявку на участие в фестивале вы можете по ссылке
        </p>
      </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRaZpZQktevoHTpFihjeujw8oefjtg63IetGSHUyPYMuJrWw/viewform"> Оставить заявку</a>
    </div>
    <div className="registraition__img">
      <img src="./image/17.jpg" alt="img"/>
    </div>
  
    <img className="registraition__snowflake" src="./image/snowflake.png" alt="snowflake"/>
    <img className="registraition__snowflake2" src="./image/snowflake.png" alt="snowflake"/>

  </section>
    </div>
  )
}

export default registraition
