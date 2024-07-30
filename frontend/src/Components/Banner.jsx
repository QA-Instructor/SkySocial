import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>‹</button>
      <div className="carousel-slide">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].eventTitle} />
        <div className="carousel-caption">
          <h3>{slides[currentIndex].eventTitle}</h3>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;

