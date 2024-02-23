import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CustomCarousel.css'; 

function CustomCarousel() {
  return (
    <Carousel showArrows={true}>
      <div className="carousel-container">
      <div>
        <img src="/2013.png" alt="JRA 2013" />
      </div>
      <div>
        <img src="/2011Red.png" alt="JRA 2011 Red" />
      </div>
      <div>
        <img src="/2010.png" alt="JRA 2010" />
      </div>
      <div>
        <img src="/2009Girls.png" alt="JRA 2009" />
      </div>
      </div>
    </Carousel>
  );
}

export default CustomCarousel;
