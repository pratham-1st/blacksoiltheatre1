import React from 'react'

function About() {
  return (
    <>
    <div className='h-[28vh] md:h-[70vh] w-full flex  bg-zinc-950'>
         <div className='h-full w-1/2 flex justify-center items-center'>
              <p className='text-[2.9vw] md:text-[2.1vw] text-white text-ellipsis  px-4 py-5 md:p-10 font-semibold'>
              Black Soil Theatre is an active and creative theater organization in the Vidarbha region. As the name itself suggests, this theatre group is deeply rooted in the cultural roots of the Black Soil of its region and country from where creationism has flowered. 
              </p>
         </div>
         <div className='h-full w-1/2 flex justify-center items-center'> 
               <img className='h-32 w-38 md:h-96 md:w-auto p-2' src="https://i.ibb.co/sVMdKJs/ab1.jpg" alt="" />
         </div>
    </div>

    <div className='h-[36vh] md:h-[70vh] w-full flex'>
    <div className='h-full w-1/2 flex justify-center items-center'> 
      <img className='h-32 w-38 md:h-96 md:w-auto p-2' src="https://i.ibb.co/dfM5NBM/ab2.jpg" alt="" />
    </div>
    <div className='h-full w-1/2 flex justify-center items-center'>
     <p className='text-[2.9vw] md:text-[2.1vw] text-white  p-4 md:p-10  md:mt-0 font-semibold'>
     This region has been facing the deep pains of farmer problems. Among them is also the village of 'Waifad', known as the 'center of farmer-suicide'. The 'Black Soil Theatre' has been distinguished from time to time for staging various plays as well as intensive events for theatrical workshops, theatrical lectures / seminars and cultural events.
     </p>
    </div>
    </div>
    </>
  )
}

export default About