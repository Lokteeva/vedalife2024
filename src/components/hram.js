import React from 'react';
import Iframe from 'react-iframe';
import { useInView } from 'react-intersection-observer';
import video from '../video/01.mp4'


function Hram() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="hram">
      <h3 className={` ${inView ? 'active' : ''}`}>О НАШЕМ АШРАМЕ </h3>
      <Iframe
        url="https://vk.com/video_ext.php?oid=-42933644&id=456239349&hd=2"
        id=""
        className={`video ${inView ? 'active' : ''}`}
        display="block"
        position="relative"
      />

      <div className={`hram__text ${inView ? 'active' : ''}`}>
      <ul>
        <li>🔸 Большая, огороженная зона отдыха, утопающая в зелени и цветах</li>
        <li>🔹 Парковка с видеонаблюдением и видеонаблюдение по всему ашраму</li>
        <li>🔸 Собственное кафе и зоны отдыха на территории</li>
        <li>🔹 До моря 20 минут пешком</li>
        <li>🔸 WI-FI на всей территории</li>
        <li>🔹 Безопасная детская площадка</li>
        <li>🔸 Беседка для общения и проведения ягий (огненный церемоний)</li>
      </ul>
      </div>

      <img className="hram__img" src="./image/img9.jpg" alt="img" />

      <video className='videoRoot' width="180" height="320" controls >
      <source src={video} type="video/mp4"/>
     </video>
      

      <img className="hram__img-snowflake" src="./image/snowflake.png" alt="snowflake" />
      <img className="hram__img-snowflake1" src="./image/snowflake.png" alt="snowflake" />
      <img className="hram__img-snowflake2" src="./image/snowflake.png" alt="snowflake" />
    </div>
  );
}

export default Hram;
