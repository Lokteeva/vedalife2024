import React from 'react'
import Iframe from 'react-iframe'
import { useInView } from 'react-intersection-observer';


function Video() {
  
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (

    <div ref={ref}>
      <Iframe url="https://vk.com/video_ext.php?oid=-42933644&id=456239337&hd=2"
        id=""
        className={`video ${inView ? 'active' : ''}`}
        display="block"
        position="relative"/>
    
    </div>
  )
}
export default Video

