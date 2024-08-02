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
import SortMenu from './SortMenu';


const DiscoveryPage = () => {

  let navigate = useNavigate();

  const [eventList, setEventList] = useState([]);
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState({});
  const [selectedId, setSelectedId] = useState(0)

  const handleModal = async (eventId) => {
    console.log("Id in discovery: " + eventId)
    console.log("show" + show)
    setSelectedId((eventId));
  }

  const handleModalClose = () => {
    setShow(false);
    setEvent({});
    setSelectedId(0)
  }

  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
  };

  const sortEvents = (field, ascending) => {
    axios.get(config.backend.SERVER_URL + "/sortEvents?sortBy=" + field +  "&ascending=" + ascending, {headers}).then((response) => {
        setEventList(response.data);
    });

}

  const eventTiles = eventList.map((event) => {
    return <EventTile key={event.eventTitle} id={event.id} title={event.eventTitle} image={event.image} tags={event.tags} onClick={handleModal}  />
  });

  

  useEffect(() => {
    console.log(selectedId)
    if (selectedId === null || selectedId == 0) return;
    
    axios.get(config.backend.SERVER_URL + '/getEventById?id=' + parseInt(selectedId), {headers})
    .then(response => {
      console.log(response.data);
      setEvent(response.data);
      setShow(true); 
  })

  }, [selectedId]);


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




  return (
    <>
    <div className='discovery-page-container'>
        <Banner/>
        <div className='discovery-page-content'>
          {show && <EventModal event={event} showFlag={()=>{setShow(false)}} />}
          <div className='sort-container'>
                <SortMenu sortFn={sortEvents}/>
            </div>
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