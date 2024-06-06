import React from 'react'

function Social() {
  return (
    <div className='h-24 md:h-36 md:h-36 w-full flex flex-col justify-center items-center'>
        <h1 className='text-[6vw] md:text-[2.5vw] font-bold text-white'>Follow us on Socials!</h1>
           <div className='flex gap-5' >
           <a href="https://www.facebook.com/blacksoiltheatre"><i className='ri-facebook-circle-fill text-[4vw] md:text-[1.5vw] text-white'></i></a>
           <a href="https://www.instagram.com/blacksoiltheatre/"><i className='ri-instagram-fill text-[4vw] md:text-[1.5vw] text-white'></i></a>
           <a href="https://www.youtube.com/@BlackSoilTheatre"><i className='ri-youtube-fill text-[4vw] md:text-[1.5vw]  text-white'></i></a>
           <a href="https://twitter.com/BiploveSurabhi"><i className='ri-twitter-x-fill text-[4vw] md:text-[1.5vw] text-white'></i></a>
           </div>
    </div>
  )
}

export default Social