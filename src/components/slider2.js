import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slader2() {
  return (
    <div className="slider" >
            <h2>НОВЫЙ КОРПУС:</h2>
      <OwlCarousel className="owl-theme" margin={10} dots={false} nav items={1}>
        <div className="item">
          <img src="./image/room/001.jpg" />
        </div>
        <div className="item">
          <img src="./image/room/002.jpg" />
        </div>
        <div className="item">
        <img src="./image/room/003.jpg"/>
        </div>
        <div className="item">
          <img src="./image/room/004.jpg" />
        </div>
        <div className="item">
          <img src="./image/room/005.jpg" />
        </div>
        <div className="item">
        <img src="./image/room/006.jpg"/>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Slader2;

