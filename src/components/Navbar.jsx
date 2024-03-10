import React from 'react'
import styled from 'styled-components'

function Navbar() {
  const Wrapper  = styled.div`
      
  h3{
    font-size : 1.4vw;
    font-weight: bold;
    color: white;
  }

  img{
    height:60px;
    width:60px;
  }

  @media(max-width: 600px){

    img{
      height:40px;
      width:40px;
    }
  }
  `;

  return (
    <Wrapper className='h-[1/6] w-full flex justify-between items-center px-7 py-5 md-px-5'>
    
      <div className='flex items-center gap-2 md-gap-3'>
        <img src="src\assets\images\logo.png" alt=""  className=""/>
      <p className='text-[2.5vw] md:text-[1.5vw] text-white font-bold '>
              BLACK SOIL <br /> THEATRE
      </p>
      </div>
        <div className='flex gap-10 items-center'>
              <a href="#" className='hidden md:text-[1.4vw] md:block'><h3>HOME</h3></a>
              <a href="#" className='hidden md:text-[1.4vw] md:block'><h3>ABOUT</h3></a>
              <a href="#" className='hidden md:text-[1.4vw] md:block'><h3>GALLERY</h3></a>
              <a href="#" className='hidden md:text-[1.4vw] md:block'><h3>CONTACT US</h3></a>
              <a href="#" className='md:hidden lg:hidden pr-px-[50px]'><i className="ri-menu-line text-white text-[3vw] font-bold "></i></a>
        </div>
        
    </Wrapper>

       
  )
}

export default Navbar