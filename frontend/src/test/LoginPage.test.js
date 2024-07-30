import { create } from 'react-test-renderer';
import LoginPage from '../Components/LoginRegPage';

describe('Login Page Snapshot tests',()=>{
    test(`Login Page matches snapshot`, () => {
        const loginPage = create(LoginPage);
        expect(loginPage.toJSON()).toMatchSnapshot();
    });
});

