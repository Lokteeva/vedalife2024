import React from 'react'

function footer() {
  return (
    <div>
        <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo1">
        <img src="./image/logo1.png" alt="logo"/>
      </div>

      <div className="footer__content">
        <div className="footer__adress">
          <h3>Контакты: Сочи, ул. Фурманова, д. 38</h3>
          <h3>e-mail: <a href="mailto:ashramsochi@gmail.com"
            >Ashramsochi@gmail.com</a></h3>
        </div>
  
       <div className="footer__info">
        <div className="footer__social">
          <div >
            <a href="#"><img className="footer__whatsapp" src="./image/social/whatsapp-svgrepo-com.svg"></img></a>
            <a href="#"><img className="footer__telegram" src="./image/social/telegram-svgrepo-com.svg"></img></a>
          </div>
          <div className="footer__social">
            <a href="#"><img className="footer__vk" src="./image/social/vk-svgrepo-com.svg"></img></a>
            <a href="#"><img className="footer__instagram" src="./image/social/instagram-167-svgrepo-com.svg"></img></a>
          </div>
        </div>
          <div className="footer__tel">
            <div>
              <a href="tel:+79884876527">+7 988 487 6527</a>
            </div>
            <a href="#">@ashramsochi</a>
          </div>
       </div>
       
      </div>

      <div>
        <div className="footer__logo2">
          <img src="./image/logo4.png" alt="logo"/>
        </div>
        <div className="footer__logoPuri">
          <img src="./image/NewDjPuri.png" alt="logo"/>
        </div>
      </div>
    </div>

    <table class="iksweb">
	<tbody>
		<tr>
			<td colspan="3"><h3>Контакты: Сочи, ул. Фурманова, д. 38</h3></td>
		</tr>
		<tr>
			<td colspan="3"><h3>e-mail: <a href="mailto:ashramsochi@gmail.com"
            >Ashramsochi@gmail.com</a></h3></td>
		</tr>
		<tr>
			<td> <a href="#"><img width={25} className="footer__whatsapp" src="./image/social/whatsapp-svgrepo-com.svg"></img></a></td>
			<td><a href="#"><img width={25} className="footer__telegram" src="./image/social/telegram-svgrepo-com.svg"></img></a></td>
			<td><a href="tel:+79884876527">+7 988 487 6527</a></td>
		</tr>
		<tr>
			<td><a href="#"><img width={25} className="footer__vk" src="./image/social/vk-svgrepo-com.svg"></img></a></td>
			<td><a href="#"><img width={25} className="footer__instagram" src="./image/social/instagram-167-svgrepo-com.svg"></img></a></td>
			<td> <a href="#">@ashramsochi</a></td>
		</tr>
	</tbody>
</table>

  </footer>
    </div>
  )
}

export default footer
