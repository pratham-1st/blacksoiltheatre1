import React from 'react'

function Social() {
  return (
    <div className='h-24 md:h-36 md:h-36 w-full flex flex-col justify-center items-center'>
        <h1 className='text-[4vw] md:text-[2.5vw] font-bold text-white'>Follow us on Socials!</h1>
           <div className='flex gap-5' >
           <i className='ri-facebook-circle-fill text-[2vw] text-white'></i>
           <i className='ri-instagram-fill text-[2vw] text-white'></i>
           <i className='ri-youtube-fill text-[2vw]  text-white'></i>
           <i className='ri-twitter-x-fill text-[2vw]  text-white'></i>
           </div>
    </div>
  )
}

export default Social