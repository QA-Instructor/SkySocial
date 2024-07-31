import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/banner.css'
import banner from '../resources/banner.json';


const Banner = () => {
  const bannerView = banner.slides.map((banner) => { 
    return <Carousel.Item>
      <img
          className='carousel-img'
          src={banner.image}
          alt="Second Slide"
          height="200"
      />
      <Carousel.Caption>
        <h3>{banner.eventTitle}</h3>
      </Carousel.Caption>
      
    </Carousel.Item>
  });

  return (
    <Carousel>
      {bannerView}
    </Carousel>
  );
}
export default Banner;