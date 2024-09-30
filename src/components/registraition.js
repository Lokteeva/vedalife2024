import React from 'react'
import { useInView } from 'react-intersection-observer';


function Registraition() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
       <section id='registraition' className={`registraition ${inView ? 'active' : ''}`}>
    <div className="registraition__content">
      <div className="registraition__title">
        <h2> РЕГИСТРАЦИЯ</h2>
      </div>
      <div className="registraition__text">
        <p>
        Чтобы занять себе место достаточно внести от 3000 рублей, остальное при заезде.
        </p>
        <p>
        Напишите нам чтобы зарегистрироваться или уточнить подробности
        </p>
      </div>
          
    <div className='button-registraition'>
    <a className="baner__button" href="https://wa.me/79631626238 ">
        Написать в Whatsapp
      </a>
      <a className="baner__button" href="https://t.me/aana_ambika">
        Написать в Telegram
      </a>
    </div>
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

export default Registraition
