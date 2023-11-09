import React from 'react';
import { useInView } from 'react-intersection-observer';


function Table() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  
  return (
    
    <div ref={ref}>
      
      <div className={`table ${inView ? 'active' : ''}`}>
        {/* <a href="#">Расписание фестиваля</a>
        <img className="table__img none" src="./image/table1.jpg" alt="table" ></img> */}
       
       
       <p className='table__title'>И главное: Духовная атмосфера<br/> настоящего действующего ашрама.
            </p>
      </div>
    </div>
  );
}

export default Table;
