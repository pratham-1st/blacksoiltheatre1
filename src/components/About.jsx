import React from 'react'

function About() {
  return (
    <>
    <div className='h-[25vh] md:h-[70vh] w-full flex  bg-zinc-950'>
         <div className='h-full w-1/2'>
              <p className='text-[2.5vw] md:text-[2.1vw] text-white flex justify-center items-center p-5 md:p-10 font-semibold'>
              Black Soil Theatre is an active and creative theater organization in the Vidarbha region. As the name itself suggests, this theatre group is deeply rooted in the cultural roots of the Black Soil of its region and country from where creationism has flowered. 
              </p>
         </div>
         <div className='h-full w-1/2 flex justify-center items-center'> 
               <img className='h-28 w-36 md:h-96 md:w-auto pr-px-[20px]' src="src\assets\images\ab1.jpg" alt="" />
         </div>
    </div>

    <div className='h-[30vh] md:h-[70vh] w-full flex'>
    <div className='h-full w-1/2 flex justify-center items-center'> 
      <img className='h-28 w-36 md:h-96 md:w-auto ' src="src\assets\images\ab2.jpg" alt="" />
    </div>
    <div className='h-full w-1/2 '>
     <p className='text-[2.2vw] md:text-[2.1vw] text-white flex justify-center items-center p-5 md:p-10 mt-5 md:mt-0 font-semibold'>
     This region has been facing the deep pains of farmer problems. Among them is also the village of 'Waifad', known as the 'center of farmer-suicide'. The 'Black Soil Theatre' has been distinguished from time to time for staging various plays as well as intensive events for theatrical workshops, theatrical lectures / seminars and cultural events.
     </p>
    </div>
    </div>
    </>
  )
}

export default About