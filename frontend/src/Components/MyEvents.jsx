import React from 'react'
import events from '../resources/skySocial.json'
import EventsRail from './EventsRail'
import EventTile from './EventTile'
import '../resources/myEvents.css'
export const MyEvents = () => {

    const top3Events = [events.events[0],events.events[1],events.events[2]]
    const upcomingEventTiles = top3Events.map((event) => {
        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags} width = {"30%"}/>
    });
    const eventTiles = events.events.map((event) => {
        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags} width = {"200px"}/>
    });
  return (
    <div className='my-event-page'>
        <div className='my-events-container'>
            <h1>Upcoming Bookings</h1>
            <EventsRail>
            {upcomingEventTiles}
            </EventsRail>  
        </div>
        <div className='my-events-container'>
            <h1>Booked Events</h1>
            <EventsRail>
            {eventTiles}
            </EventsRail>  
        </div>
        <div className='my-events-container'>
            <h1>Created Events</h1>
            <EventsRail>
            {eventTiles}
            </EventsRail> 
        </div> 
    </div>
  )
}

export default MyEvents