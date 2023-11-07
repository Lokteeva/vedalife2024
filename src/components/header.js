import React from 'react'

function Header() {
  return (
    <div>
      <header className="header ">
      <div className="header__line"></div>
      <div className="header__box">
        <div className="header__logo1">
          <img src="./image/logo1.png" alt="logo"/>
        </div>
        <div className="header__logo2">
          <img src="./image/logo2.png" alt="logo"/>
        </div>
        {/* <div className="header__logo3">
          <img src="./image/logo3.png" alt="logo"/>
        </div> */}
        <div className="header__social-box">
          <div className="header__social">
            {/* <div className="social__whatsapp">
              <a href="#"><img className="whatsapp" src="./image/social/whatsapp-svgrepo-com.svg"></img></a>
            </div> 
            <div className="social__telegram">
              <a href="#"><img className="telegram" src="./image/social/telegram-svgrepo-com.svg"></img></a>
             </div>  */}
             <div className="social__vk">
              <a href="#"><img className="vk" src="./image/social/vk-svgrepo-com.svg"></img></a>
             </div> 
             <div className="social__instagram">
              <a href="#"><img className="instagram" src="./image/social/instagram-167-svgrepo-com.svg"></img></a>
             </div>        
          </div>

          <div className="header__tel">
            <a href="tel:+79884876527">+7 988 487 6527</a>
          </div>
        </div>
        
        <nav className="header__nav">
<ul>
  <li><a href='#footer'>о нас</a></li>
  <li><a href='#newYear'>фестиваль</a></li>
  <li><a href='#programmFestival'>программа</a></li>
  <li><a  className="registraition__button" href="#registraition">регистрация</a></li>
</ul>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header
