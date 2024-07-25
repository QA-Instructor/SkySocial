import React from "react";
import { create, act } from "react-test-renderer";

import CreateEventForm from "../Components/CreateEventForm";

describe('CreateEventForm test suite', () => { 
    describe('input field tests', () => { 
        test('it should render the input field for the event title', () => { 
            const testRenderer = create(<CreateEventForm/>);
            const testInstance = testRenderer.root;
            const eventTitleInputField = testInstance.findByProps({ name: 'eventTitle'});
            expect(eventTitleInputField).toBeTruthy();
            expect(eventTitleInputField.props.placeholder).toBe('Event Title');
         })

         test('it should render the input field for the event description', () => { 
            const testRenderer = create(<CreateEventForm/>);
            const testInstance = testRenderer.root;
            const eventDescriptionInputField = testInstance.findByProps({ name: 'eventDescription'});
            expect(eventDescriptionInputField).toBeTruthy();
            expect(eventDescriptionInputField.props.placeholder).toBe('Event Description');
         })

        // TODO: Refactor this test to work for the PictureUpload component
        test('it should render the input field for uploading an image', () => { 
            const testRenderer = create(<CreateEventForm/>);
            const testInstance = testRenderer.root;
            const eventLocationInputField = testInstance.findByProps({ name: 'imageUpload'});
            expect(eventLocationInputField).toBeTruthy();
            expect(eventLocationInputField.props.placeholder).toBe('Upload an image');
        })

        test('it should render the input field for the event location', () => { 
            const testRenderer = create(<CreateEventForm/>);
            const testInstance = testRenderer.root;
            const eventLocationInputField = testInstance.findByProps({ name: 'eventLocation'});
            expect(eventLocationInputField).toBeTruthy();
            expect(eventLocationInputField.props.placeholder).toBe('Event Location');
         })
         
     })
 })