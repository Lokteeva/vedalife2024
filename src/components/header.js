import React from 'react'

function Header() {
  return (
    <div>
      <header className="header">
      <div className="header__line"></div>
      <div className="header__box">
        <div className="header__logo1">
          <img src="./image/logo1.png" alt="logo"/>
        </div>
        <div className="header__logo2">
          <img src="./image/logo2.png" alt="logo"/>
        </div>
        <div className="header__logo3">
          <img src="./image/logo3.png" alt="logo"/>
        </div>
        <div className="header__social-box">
          <div className="header__social">
            <div className="social__whatsapp">
              <a href="#"><img className="whatsapp" src="./image/social/whatsapp.svg"></img></a>
            </div> 
            <div className="social__telegram">
              <a href="#"><img className="telegram" src="./image/social/telegram.svg"></img></a>
             </div> 
             <div className="social__vk">
              <a href="#"><img className="vk" src="./image/social/vk.svg"></img></a>
             </div> 
             <div className="social__instagram">
              <a href="#"><img className="instagram" src="./image/social/instagram.svg"></img></a>
             </div>        
          </div>

          <div className="header__tel">
            <a href="tel:+79884876527">+7 988 487 6527</a>
          </div>
        </div>
        
        <nav className="header__nav">
<ul>
  <li>о нас</li>
  <li>фестиваль</li>
  <li>программа</li>
  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdRaZpZQktevoHTpFihjeujw8oefjtg63IetGSHUyPYMuJrWw/viewform">регистрация</a></li>
</ul>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header
