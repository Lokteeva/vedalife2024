import React from 'react'
import { useInView } from 'react-intersection-observer';


function Footer() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
        <footer id='footer' className={`footer ${inView ? 'active' : ''}`}>
    <div className="footer__container">
     <div className="footer__container2">
     <div className="footer__logo1">
        <img src="./image/logo1.png" alt="logo"/>
      </div>

      <div className="footer__content">
        <table className="footer__info">
	<tbody>
		<tr>
			<td colSpan="3"><h3>Контакты: Сочи, ул. Фурманова, д. 38</h3></td>
		</tr>
		<tr>
			<td colSpan="3"><h3>e-mail: <a href="mailto:ashramsochi@gmail.com"
            >Ashramsochi@gmail.com</a></h3></td>
		</tr>
		<tr>
			{/* <td> <a href="#"><img width={25} className="footer__whatsapp" src="./image/social/whatsapp-svgrepo-com.svg"></img></a></td> */}
      <td><a href="https://vk.com/vedalife_sochi"><img width={25} className="footer__vk" src="./image/social/vk-svgrepo-com.svg"></img></a></td>
			{/* <td><a href="#"><img width={25} className="footer__telegram" src="./image/social/telegram-svgrepo-com.svg"></img></a></td> */}
			<td><a href="tel:+79884876527" className='footer__tel'>+7 988 487 6527</a></td>
		</tr>
		<tr>
			
			<td><a href="https://instagram.com/vedalife"><img width={25} className="footer__instagram" src="./image/social/instagram-167-svgrepo-com.svg"></img></a></td>
			<td> <a href="#" className='footer__tel'>@ashramsochi</a></td>
		</tr>
	</tbody>
        </table>
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

<a href='#home'><img className="up" src="./image/up.png" alt='up'/></a>
<a href="#footer"><img className="down" src="./image/up.png" alt='down'/></a>
  </footer>
    </div>
  )
}

export default Footer
