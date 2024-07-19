import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../Components/Header';

describe('Header Snapshot tests',()=>{
    test(`Header matches snapshot`, () => {
        const header = create(<Header />);
        expect(header.toJSON()).toMatchSnapshot();
    });
    test(`Searchbar appears`, () => {
        const searchBar = create(<SearchBar />);
        expect(searchBar.toJSON()).toMatchSnapshot();
    });    
});

describe("Content appears as expected",()=>{
    test(`logo appears`, () => {
        const testRenderer = create(<Header />);
        const testInstance = testRenderer.root;
        const logo = testInstance.findByType(`img`);
        expect(logo.props.name).toContain("logoImage");
        expect(logo.props.src).toContain("logo.jpeg");
    });
    test(`home button appears`, () => {
        const testRenderer = create(<Header />);
        const testInstance = testRenderer.root;
        const button = testInstance.getByText(/home/i);
        expect(button).toBeInTheDocument();
    });

})
describe('Navbar functionalities tests',()=>{
    test(`Can navigate to profile page from home page`, () => {
        const testRenderer = create(<Header />);
        const testInstance = testRenderer.root;
        const homeButton = testInstance.getByText(/home/i);
        fireEvent.click(homeButton);
        expect(global.window.location.pathname).toContain('/home');
        const profileButton = testInstance.getByText(/profile/i);
        fireEvent.click(profileButton);
        expect(global.window.location.pathname).toContain('/profile');
    }); 
    test(`Can navigate to create event page from my events page`, () => {
        const testRenderer = create(<Header />);
        const testInstance = testRenderer.root;
        const myEventsButton = testInstance.getByText(/my events/i);
        fireEvent.click(myEventsButton);
        expect(global.window.location.pathname).toContain('/myEvent');
        const createEventButton = testInstance.getByText(/create event/i);
        fireEvent.click(createEventButton);
        expect(global.window.location.pathname).toContain('/createEvent');
    });
    test(`Can logout`, () => {
        const testRenderer = create(<Header />);
        const testInstance = testRenderer.root;
        const logoutButton = testInstance.getByText(/logout/i);
        fireEvent.click(logoutButton);
        expect(global.window.location.pathname).toContain('/login');
    });  
});


