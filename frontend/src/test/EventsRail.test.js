import React from 'react';
import { create } from 'react-test-renderer';
import { screen, act, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';


import EventsRail from '../Components/EventsRail';

describe('Event Tile Snapshot tests',()=>{
    test(`EventTile snapshot test`, () => {
        const header = create(<EventsRail></EventsRail>);
        expect(header.toJSON()).toMatchSnapshot();
    });
});

describe('EventsRail functionaility tests',()=>{
    test(`Right Scroll button works`, () => {
        const header = create(
            <EventsRail>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
            </EventsRail>);
    });
    test(`Left Scroll button works`, () => {
        const header = create(
            <EventsRail>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
            </EventsRail>);
    });  
});