import React from 'react';
import { useInView } from 'react-intersection-observer';

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
            Первые 10 мест по скидке 7500₽ <br />+ 1 день отдыха бесплатно
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
              <td className="price__num"><del>30 000</del></td>
              <td className="price__num">22 500</td>
            </tr>
            <tr>
              <td>
                4 <span>х</span> - местный
              </td>
              <td className="price__num"><del>32 000</del></td>
              <td className="price__num">25 500</td>
            </tr>
            <tr>
              <td>
                2 <span>х</span> - местный
              </td>
              <td className="price__num"><del>40 000</del></td>
              <td className="price__num">32 500</td>
            </tr>
            <tr>
              <td>
                {' '}
                <span>доп. место в </span> 4 <span>х</span> местном
              </td>
              <td className="price__num"><del>28 500</del></td>
              <td className="price__num">21 000</td>
            </tr>
            <tr>
              <td>
                4 <span>х</span> - местный / комфорт
              </td>
              <td className="price__num"><del>45 000</del></td>
              <td className="price__num">37 500</td>
            </tr>
            <tr>
              <td>
                Новый дом 2 <span>х</span> - местный / комфорт
              </td>
              <td className="price__num"><del>47 000</del></td>
              <td className="price__num">39 500</td>
            </tr>
            <tr>
              <td>
                Новый дом 4 <span>х</span> - местный / комфорт
              </td>
              <td className="price__num"><del>37 000</del></td>
              <td className="price__num">29 500</td>
            </tr>
          </tbody>
        </table>

        <p>7500₽ при раннем бронировании, первые 10 мест</p>
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
