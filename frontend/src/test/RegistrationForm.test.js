import React from "react";
import RegistrationForm from "../Components/RegistrationForm";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe('tests for input fields', () => {
    it('should render an input field for an email address', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const emailInputField = testInstance.findByProps({ name: 'email'});
        expect(emailInputField).toBeTruthy();
        expect(emailInputField.props.placeholder).toBe('name@example.com');
    })
    it('should render an input field for an first name', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const firstnameInputField = testInstance.findByProps({ name: 'firstname' });
        expect(firstnameInputField).toBeTruthy();
        expect(firstnameInputField.props.placeholder).toBe('First Name');
    })
    it('should render an input field for an last name', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const lastnameInputField = testInstance.findByProps({ name: 'lastname' });
        expect(lastnameInputField).toBeTruthy();
        expect(lastnameInputField.props.placeholder).toBe('Last Name');
    })

    it('should render an input field for a password', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const passwordInputField = testInstance.findByProps({name: "password"});
        expect(passwordInputField).toBeTruthy();
        expect(passwordInputField.props.placeholder).toBe("Password");
    })

    it('should render an input field for a confirm password', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const passwordInputField = testInstance.findByProps({name: "confirmPassword"});
        expect(passwordInputField).toBeTruthy();
        expect(passwordInputField.props.placeholder).toBe("Confirm Password");
    })
})

describe('clickable buttons appear', () => {
    test('it should render a Registration button', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const createButton = testInstance.findByProps({ name: "create" });
        expect(createButton).toBeTruthy();
    })
});

describe('all textfields should appear on screen', () => {
    it('should render a heading with a given text', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const headingText = testInstance.findByType('h1');
        expect(headingText).toBeTruthy();
        expect(headingText.children).toContain("Create an account");
    })
    it('should render a paragraph with a given text', () => {
        const testRenderer = create(<BrowserRouter><RegistrationForm/></BrowserRouter>);
        const testInstance = testRenderer.root;
        const paragraphText = testInstance.findByType('p');
        expect(paragraphText).toBeTruthy();
        expect(paragraphText.children).toContain("If you already have an account:");
    })
})