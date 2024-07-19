import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/eventTile.css';

const EventTile = (props) => {
    const tags = props.tags.map((tag) => {
      return <b key={tag}>#{tag} </b>
    });
    return (
      <div id="cardContainer" className="card shadow bg-white rounded zoom clickable" style={{width: "18rem"}} onClick={() => alert(props.title)}>
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