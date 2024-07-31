import React, { useTransition } from "react";
import { create, act } from "react-test-renderer";
import userData from '../userData.json';
import ProfileForm from "../Components/ProfileForm";

describe("ProfileForm component test suit", () => {
    test('should render a disabled first name and last name component with filled in values', () => {
        const user = userData.users[0];
        const testRenderer = create(<ProfileForm user={user}/>);
        const testInstance = testRenderer.root;

        const firstNameField = testInstance.findByProps({ name: 'firstname'});
        expect(firstNameField).toBeTruthy();
        expect(firstNameField.props.value).toContain(user.firstname);
        expect(firstNameField.props.disabled).toBe(true);

        const lastNameField = testInstance.findByProps({ name: 'lastname'});
        expect(lastNameField).toBeTruthy();
        expect(lastNameField.props.value).toContain(user.lastname);
        expect(lastNameField.props.disabled).toBe(true);
    });

    test('should render disabled email and phone number inputs with filled in values', () => {
        const user = userData.users[0];
        const testRenderer = create(<ProfileForm user={user}/>);
        const testInstance = testRenderer.root;

        const emailField = testInstance.findByProps({ name: 'email'});
        expect(emailField).toBeTruthy();
        expect(emailField.props.value).toContain(user.email);
        expect(emailField.props.disabled).toBe(true);
        

        const phoneNumberField = testInstance.findByProps({ name: 'phone'});
        expect(phoneNumberField).toBeTruthy();
        expect(phoneNumberField.props.value).toContain(user.phone);
        expect(phoneNumberField.props.disabled).toBe(true);
    });

    test('should render a profile image', () => {
        const user = userData.users[0];
        const testRenderer = create(<ProfileForm user={user}/>);
        const testInstance = testRenderer.root;

        const image = testInstance.findByType('img');
        expect(image).toBeTruthy();
    });

    test('should render a default profile image', () => {
        const user = userData.users[1];
        const defaultURL =  "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/person-profile-image-icon.png";
        const testRenderer = create(<ProfileForm user={user}/>);
        const testInstance = testRenderer.root;

        const image = testInstance.findByType('img');
        expect(image.props.src).toBe( "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/person-profile-image-icon.png");
    });

    test('should render an edit profile button', () => {
        const user = userData.users[0];
        const testRenderer = create(<ProfileForm user={user}/>);
        const testInstance = testRenderer.root;

        const editBtn = testInstance.findByProps({id : "editBtn"});
        const firstNameField = testInstance.findByProps({name : "firstname"});
        expect(editBtn).toBeTruthy();
        act(() => editBtn.props.onClick());
        expect(firstNameField.props.disabled).toBe(false);
    });

    describe('test suite for delete and log out buttons', () => { 
        test('should render an delete button', () => {
            const user = userData.users[0];
            const testRenderer = create(<ProfileForm user={user}/>);
            const testInstance = testRenderer.root;

            const deleteBtn = testInstance.findByProps({id : "deleteBtn"});
            expect(deleteBtn).toBeTruthy();
            expect(deleteBtn.children).toContain('Delete Account');
        });
        test('should render an logout button', () => {
            const user = userData.users[0];
            const testRenderer = create(<ProfileForm user={user}/>);
            const testInstance = testRenderer.root;

            const logoutBtn = testInstance.findByProps({id : "logoutBtn"});
            expect(logoutBtn).toBeTruthy();
            expect(logoutBtn.children).toContain('Logout');
        });
     });
});