import { create } from 'react-test-renderer';
import App from '../App';
import { getByText } from '@testing-library/react';

describe('Snapshot tests',()=>{
    test(`App renders`, () => {
        const app = create(<App/>);
        expect(app.toJSON()).toMatchSnapshot();
    });
});

