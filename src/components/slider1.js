import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slader1() {
  return (
    <div className="slider" >
      <h2>ФОТО НОМЕРОВ:</h2>
      <OwlCarousel className="owl-theme" margin={10} dots={false} nav items={1}>
        <div className="item">
          <img src="./image/room/01.jpg" />
        </div>
        <div className="item">
          <img src="./image/room/02.jpg" />
        </div>
        <div className="item">
        <img src="./image/room/03.jpg"/>
        </div>
        <div className="item">
          <img src="./image/room/04.jpg" />
        </div>
        <div className="item">
          <img src="./image/room/05.jpg" />
        </div>
        <div className="item">
        <img src="./image/room/06.jpg"/>
        </div>
      </OwlCarousel>

      <img className="slider__img-snowflake1" src="./image/snowflake.png" alt="snowflake" />
      <img className="slider__img-snowflake2" src="./image/snowflake.png" alt="snowflake" />
     
    </div>
  );
}

export default Slader1;
