import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/eventTile.css';
import axios from 'axios';
import config from '../config.json';

const EventTile = (props) => {

    const tags = props.tags.map((tag) => {
      return <b key={tag}>#{tag} </b>
    });

    const onTileClick = () => {
      props.onClick(props.id);
    }

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    };

    

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