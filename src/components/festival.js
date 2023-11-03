import React from 'react'

function festival() {
  return (
    <div>
      <section className="festival">
  <div className="festival__content">
    <div className="festival__title">
      <h2> ФЕСТИВАЛЬ И НОВЫЙ ГОД</h2>
    </div>
    <div className="festival__text">
      <p>
        Новый год - это прекрасный и любимый семейный праздник, который дорог всем. В это время мы подводим итоги года, дарим и принимаем подарки, готовим для любимых и проводим праздники вместе. Приятно собираться в уютном красивом месте с близкими по духу людбми, вспоминать радостные события и делиться впечатлениями за прошедшее время.
      </p>
      <p>
        Каждый год мы ожидаем, что вот этот год точно станет лучше, нам точно повезет, планы перестанут ретроградить и все вокруг преисполняться в своем сознании. Как говориться: как Новый год встретишь - так его и проведешь! 
      </p>
    </div>
  </div>
  <div className="festival__img">
    <img src="./image/10.jpg" alt="img"/>
  </div>

  <img className="festival__snowflake1" src="./image/snowflake.png" alt="snowflake"/>
  <img className="festival__snowflake2" src="./image/snowflake.png" alt="snowflake"/>

  <button className="festival__btn"></button>
</section>
    </div>
  )
}

export default festival
