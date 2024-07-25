import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateEventForm = () => {
  return (
    <div>
        <h1 name='heading'>Create an Event</h1>
        <form className='create-event-form-input-container'>
            <div>
                <Form.Control type="text" placeholder="Event Title" name="eventTitle" />
                <Form.Control as="textarea" placeholder="Event Description" name="eventDescription" rows={7}/>
                <Form.Control type="text" placeholder="Upload an image" name="imageUpload" />
                <Form.Control type="text" placeholder="Event Location" name="eventLocation" />
            </div>
        </form>
    </div>
  )
}

export default CreateEventForm