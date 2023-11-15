import React from 'react';
import Iframe from 'react-iframe';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Reviews() {
  return (
    <div className="reviews">
      <h3>ОТЗЫВЫ Участников</h3>

      <OwlCarousel className='owl-theme' video={true} dots={false} margin={10} nav items={1}>
    <div className='item'>
    <iframe src="https://vk.com/video_ext.php?oid=-42933644&id=456239406&hd=2" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </div>

    <div className='item'>
    <iframe src="https://vk.com/video_ext.php?oid=-42933644&id=456239244&hd=2"  allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </div>

    <div className='item'>
    <iframe src="https://vk.com/video_ext.php?oid=-42933644&id=456239405&hd=2" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </div>

    <div className='item'>
    <iframe src="https://vk.com/video_ext.php?oid=-42933644&id=456239220&hd=1"  allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
    </div>
</OwlCarousel>

      <img className="reviews__img-snowflake" src="./image/snowflake.png" alt="snowflake" />
    
    </div>
  );
}

export default Reviews;
