import React from 'react';
// import '../resources/banner.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src="https://www.bscglasgow.co.uk/images/2023/womens5/11.jpg"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>Football</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src="https://www.luxurytravelmag.com.au/wp-content/uploads/2022/11/AudleyPublicHouse_Interior_Sim-Canetty-Clarke.jpg"
          alt="Second Slide"
        />
        <Carousel.Caption>
         <h3>Pub Social</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
          alt="Thrid Slide"
        />
        <Carousel.Caption>
          <h3>Coffee chats with local coffee beans toaster</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
