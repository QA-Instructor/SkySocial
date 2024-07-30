import { create } from 'react-test-renderer';
import LoginRegPage from '../Components/LoginRegPage';
import { BrowserRouter } from 'react-router-dom';

describe('Login Page Snapshot tests',()=>{
    test(`Login Page matches snapshot`, () => {
        const loginRegPage = create(<BrowserRouter><LoginRegPage/></BrowserRouter>);
        expect(loginRegPage.toJSON()).toMatchSnapshot();
    });
});

