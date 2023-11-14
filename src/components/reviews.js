import React from 'react'
import Iframe from 'react-iframe'
import { useInView } from 'react-intersection-observer';



function Reviews() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    
    <div ref={ref} className='reviews'>
      <h3  className={` ${inView ? 'active' : ''}`}>ОТЗЫВЫ Участников</h3>
    <Iframe url="https://vk.com/video_ext.php?oid=-42933644&id=456239406&hd=2"
      id=""
      className={`video ${inView ? 'active' : ''}`}
      display="block"
      position="relative"
      />
      <Iframe url="https://vk.com/video_ext.php?oid=-42933644&id=456239244&hd=2"
      id=""
      className={`video ${inView ? 'active' : ''}`}
      display="block"
      position="relative"
      /><Iframe url="https://vk.com/video_ext.php?oid=-42933644&id=456239405&hd=2"
      id=""
      className={`video ${inView ? 'active' : ''}`}
      display="block"
      position="relative"
      /><Iframe url="https://vk.com/video_ext.php?oid=-42933644&id=456239220&hd=1"
      id=""
      className={`video ${inView ? 'active' : ''}`}
      display="block"
      position="relative"
      />

<img className="reviews__img-snowflake" src="./image/snowflake.png" alt="snowflake" />
<img className="reviews__img-snowflake-video1" src="./image/snowflake.png" alt="snowflake" />
<img className="reviews__img-snowflake-video2" src="./image/snowflake.png" alt="snowflake" />
<img className="reviews__img-snowflake-video3" src="./image/snowflake.png" alt="snowflake" />
  
  </div>
  )
}

export default Reviews
