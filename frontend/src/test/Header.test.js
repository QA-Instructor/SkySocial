import React from 'react';
import { create } from 'react-test-renderer';
import { screen, act, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';


import Header from './Header';

describe('Header Snapshot tests',()=>{
    test(`Header matches snapshot`, () => {
        const header = create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
        expect(header.toJSON()).toMatchSnapshot();
    });
    test.skip(`Searchbar appears`, () => {
        const searchBar = create(<SearchBar />);
        expect(searchBar.toJSON()).toMatchSnapshot();
    });    
});

describe("Content appears as expected",()=>{
    test(`logo appears`, async () => {
        await act(async () => render(<BrowserRouter>
            <Header />
        </BrowserRouter>));
        expect(await screen.findByAltText('Sky Social')).toBeInTheDocument()
    });
    test(`home button appears`, async () => {
        await act(async () => render(<BrowserRouter>
            <Header />
        </BrowserRouter>));
        expect(await screen.findByText(/home/i)).toBeInTheDocument()
    });
    test(`Create Event button appears`, async () => {
        await act(async () => render(<BrowserRouter>
            <Header />
        </BrowserRouter>));
        expect(await screen.findByText(/Create Event/i)).toBeInTheDocument()
    });
    test(`My Events button appears`, async () => {
        await act(async () => render(<BrowserRouter>
            <Header />
        </BrowserRouter>));
        expect(await screen.findByText(/My Events/i)).toBeInTheDocument()
    });
    test(`Search button appears`, async () => {
        await act(async () => render(<BrowserRouter>
            <Header />
        </BrowserRouter>));
        expect(await screen.findByText(/Search/i)).toBeInTheDocument()
    });
})