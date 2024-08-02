import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/eventTile.css';

const EventTile = (props) => {

    const [event, setEvent] = useState({});
  
    const tags = props.tags.map((tag) => {
      return <b key={tag}>#{tag} </b>
    });

    const onTileClick = () => {
      //add useEffect to make the request
      props.onClick();
    }

    return (
      <div id="cardContainer"   
          className="card shadow bg-white rounded zoom clickable" 
          style={{"min-width": props.width?props.width:"250px","max-width":props.width?props.width:"250px"}} 
          onClick={onTileClick}>
          <img className="card-img-top" src={props.image} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p>{tags}</p>
            <button className='btn btn-outline-primary event-tile-submit-button'>Book</button>
          </div>
    </div>
    )
}

export default EventTile