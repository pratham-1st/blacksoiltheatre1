import React from 'react';

const Carousel = () => {
    return (

<div id="default-carousel" className="relative w-full p-10" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-[80vh]">
    
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/6QtbjxQw/Whats-App-Image-2024-06-05-at-23-54-31-96b4c236.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>        
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/90KNJ4DN/Whats-App-Image-2024-06-05-at-23-56-02-6149a49b.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/SQv5yPg7/Whats-App-Image-2024-06-05-at-23-56-01-5e9deeb2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>
  
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/bwXBntcZ/Whats-App-Image-2024-06-05-at-23-56-01-b52c7100.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/8zhnmzNt/Whats-App-Image-2024-06-05-at-23-56-01-f29e2e50.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/dtZfD9XM/Whats-App-Image-2024-06-05-at-23-56-02-5eb356a3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>
    </div>
  
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    </div>

    );
};

export default Carousel;