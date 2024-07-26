import React from 'react';
import { create } from 'react-test-renderer';
import EventTile from '../Components/EventTile';
import image from '../resources/download.jpeg';
import eventData from '../skySocial.json';


describe("card appearance test suite", () => {
    let testRenderer;
    beforeEach(() => {
        testRenderer = create(<EventTile 
            image={eventData.events[1].image} 
            title={eventData.events[1].eventTitle} 
            tags={eventData.events[1].tags}/>);
    });
       
    
    test('it should render a Card component', () => { 
        const testInstance = testRenderer.root;
        
        const card = testInstance.findByProps({id : "cardContainer"});
        expect(card).toBeTruthy();
     });

    test('it should render a card with a title.', () => { 
        const testInstance = testRenderer.root;
        
        const cardTitle = testInstance.findByType('h5');
        expect(cardTitle.children).toContain('Pub Social');
    });

    test('it should render a card with a button with appropriate text', () => {
      const testInstance = testRenderer.root;

      const button = testInstance.findByType('button');
      expect(button).toBeTruthy();
      expect(button.children).toContain('Book');
    });
    test.skip('it should render a card with an image', () => {
        const testInstance = testRenderer.root;
        
        const card = testInstance.findByProps({id : "cardContainer"});
        expect(card).toMatchSnapshot();
    });


    test('it should render a card with event tags', () => {
        const testInstance = testRenderer.root;

        const exampleTags = ["chillfirdays","coldones","social"];
        
        const tags = testInstance.findAllByType('b');

        expect(tags.length).toBeGreaterThan(0);

        for (let i = 0; i < tags.length; i++){
            expect(tags[i].children).toContain(exampleTags[i]);
        }
    });
});