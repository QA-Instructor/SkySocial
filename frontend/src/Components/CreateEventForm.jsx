import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import dayjs from 'dayjs';
import { styled } from '@mui/material'
import CurrencyInput from 'react-currency-input-field';

const CreateEventForm = () => {
  return (
    <div>
        <h1 name='heading'>Create an Event</h1>
        <form className='create-event-form-input-container'>
            <div>
                <Form.Control type="text" placeholder="Event Title" name="eventTitle" />
                <Form.Control as="textarea" placeholder="Event Description" name="eventDescription" rows={7}/>
                <Form.Control type="file" placeholder="Upload an image" name="imageUpload" accept="image/*" />
                <Form.Control type="text" placeholder="Event Location" name="eventLocation" />
            </div>
            <div>
                <FloatingLabel>Start Time
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')}/>
                    </LocalizationProvider>
                </FloatingLabel>
                
                <FloatingLabel>End Time
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')}/>
                    </LocalizationProvider>
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel>
                    Minimum number of participants: 
                    <Form.Control type="number" name="minParticipantCount" min={0}/>
                </FloatingLabel>
                <FloatingLabel>
                    Maximum number of participants: 
                    <Form.Control type="number" name="maxParticipantCount" min={2}/>
                </FloatingLabel>
            </div>
            <div>
                <CurrencyInput name="ticketPrice" placeholder="Ticket price" prefix='£' decimalsLimit={2} />
                <Form.Control type="text" placeholder="Tags" name="tags" />
            </div>
            <FloatingLabel>
                Email confirmations: <input type='checkbox' name='emailConfirmations'/>
            </FloatingLabel>
            <Button variant="success">Create Event</Button>{' '}
        </form>
    </div>
  )
}

export default CreateEventForm