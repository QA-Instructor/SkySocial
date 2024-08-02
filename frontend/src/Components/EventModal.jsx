import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/EventModal.css';
import axios from 'axios';
import config from '../config.json';

const EventModal = (props) => {

    const [book, setBook] = useState(false);

    const handleClose = () => {
        setBook(true);
        
    }
    // const handleShow = () => setFlag(true);

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
    };

    useEffect(() => {
        if (!book) return;
        axios.get(config.backend.SERVER_URL + '/getOrganiser?token='+ localStorage.getItem('token'),  {headers})
        .then(response => {
            axios.post(config.backend.SERVER_URL + '/addParticipant', {"eventId" : props.event.id, "userId" : response.data},{headers});
            props.showFlag();
        }
        ).catch(err => console.log(err));
    }, [book])
    


    const date = props.event.startTime.split(" ")[0];
    const time = props.event.startTime.split(" ")[1];

    return (
        <>
           { <Modal className='modal-container' show data-testid="modal" centered scrollable animation size='lg' >
                <ModalHeader className='' closeLabel>
                    <img className='modal-logo'src="logocolour.png" alt='Sky Social Logo'/>
                    <CloseButton id="closeBtn" onClick={handleClose}/>
                </ModalHeader>
                <Modal.Body>
                    <img className="event-modal-image" src={props.event.image} alt='Image of event'></img>
                    <h1 className='modal-event-title'>{props.event.eventTitle}</h1>
                    <div className='event-modal-time-info'>
                        <p id="eventModalDate">Date: {date} </p>
                        <p id="eventModalTime">Time: {time} </p>
                        <p id="eventModalSpaces">Spaces Remaining:  {props.event.currentParticipants} / {props.event.maxParticipants}</p> 
                    </div>

                    <div className='event-modal-location'>
                        <h5>Event Description: {props.event.eventDescription}</h5>
                        <p> Event Location: {props.event.eventLocation}</p>
                    </div>

                    <div className='event-modal-contact-container'>
                        <div className='event-modal-contact-image-container'>
                            <img className="event-modal-contact-image" src={props.event.organiser.profileImage} alt='Profile Picture'/>
                        </div>
                        
                        <div event-modal-contact-container>
                            <h5>{props.event.organiser.firstName} {props.event.organiser.lastName}</h5>
                            <p>Email: {props.event.organiser.email}</p>
                            <p>Tel: {props.event.organiser.phone}</p>
                        </div>
                       
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modal-button" variant="primary" onClick={handleClose}>
                        Book
                    </Button>
                </Modal.Footer>
            </Modal>
}
        </>
    )
}


export default EventModal