import React, { useState, useRef } from 'react';
import '../resources/eventsRail.css';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from 'react-bootstrap';

export const EventsRail = ({children}) => {
    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);
  
    const slide = (shift) => {
      scrl.current.scrollBy({
        left: shift,
        behavior: 'smooth'
      });
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);
      if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    };
  
    const checkScrollIsAtEnd = () => {
      setscrollX(scrl.current.scrollLeft);
      if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    };
  
    return (
      <Container fluid className='item-slider-container'>
        <div className='item-slider'>
          <div onClick={() => slide(-230)} className={`left-arrow-left ${(scrollX < 1) ? 'is-disabled-hide' : ''}`}>
            <MdArrowBackIos size="70px" />
          </div>
          <div ref={scrl} onScroll={checkScrollIsAtEnd} className="item-container">
            {children}
          </div>
          <div className={`right-arrow-right ${(!scrollEnd) ? '' : 'is-disabled-hide'}`} onClick={() => slide(+230)}>
            <MdArrowForwardIos size="70px" />
          </div>
        </div>
      </Container>
    );
};

export default EventsRail;
