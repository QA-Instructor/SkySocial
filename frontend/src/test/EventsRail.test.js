import React from 'react';
import { create } from 'react-test-renderer';
import { screen, act as tlract, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import EventsRail from '../Components/EventsRail';

// describe('Event Tile Snapshot tests',()=>{
//     test(`EventTile snapshot test`, () => {
//         const header = create(<EventsRail></EventsRail>);
//         expect(header.toJSON()).toMatchSnapshot();
//     });
// });

describe('EventsRail functionaility tests',()=>{
    test(`Right Scroll button works`, async ()=> {
        await tlract(async ()=> {
            await render(<EventsRail>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
            </EventsRail>)
        });
        const rightButton = screen.getByTestId("right")
        tlract(async()=> userEvent.click(rightButton));  
    });
    test(`Left Scroll button works`, async () => {
        await tlract(async ()=> {
            await render(<EventsRail>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
                <div width="200px" height="200px"></div>
            </EventsRail>)
        });
         
    });  
});
