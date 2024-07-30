import './App.css';
import Header from './Components/Header'
import EventsRail from './Components/EventsRail';
import EventTile from './Components/EventTile'
import { BrowserRouter } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import banner from "/resources/banner.json";

function App() {
  return (
    <div>
      <Carousel slides={banner} />
    </div>
  );
}

export default App;