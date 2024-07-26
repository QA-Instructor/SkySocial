import './App.css';
import Header from './Components/Header'
import EventsRail from './Components/EventsRail';
import EventTile from './Components/EventTile'
import { BrowserRouter } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <EventsRail>
        <EventTile title ="Football 5-a-side" image = "e619f4e1-c156-419e-8d26-f2cc46235e76.jpg" tags = {["5-a-side","SkyFootball"]}/>
        <EventTile title ="Tennis Doubles" image = "download.jpeg" tags = {["5-a-side","SkyFootball"]}/>
        <EventTile title ="Running" image = "download (1).jpeg" tags = {["5-a-side","SkyFootball"]}/>
        <EventTile title ="Football 5-a-side" image = "e619f4e1-c156-419e-8d26-f2cc46235e76.jpg" tags = {["5-a-side","SkyFootball"]}/>
        <EventTile title ="Tennis Doubles" image = "download.jpeg" tags = {["5-a-side","SkyFootball"]}/>
      </EventsRail>
    </div>
    </BrowserRouter>
  );
}

export default App;
