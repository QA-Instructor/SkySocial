import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/EventModal.css';

const EventModal = ({event}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const date = event.startTime.split(" ")[0];
    const time = event.startTime.split(" ")[1];

    return (
        <>
            <Modal className='modal-container' show data-testid="modal" centered scrollable animation size='lg' >
                <ModalHeader className='' closeLabel>
                    <img className='modal-logo'src="logocolour.png" alt='Sky Social Logo'/>
                    <CloseButton id="closeBtn" onClick={handleClose}/>
                </ModalHeader>
                <Modal.Body>
                    <img className="event-modal-image" src={event.image} alt='Image of event'></img>
                    <h1 className='modal-event-title'>{event.eventTitle}</h1>
                    <div className='event-modal-time-info'>
                        <p id="eventModalDate">Date: {date} </p>
                        <p id="eventModalTime">Time: {time} </p>
                        <p id="eventModalSpaces">Spaces Remaining:  {event.currentParticipants} / {event.maxParticipants}</p> 
                    </div>

                    <div className='event-modal-location'>
                        <h5>Event Description: {event.eventDescription}</h5>
                        <p> Event Location: {event.eventLocation}</p>
                    </div>

                    <div className='event-modal-contact-container'>
                        <div className='event-modal-contact-image-container'>
                            <img className="event-modal-contact-image" src={event.organiser.profileImage} alt='Profile Picture'/>
                        </div>
                        
                        <div event-modal-contact-container>
                            <h5>{event.organiser.firstName} {event.organiser.lastName}</h5>
                            <p>Email: {event.organiser.email}</p>
                            <p>Tel: {event.organiser.phone}</p>
                        </div>
                       
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modal-button" variant="primary" onClick={handleClose}>
                        Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default EventModal