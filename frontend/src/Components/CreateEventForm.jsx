import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
        </form>
    </div>
  )
}

export default CreateEventForm