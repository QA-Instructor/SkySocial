import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import dayjs from 'dayjs';
import CurrencyInput from 'react-currency-input-field';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../resources/CreateEventForm.css";

const CreateEventForm = () => {
  return (
      <>
      <div className='create-event-component-container'>
        <h1 className='create-event-form-heading'>Create an Event</h1>
        <Form method='post'>
            <FloatingLabel controlId="floatingInput" label="Event Title" className="mb-3">
                <Form.Control type="text" placeholder="Event Title" name="eventTitle" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Event Description" className="mb-3">
                <Form.Control as="textarea" placeholder="Event Description" name="eventDescription" rows={7}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Upload an image" className="mb-3">
                <Form.Control type="file" placeholder="Upload an image" name="imageUpload" accept="image/*" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea" label="Event Location" className="mb-3">
                <Form.Control type="text" placeholder="Event Location" name="eventLocation" />
            </FloatingLabel>
            <br />

            <div className='create-event-form-time-input-fields'>
                <FloatingLabel className='create-event-form-datepicker'>Start Time: 
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} width="50"/>
                    </LocalizationProvider>
                </FloatingLabel>
                
                <FloatingLabel>End Time: 
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')}/>
                    </LocalizationProvider>
                </FloatingLabel>
            </div>

            <br />
            <div>
                <FloatingLabel controlId="floatingInput" label="Minimum number of participants" className="mb-3">
                    <Form.Control type="number" name="minParticipantCount" min={0} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Maximum number of participants" className="mb-3">
                    <Form.Control type="number" name="maxParticipantCount" min={2}/>
                </FloatingLabel>
            </div>
            <br />

            <div>
                <CurrencyInput name="ticketPrice" placeholder="Ticket price" prefix='£' decimalsLimit={2} />
                <Form.Control type="text" placeholder="Tags (Social,Football,Allages) " name="eventTags" />
            </div>
            <br />
            
            <FloatingLabel>
                Email confirmations: <input type='checkbox' name='emailConfirmations'/>
            </FloatingLabel>
            <br />
            <Button variant="success">Create Event</Button>{' '}
        </Form>
      </div>
    </>
  )
}

export default CreateEventForm