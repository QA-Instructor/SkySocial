import React from 'react';
import { create } from 'react-test-renderer';
import EventsRail from '../Components/EventsRail';
afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

describe('Event Tile Snapshot tests',()=>{
    test(`EventTile snapshot test`, () => {
        const testRenderer = create(<EventsRail>
            <div width="200px" height="200px">1</div>
            <div width="200px" height="200px">2</div>
            <div width="200px" height="200px">3</div>
            <div width="200px" height="200px">4</div>
            <div width="200px" height="200px">5</div>
            <div width="200px" height="200px">6</div>
            <div width="200px" height="200px">7</div>
            <div width="200px" height="200px">8</div>
            <div width="200px" height="200px">9</div>
        </EventsRail>);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});
