import React from 'react'

function price() {
  return (
    <div>
       <section className="price">
    <h2> <strong>стоимость участия</strong><br/>
и проживание в номерах</h2>
    <table className="price__table">
      <tbody>
        <tr >
          <td ></td>
          <td className="table-btn">взрослый</td>
          <td className="table-btn">детский</td>
        </tr>
        <tr>
          <td>6 <span>ти</span> - местный</td>
          <td className="price__num">22 000</td>
          <td className="price__num">13 200</td>
        </tr>
        <tr>
          <td>4 <span>х</span> - местный</td>
          <td className="price__num">25 500</td>
          <td className="price__num">15 400</td>
        </tr>
        <tr>
          <td> <span>доп. место</span> в 4 <span>х</span> местном</td>
          <td className="price__num">21 000</td>
          <td className="price__num">12 600</td>
        </tr>
        <tr>
          <td>2 <span>х</span> - местный</td>
          <td className="price__num">28 300</td>
          <td className="price__num">17 000</td>
        </tr>
        <tr>
          <td>4 <span>х</span> - местный / комфорт</td>
          <td className="price__num">29 800</td>
          <td className="price__num">18 000</td>
        </tr>
      </tbody>
    </table>

    <button className="price__btn1"></button>
    <button className="price__btn2"></button>
    <img className="price__snowflake" src="./image/snowflake.png" alt="snowflake"/>
  </section>
    </div>
  )
}

export default price
