import React from 'react';
import { useState } from 'react';
import '../resources/banner.json';
import events from '../resources/skySocial.json';
import EventTile from './EventTile'
import Banner from './Banner';
import EventsRail from './EventsRail';
import '../CSS/DiscoveryPage.css';


const DiscoveryPage = ( ) => {

  const [eventList, setEventList] = useState([]);

  const eventTiles = events.events.map((event) => {
                        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags}/>
  });

  return (  
    <>
    <div className='discovery-page-container'>
        <Banner/>
        <div className='discovery-page-content'>
          <div className='discoverySport-rail-container'>
            <h1>Sports</h1>
            <EventsRail>{eventTiles}</EventsRail>
          </div>
          <div className='discoverySocial-rail-container'>
          <h1>Social</h1>
            <EventsRail>{eventTiles}</EventsRail>
          </div>
        </div>
    </div>
    </>
  );
};

export default DiscoveryPage;