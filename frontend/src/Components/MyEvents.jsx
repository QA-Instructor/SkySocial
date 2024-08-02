import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import events from '../resources/skySocial.json'
import EventsRail from './EventsRail'
import EventTile from './EventTile'
import '../resources/myEvents.css';
import axios from 'axios';
import config from '../config.json';
import { responsiveFontSizes } from '@mui/material'

export const MyEvents = () => {
    let navigate = useNavigate();

    const [upcomingEventList, setUpcomingEventList] = useState([]);
    const [bookedEventList, setBookedEventList] = useState([]);
    const [createdEventList, setCreatedEventList] = useState([]);

    // const sortEvents = (field, ascending) => {
    //     axios.get(config.backend.SERVER_URL + "/sortEvents/sortBy=" + field + "/ascending=" + ascending, {headers}).then(() => {
            
    //     });
    
    // }


    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
    };

        useEffect(() => {
            if (!localStorage.getItem("token")) {
            navigate("/login");
            }
            axios.get(config.backend.SERVER_URL + '/getOrganiser?token='+ localStorage.getItem('token'),  {headers})
            .then(response => { 
                console.log(response.data)
                axios.get(config.backend.SERVER_URL + '/getEventsCreatedBy?id=' + response.data, {headers}).then((response) => {
                    console.log(response);
                    setCreatedEventList(response.data);})})
            
            .catch((err) => {
                console.log(err)
        //   if (err.response.status === 403){
        //     navigate('/login');
        //   }
        

        });
        
        let userId = axios.get(config.backend.SERVER_URL + '/getOrganiser?token='+ localStorage.getItem('token'),  {headers})
        .then(response => axios.get(config.backend.SERVER_URL + '/getUserBookedEvents?userId=' + response.data, {headers})
        .then((response) => {
            console.log(response.data)
            setBookedEventList(response.data);}))
        .catch((err) => {
            if (err.response.status === 403){
                navigate('/login');
            }

        });
        
    }, [navigate]);

    
    const bookedEventTiles = bookedEventList.map((event) => {
        return <EventTile title={event.eventTitle} image={event.image} tags={event.tags} width={"200px"} />
    });
    
    const upcomingEventTiles = [bookedEventTiles[0], bookedEventTiles[1], bookedEventTiles[2]]
    const createdEventTiles = createdEventList.map((event) => {
        return <EventTile title={event.eventTitle} image={event.image} tags={event.tags} width={"200px"} />
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