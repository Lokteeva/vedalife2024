import React from 'react';
import Snow from 'react-snow-effect';

function Header() {
  return (
    <div>
      <Snow />
      <header className="header ">
        <div className="header__line" />
        <div className="header__box">
          <div className="header__logo1">
            <img src="./image/logo1.png" alt="logo" />
          </div>
          <div className="header__social-box">
            <div className="header__social">
              <div className="social__vk">
                <a href="https://vk.com/vedalife_sochi">
                  <img className="vk" src="./image/social/vk-svgrepo-com.svg"></img>
                </a>
              </div>
              <div className="social__instagram">
                <a href="https://instagram.com/vedalife">
                  <img
                    className="instagram"
                    src="./image/social/instagram-167-svgrepo-com.svg"></img>
                </a>
              </div>
            </div>

            <div className="header__tel">
              <a href="tel:+79631626238 ">+7 963 162 6238 </a>
            </div>
          </div>

          <nav className="header__nav">
            <ul>
              <li>
                <a href="#footer">о нас</a>
              </li>
              <li>
                <a href="#newYear">фестиваль</a>
              </li>
              <li>
                <a href="#programmFestival">программа</a>
              </li>
              <li>
                <a className="registraition__button" href="#registraition">
                  регистрация
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
