import React, { useRef } from "react";
import Slider from "react-slick";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container h-64 bg-zinc-100 ">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        
          <img className='h-52 w-auto' src="src\assets\images\card.png" alt="" srcset="" />
        
        
          <img src="src\assets\images\card.png" alt="" srcset="" />
        
        
          <img src="src\assets\images\card.png" alt="" srcset="" />
        
        
          <img src="src\assets\images\card.png" alt="" srcset="" /> 
        
        
          <img src="src\assets\images\card.png" alt="" srcset="" />
        
        
          <img src="src\assets\images\card.png" alt="" srcset="" />
        

      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
