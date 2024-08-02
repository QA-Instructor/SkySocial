import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../resources/banner.json';
import events from '../resources/skySocial.json';
import EventTile from './EventTile'
import Banner from './Banner';
import EventsRail from './EventsRail';
import '../CSS/DiscoveryPage.css';
import axios from 'axios';
import config from '../config.json';
import EventModal from './EventModal';


const DiscoveryPage = () => {

  let navigate = useNavigate();

  const [eventList, setEventList] = useState([]);
  const [show, setShow] = useState(false);

  const eventTiles = events.events.map((event) => {


  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
  };

  console.log(headers)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    axios.get(config.backend.SERVER_URL + '/getAllEvents', {headers}).then((response) => {
      console.log(response.data)
      setEventList(response.data);

    }).catch((err) => {
      if (err.response.status === 403) {
        navigate('/login');
      }

    });
  }, [navigate]);




    return <EventTile title={event.eventTitle} image={event.image} tags={event.tags} onClick={() => setShow(true)}  />
  });



  return (
    <>
    <div className='discovery-page-container'>
        <Banner/>
        <div className='discovery-page-content'>
          {show && <EventModal event={events.events[1]} showFlag={()=>{setShow(false)}} />}
          <div className='discovery-rail-container'>
            <h1>Sports</h1>
            <EventsRail>{eventTiles}</EventsRail>
          </div>
          <div className='discovery-rail-container'>
          <h1>Social</h1>
            <EventsRail>{eventTiles}</EventsRail>
          </div>
        </div>
    </div>
    </>
  );
};

export default DiscoveryPage;