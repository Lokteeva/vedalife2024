import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slader1() {
  return (
    <>
    <div className='center title-pink padding-text'>
    <p className=' '>
        Получите реальный опыт проживания в настоящем действующем ведическом ашраме в режиме
        фестиваля. <br />
        Вы можете выбрать удобный вариант размещения пока этот выбор есть, в ашраме{" "}
        <strong>всего 50 мест!</strong>
      </p>
    </div>
      <div className="slider">
        <h2>ФОТО НОМЕРОВ:</h2>
        <OwlCarousel className="owl-theme" margin={10} dots={false} nav items={1}>
          <div className="item">
            <img src="./image/room/01.jpg" />
          </div>
          <div className="item">
            <img src="./image/room/02.jpg" />
          </div>
          <div className="item">
            <img src="./image/room/03.jpg" />
          </div>
          <div className="item">
            <img src="./image/room/04.jpg" />
          </div>
          <div className="item">
            <img src="./image/room/05.jpg" />
          </div>
          <div className="item">
            <img src="./image/room/06.jpg" />
          </div>
        </OwlCarousel>

        <img className="slider__img-snowflake1" src="./image/snowflake.png" alt="snowflake" />
        <img className="slider__img-snowflake2" src="./image/snowflake.png" alt="snowflake" />
      </div>
    </>
  );
}

export default Slader1;
