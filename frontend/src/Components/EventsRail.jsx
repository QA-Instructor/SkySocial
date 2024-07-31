import React, { useRef } from 'react';
import '../resources/eventsRail.css';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types'
export const EventsRail = ({children,props}) => {
    let scrl = useRef(null);
    const [scrollX, setScrollX] = React.useState(0);
    const [scrollEnd, setScrollEnd] = React.useState(false);

    function slide(shift){
      scrl.current.scrollLeft += shift;
      setScrollX(scrollX + shift);
      if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    };
  
    const checkScrollIsAtEnd = () => {
      setScrollX(scrl.current.scrollLeft);
      if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    };
  
    return (
      <div fluid className='item-slider-container'>
        <div className='item-slider'>
          <div  onClick={() => slide(-230)} className={`left-arrow-left ${(scrollX < 1) ? 'is-disabled-hide' : ''}`}>
            <MdArrowBackIos size="70px" />
          </div>
          
          <div ref={scrl} onScroll={checkScrollIsAtEnd} className="item-container">
            {children}
          </div>
          <div className={`right-arrow-right ${(!scrollEnd) ? '' : 'is-disabled-hide'}`} onClick={() => slide(+230)}>
            <MdArrowForwardIos size="70px" />
          </div>
        </div>
      </div>
    );
};


export default EventsRail;
