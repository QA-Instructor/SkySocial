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


const DiscoveryPage = () => {

  let navigate = useNavigate();

  const [eventList, setEventList] = useState([]);


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




  const eventTiles = eventList.map((event) => {
    return <EventTile title={event.eventTitle} image={event.image} tags={event.tags} />
  });

  return (
    <>
      <Banner />
      <EventsRail>
        {eventTiles}
      </EventsRail>
      <EventsRail>
        {eventTiles}
      </EventsRail>
    </>
  );
};

export default DiscoveryPage;