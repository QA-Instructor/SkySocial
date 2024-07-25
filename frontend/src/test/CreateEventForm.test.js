import React from "react";
import { create, act } from "react-test-renderer";

import CreateEventForm from "../Components/CreateEventForm";

describe('CreateEventForm test suite', () => { 
    describe('input field tests', () => { 
        test('it should render the input field for the event title', () => { 
            const testRenderer = create(<CreateEventForm/>);
            const testInstance = testRenderer.root;
            const eventtitleInputField = testInstance.findByProps({ name: 'eventTitle'});
            expect(eventtitleInputField).toBeTruthy();
            expect(eventtitleInputField.props.placeholder).toBe('Event Title');
         })
     })
 })