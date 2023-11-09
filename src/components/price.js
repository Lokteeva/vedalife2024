import React from 'react'
import { useInView } from 'react-intersection-observer';


function Price() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
       <section className={`price ${inView ? 'active' : ''}`}>
    <h2> <strong>стоимость участия</strong><br/>
и проживание в номерах</h2>
<h3>В стоимость входит:<br/> проживание, питание, вся программа</h3>
    <table className="price__table">
      <tbody>
        <tr >
          <td ></td>
          <td className="table-btn">взрослый</td>
          <td className="table-btn">детский</td>
        </tr>
        <tr>
          <td>6 <span>ти</span> - местный</td>
          <td className="price__num">22 500</td>
          <td className="price__num">13 500</td>
        </tr>
        <tr>
          <td>4 <span>х</span> - местный</td>
          <td className="price__num">25 500</td>
          <td className="price__num">15 500</td>
        </tr>
        <tr>
          <td>2 <span>х</span> - местный</td>
          <td className="price__num">32 000</td>
          <td className="price__num">20 500</td>
        </tr>
        <tr>
          <td> <span>доп. место в </span> 4 <span>х</span> местном</td>
          <td className="price__num">21 000</td>
          <td className="price__num">12 600</td>
        </tr>
        <tr>
          <td>4 <span>х</span> - местный / комфорт</td>
          <td className="price__num">29 900</td>
          <td className="price__num">18 000</td>
        </tr>
        <tr>
          <td>Новый дом 2 <span>х</span> - местный / комфорт</td>
          <td className="price__num">40 500</td>
          <td className="price__num">24 300</td>
        </tr>
        <tr>
          <td>Новый дом 4 <span>х</span> - местный / комфорт</td>
          <td className="price__num">29 700</td>
          <td className="price__num">17 800</td>
        </tr>
      </tbody>
    </table>

    <p>
    При оплате <strong>до 15 ноября</strong> <br/> 2 дня ОТДЫХА в ашраме<br/> до или после фестиваля <strong>БЕСПЛАТНО!</strong>
    </p>

    <button className="price__btn1"></button>
    <button className="price__btn2"></button>
    <img className="price__snowflake" src="./image/snowflake.png" alt="snowflake"/>
  </section>
    </div>
  )
}

export default Price
