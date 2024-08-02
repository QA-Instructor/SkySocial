import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { ToggleButtonGroup } from '@mui/material'
import { MdEventNote } from "react-icons/md";
import dayjs from 'dayjs';
import CurrencyInput from 'react-currency-input-field';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../config.json';
import axios from 'axios';


import "../resources/CreateEventForm.css";

const CreateEventForm = () => {
    let navigate = useNavigate();

    const [eventInfo, setEventInfo] = useState({
        eventTitle: "",
        eventDescription: "",
        image: "",
        eventLocation: "",
        startTime: "",
        endTime: "",
        minParticipants: "",
        maxParticipants: "",
        ticketPrice: "",
        tags: [],
        emailConfirmation: false,
        organiser: ""
    });

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
    };



    const onSubmitForm = (e) => {
        e.preventDefault();
        setEventInfo(eventInfo);

        let organiserId = axios.get(config.backend.SERVER_URL + '/getOrganiser?token='+ localStorage.getItem('token'),  {headers})
            .then(response => {
                eventInfo['organiser'] = response.data;
                setEventInfo(prevFormData => ({ ...prevFormData, ["organiser"]: response.data, }))
                console.log(eventInfo)
                axios.post(config.backend.SERVER_URL + '/createEvent', eventInfo, { headers }).then(navigate('/')).catch(err => alert(err))})
                
                
                   
    }

const handleChange = (key, value) => {
    setEventInfo(prevFormData => ({ ...prevFormData, [key]: value, }))
}

return (
    <>
        <div className='create-event-component-container'>
            <div className='user-icon'><MdEventNote />
        </div>
        <h1>Create an Event</h1>
            <Form onSubmit={onSubmitForm}>
                <FloatingLabel controlId="floatingInput" label="Event Title" className="mb-3">
                    <Form.Control type="text" placeholder="Event Title" name="eventTitle" onChange={e => handleChange(e.target.name, e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Event Description" className="mb-3">
                    <Form.Control as="textarea" placeholder="Event Description" name="eventDescription" rows={7} onChange={e => handleChange(e.target.name, e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Upload an image" className="mb-3">
                    <Form.Control type="file" placeholder="Upload an image" name="image" accept="image/*" onChange={e => handleChange(e.target.name, e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingTextarea" label="Event Location" className="mb-3">
                    <Form.Control type="text" placeholder="Event Location" name="eventLocation" onChange={e => handleChange(e.target.name, e.target.value)} />
                </FloatingLabel>

                <div className='create-event-form-fields'>
                    <FloatingLabel className='create-event-form-datepicker'>Start Time: &nbsp;
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} name='startTime' onChange={e => handleChange("startTime", e.toDate())} />
                        </LocalizationProvider>
                    </FloatingLabel>

                    <div className='create-event-form-participant-fields'>
                        <FloatingLabel controlId="floatingInput" label="Min participants" className="mb-3 create-event-form-participant-field">
                            <Form.Control type="number" name="minParticipants" min={0} size='sm' onChange={e => handleChange(e.target.name, e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Max participants" className="mb-3 create-event-form-participant-field">
                            <Form.Control type="number" name="maxParticipants" min={2} size='sm' onChange={e => handleChange(e.target.name, e.target.value)} />
                        </FloatingLabel>
                    </div>

                    <FloatingLabel className='create-event-form-datepicker'>End Time: &nbsp; &nbsp;
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} name='endTime' onChange={e => handleChange("endTime", e.toDate())} />
                        </LocalizationProvider>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Ticket Price (£xx.xx)" className='create-event-form-ticket-price'>
                        <CurrencyInput name="ticketPrice" placeholder="Ticket price" prefix='£' decimalsLimit={2} className='form-control' onChange={e => handleChange(e.target.name, e.target.value.slice(1))} />
                    </FloatingLabel>
                    <br />

                </div>
                <Form.Control type="text" placeholder="Tags (Social,Football,Allages) " name="tags" onChange={e => handleChange(e.target.name, (e.target.value).split(','))} />
                <br />

                <FloatingLabel>
                    Email confirmations: <input type='checkbox' name='emailConfirmation' onChange={e => handleChange(e.target.name, e.target.checked)} />
                </FloatingLabel>
                <Button variant="success" className='create-event-form-button' onClick={onSubmitForm}>Create Event</Button>{' '}
            </Form>
        </div>
    </>
)
}

export default CreateEventForm