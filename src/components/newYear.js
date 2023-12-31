import React from 'react'
import { useInView } from 'react-intersection-observer';


function NewYear() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <section id='newYear' className={`newYear ${inView ? 'active' : ''}`}>
  <div className="newYear__date">
    <h3>29–5</h3>
    <div className="newYear__month">
      <button className="newYear__date-dec">декабря</button>
    <button className="newYear__date-jun">января</button>
    </div>
  </div>
  <div className="newYear__snowflake">
    <img src="./image/snowflake.png" alt="snowflake"/>
  </div>
  <div className="newYear__title">
    <h3> Новогодний фестиваль<br/> в ашраме!</h3>
  </div>
  <div className="newYear__year">
    <img src="./image/year.png" alt="year"/>
  </div>
</section>
    </div>
  )
}

export default NewYear
