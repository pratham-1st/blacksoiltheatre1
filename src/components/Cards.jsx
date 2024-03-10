import React from 'react'
import styled from 'styled-components'

function Cards() {
  const Wrapper = styled.div`
     h1:hover{
      color: orange;
      transition: 0.3s;
     }
      
  `;

  return (
    <div className='h-52 md:h-96 w-full flex '>
      {/* Card 1 */}
        <div className='h-full w-8/12 flex justify-center items-center flex-col pl-3 md:pl-0'>
            <iframe  className='h-5/6 w-5/6 ' width="560" height="315" src="https://www.youtube.com/embed/xTt2ewh0kCY?si=RwB4EcCL_VI7HSQD" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      {/* Card 2 */}
        <div className='h-full w-4/12 flex flex-col justify-center items-center pr-7 md:pr-3'>
        <h1 className='text-[2.3vw] font-bold text-white'>
              Watch us on YouTube!
        </h1>           
        <div className='flex gap-2 md:gap-5 mt-3 md:mt-5 items-center flex-col md:flex-row'>
          <img src="src\assets\images\logo.png" alt="" className='h-16 w-16 md:h-28 md:w-28'/>
          <a href="www.youtube.com/@BlackSoilTheatre">
          <button className='text-[1.5vw] md:text-[1.7vw] h-7 md:h-12 rounded-full font-bold text-white bg-red-500 px-2 pb-py-2 border-2'>
            Subscribe
          </button></a> 
        </div>
        </div>
    </div>
  )
}

export default Cards