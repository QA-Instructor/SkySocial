import { create } from 'react-test-renderer';
import App from '../App';
import { render, screen, fireEvent} from '@testing-library/react';

describe('Snapshot tests',()=>{
    test(`App renders`, () => {
        const app = create(<App/>);
        expect(app.toJSON()).toMatchSnapshot();
    });
});

describe('Navigation tests',()=>{
  test('Profile Page is naviagted',()=>{
      render( <App/>)
      const profileButton = screen.getByText(/Profile/i);
      expect(profileButton).toBeInTheDocument();
      fireEvent.click(profileButton);
      const profileText = screen.getByText(/Profile Page Goes here/i)
      expect(profileText).toBeInTheDocument();
  })
  test('Create Event is naviagted',()=>{
    render( <App/>)
    const createEventButton = screen.getByText(/Create Event/i);
    expect(createEventButton).toBeInTheDocument();
    fireEvent.click(createEventButton);
    const createEventText = screen.getByText(/Create Event Page Goes here/i)
    expect(createEventText).toBeInTheDocument();
  })
  test('My Events is naviagted',()=>{
    render( <App/>)
    const myEventsButton = screen.getByText(/My Events/i);
    expect(myEventsButton).toBeInTheDocument();
    fireEvent.click(myEventsButton);
    const myEventsText = screen.getByText(/My Events Page Goes here/i)
    expect(myEventsText).toBeInTheDocument();
  })
})

