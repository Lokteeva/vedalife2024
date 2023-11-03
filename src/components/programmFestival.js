import React from 'react'

function programmFestival() {
  return (
    <div>
      <section className="programmFestival">
  <div className="programmFestival__img">
    <img src="./image/12.jpg" alt="img"/>
  </div>

  <div className="programmFestival__content">
    <div className="programmFestival__title">
      <h2>программа фестиваля</h2>
    </div>
    <div className="programmFestival__text">
      <p>
        Поэтому, дорогие друзья, приглашаем вас встретить грядущий 2024 год в действительно благоприятном месте - Ашраме Сочи на Vedalife!
      </p>
      <strong>
         Вас ждут:
      </strong>
      <ul>
        <li>познавательные семинары</li>
        <li>мастер-классы</li>
        <li>творческие вечера</li>
        <li>проживание в удобных и красивых номерах</li>
        <li>вкусная одухотворенная пища</li>
      </ul>
      <p>
        <strong>И главное:</strong> Духовная атмосфера настоящего действующего ашрама.
      </p>
    </div>
  </div>
 

  <img className="programmFestival__snowflake1" src="./image/snowflake.png" alt="snowflake"/>

  <button className="programmFestival__btn"></button>
</section>
    </div>
  )
}

export default programmFestival
