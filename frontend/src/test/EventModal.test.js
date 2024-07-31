import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { create } from 'react-test-renderer';
import EventModal from '../Components/EventModal';
import eventData from '../resources/skySocial.json';
import Modal from 'react-bootstrap/Modal';

describe('Testing modal apperance', () => {
    let modal;
    beforeEach(() => {
        render( <EventModal event={eventData.events[1]}/>)
        const button = screen.getByTestId("button");
        fireEvent.click(button);
        modal = screen.getByTestId("modal");
    })
    it('should render a modal component', () => {
        expect(modal).toBeTruthy();
        
    });

    it('should render a modal heading component', async () => {
        const title = await screen.findByRole("heading");
        expect(title).toHaveTextContent(eventData.events[1].eventTitle);
    });

    it('should render a modal date component', async () => {
        const date = await screen.findByText("Date: " + eventData.events[1].startDateTime.split(" ")[0]);
        expect(date).toBeTruthy();
    });
    it('should render a modal time component', async () => {
        const time = await screen.findByText("Time: " + eventData.events[1].startDateTime.split(" ")[1]);
        expect(time).toBeTruthy();
    });
    it('should render a modal space remaining component', async () => {
        const currentParticipants = await screen.findByText("Spaces Remaining: " + eventData.events[1].currentParticipants + " / " + eventData.events[1].maxParticipants );
        expect(currentParticipants).toBeTruthy();
    });

    it('should render a modal address component', async () => {
        const currentParticipants = await screen.findByText("Address: " + eventData.events[1].eventLocation);
        expect(currentParticipants).toBeTruthy();
    });

    it('should render a modal event information component', async () => {
        const currentParticipants = await screen.findByText("Event Info: " + eventData.events[1].eventDescription);
        expect(currentParticipants).toBeTruthy();
    });
    it('should render a modal BOOK button component', async () => {
        const button = await screen.findByText("Book");
        expect(button).toBeTruthy();
    });
}); 