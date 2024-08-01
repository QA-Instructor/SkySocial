import React from 'react'
import { useState } from 'react'
import events from '../resources/skySocial.json'
import EventsRail from './EventsRail'
import EventTile from './EventTile'
import '../resources/myEvents.css'
export const MyEvents = () => {

    const [upcomingEventList, setUpcomingEventList] = useState([]);
    const [bookedEventList, setBookedEventList] = useState([]);
    const [createdEventList, setCreatedEventList] = useState([]);

    const upcomingEventTiles = events.events.map((event) => {
        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags} width = {"30%"}/>
    });
    const bookedEventTiles = events.events.map((event) => {
        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags} width = {"200px"}/>
    });
    const createdEventTiles = events.events.map((event) => {
        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags} width = {"200px"}/>
    });
  return (
    <div className='my-events-page'>
        <div className='my-events-container'>
            <h1>Upcoming Bookings</h1>
            <EventsRail>
            {upcomingEventTiles}
            </EventsRail>  
        </div>
        <div className='my-events-container'>
            <h1>Booked Events</h1>
            <EventsRail>
            {bookedEventTiles}
            </EventsRail>  
        </div>
        <div className='my-events-container'>
            <h1>Created Events</h1>
            <EventsRail>
            {createdEventTiles}
            </EventsRail> 
        </div> 
    </div>
  )
}

export default MyEvents