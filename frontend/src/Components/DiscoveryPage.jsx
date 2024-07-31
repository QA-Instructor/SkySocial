import React from 'react';
import '../resources/banner.json';
import events from '../resources/skySocial.json';
import EventTile from './EventTile'
import Banner from './Banner';
import EventsRail from './EventsRail';
import '../CSS/DiscoveryPage.css';


const DiscoveryPage = () => {
  const eventTiles = events.events.map((event) => {
                        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags}/>
                    });
  return (
    <>
    <Banner className = 'banner' />
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