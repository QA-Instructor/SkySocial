import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/eventTile.css';
import axios from 'axios';

const EventTile = (props) => {

    const [event, setEvent] = useState({});
    const [eventSelected, setEventSelected] = useState(false);

  
    const tags = props.tags.map((tag) => {
      return <b key={tag}>#{tag} </b>
    });

    const onTileClick = () => {
      setEventSelected(!eventSelected);
    }

    // useEffect(() => {
    //   if (!eventSelected) return;

    //   axios.get()

    // }, [eventSelected]);

    return (
      <div id="cardContainer"   
          className="card shadow bg-white rounded zoom clickable" 
          style={{"min-width": props.width?props.width:"200px","max-width":props.width?props.width:"200px"}} 
          onClick={onTileClick}>
          <img className="card-img-top" src={props.image} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p>{tags}</p>
            <button className='btn btn-outline-primary'>Book</button>
          </div>
    </div>
    )
}

export default EventTile