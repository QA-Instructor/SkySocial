import React from "react";
import { create, act } from "react-test-renderer";

import LoginForm from '../Components/LoginForm';

describe('LoginForm test suite', () => { 
    describe('input field tests', () => { 
        test('it should render an input field for the username or email address', () => { 
            const testRenderer = create(<LoginForm/>);
            const testInstance = testRenderer.root;

            const usernameInputField = testInstance.findByProps({ name: 'username'});
            expect(usernameInputField).toBeTruthy();
            expect(usernameInputField.props.placeholder).toBe('Email or username');
         });
         test('it should render an input field for the password', () => { 
            const testRenderer = create(<LoginForm/>);
            const testInstance = testRenderer.root;

            const passwordInputField = testInstance.findByProps({ name: 'password'});
            expect(passwordInputField).toBeTruthy();
            expect(passwordInputField.props.type).toBe('password');
            expect(passwordInputField.props.placeholder).toBe('Password');
         });
     })

     describe('all on-screen text appears', () => { 
        test('it should render a heading with the required text', () => {
            const testRenderer = create(<LoginForm/>);
            const testInstance = testRenderer.root;

            const heading = testInstance.findByType('h1');
            expect(heading).toBeTruthy();
            expect(heading.children).toContain('Welcome to Sky Social');
        });

        test('it should render a paragraph with the required text', () => {
            const testRenderer = create(<LoginForm/>);
            const testInstance = testRenderer.root;

            const paragraph = testInstance.findByType('p');
            expect(paragraph).toBeTruthy();
            expect(paragraph.children).toContain('OR');  
        });
      })

      describe('clickable buttons appear', () => { 
        test('it should render a Log In button', () => {
            const testRenderer = create(<LoginForm/>);
            const testInstance = testRenderer.root;

            const logInButton = testInstance.findByProps({ name: "login" });
            expect(logInButton).toBeTruthy();
            expect(logInButton.props.value).toBe('Log in');
        });

        test('it should render a Create an Account button', () => { 
            const testRenderer = create(<LoginForm/>);
            const testInstance = testRenderer.root;

            const createAccountButton = testInstance.findByProps({ name: "create-account" });
            expect(createAccountButton).toBeTruthy();
            expect(createAccountButton.children).toContain('Create an Account');            
         })
       })
 })