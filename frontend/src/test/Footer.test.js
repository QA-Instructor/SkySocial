import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../Components/Footer';

describe('Footer Snapshot tests',()=>{
    test(`Footer matches snapshot`, () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    });  
});

describe("copyright year appears as expected", () => {
    test(`copyright appears`, () => {
        const testRenderer = create(<Footer />);
        const testInstance = testRenderer.root;
        const copyright = testInstance.findByProps({className:'footer-container'});
        expect(copyright.children).toContain('© SKY Ltd 2024-2024');
    })
});