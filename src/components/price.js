import React from 'react';
import { useInView } from 'react-intersection-observer';
import { DiscountedCost, FullCost, sail } from './constants/constants.ts';

function Price() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section className={`price ${inView ? 'active' : ''}`}>
        <h2>
          {' '}
          <strong>стоимость участия</strong>
          <br />и проживание в номерах
        </h2>
        <h4>
          <strong>
            Первые 10 мест по скидке {sail} <br />+ 1 день отдыха бесплатно
          </strong>
        </h4>
        <h3>
          В стоимость входит:
          <br /> проживание, питание, вся программа{' '}
        </h3>
        <h5>на 1 человека</h5>

        <table className="price__table">
          <tbody>
            <tr>
              <td></td>
              <td className="table-btn">полный</td>
              <td className="table-btn">со скидкой</td>
            </tr>
            <tr>
              <td>
                6 <span>ти</span> - местный
              </td>
              <td className="price__num">
                <del>{FullCost.A1}</del>
              </td>
              <td className="price__num">{DiscountedCost.B1}</td>
            </tr>
            <tr>
              <td>
                4 <span>х</span> - местный
              </td>
              <td className="price__num">
                <del>{FullCost.A2}</del>
              </td>
              <td className="price__num">{DiscountedCost.B2}</td>
            </tr>
            <tr>
              <td>
                2 <span>х</span> - местный
              </td>
              <td className="price__num">
                <del>{FullCost.A3}</del>
              </td>
              <td className="price__num">{DiscountedCost.B3}</td>
            </tr>
            <tr>
              <td>
                {' '}
                <span>доп. место в </span> 4 <span>х</span> местном
              </td>
              <td className="price__num">
                <del>{FullCost.A4}</del>
              </td>
              <td className="price__num">{DiscountedCost.B4}</td>
            </tr>
            <tr>
              <td>
                4 <span>х</span> - местный / комфорт
              </td>
              <td className="price__num">
                <del>{FullCost.A5}</del>
              </td>
              <td className="price__num">{DiscountedCost.B5}</td>
            </tr>
            <tr>
              <td>
                Новый дом 2 <span>х</span> - местный / комфорт
              </td>
              <td className="price__num">
                <del>{FullCost.A6}</del>
              </td>
              <td className="price__num">{DiscountedCost.B6}</td>
            </tr>
            <tr>
              <td>
                Новый дом 4 <span>х</span> - местный / комфорт
              </td>
              <td className="price__num">
                <del>{FullCost.A7}</del>
              </td>
              <td className="price__num">{DiscountedCost.B7}</td>
            </tr>
          </tbody>
        </table>

        <p>СКИДКИ !!!</p>
        <p>{sail} при раннем бронировании, первые 10 мест</p>
        <p>
          50% от полной стоимости детям до 12-ти
          <br />
          (остальные скидки не действуют)
        </p>

        <button className="price__btn1"></button>
        <button className="price__btn2"></button>
        <img className="price__snowflake" src="./image/snowflake.png" alt="snowflake" />
      </section>
    </div>
  );
}

export default Price;
