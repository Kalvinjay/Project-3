import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CustomCarousel() {
  return (
    <Carousel showArrows={true}>
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

      {/* <div className="carousel-thumbnails">

        <img src="/2013.png" alt="JRA 2013"/>
        <img src="/2011Red.png" alt="JRA 2011 Red" />
        <img src="/2010.png" alt="JRA 2010"  />
        <img src="/2009Girls.png" alt="JRA 2009" />

      </div> */}
    </Carousel>
  );
}

export default CustomCarousel;
