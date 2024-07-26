import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/EventModal.css';

const EventModal = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const date = props.event.startDateTime.split(" ")[0];
    const time = props.event.startDateTime.split(" ")[1]

    return (
        <>
            <Button data-testid='button' variant="primary" onClick={handleShow}>
                View Example Modal - Testing Only
            </Button>
            <Modal data-testid="modal" show={show} centered scrollable animation size='lg' >
                <ModalHeader className='' closeLabel>
                    <img src="" alt='Sky Social Logo'/>
                    <CloseButton id="closeBtn" onClick={handleClose}/>
                </ModalHeader>
                <Modal.Body>
                    <h1>{props.event.eventTitle}</h1>
                    <div className='event-modal-time-info'>
                        <p id="eventModalDate">Date: {date} </p>
                        <p id="eventModalTime">Time: {time} </p>
                        <p id="eventModalSpaces">Spaces Remaining:  {props.event.currentParticipants} / {props.event.maxParticipants}</p> 
                    </div>

                    <img className="event-modal-image" src={props.event.image} alt='Image of event'></img>

                    <div className='event-modal-location'>
                        <p>Event Info: {props.event.eventDescription}</p>
                        <p>Address: {props.event.eventLocation}</p>
                    </div>

                    {/* <div>
                        <img src={props.event.organiserImage}/>
                        <p>Tel: {props.event.organiserTel}</p>
                        <p>Email: {props.event.organiserEmail}</p>
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default EventModal