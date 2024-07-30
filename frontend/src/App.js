import './App.css';
import Header from './Components/Header'
import EventsRail from './Components/EventsRail';
import EventTile from './Components/EventTile'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import LoginPage from './Components/LoginRegPage';
import CreateEventForm from './Components/CreateEventForm';
import ProfileForm from './Components/ProfileForm';
import userData from './userData.json';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element = {<Header/>}>
          <Route path="/" element={
            <EventsRail>
            <EventTile title ="Football 5-a-side" image = "e619f4e1-c156-419e-8d26-f2cc46235e76.jpg" tags = {["5-a-side","SkyFootball"]}/>
            <EventTile title ="Tennis Doubles" image = "download.jpeg" tags = {["5-a-side","SkyFootball"]}/>
            <EventTile title ="Running" image = "download (1).jpeg" tags = {["5-a-side","SkyFootball"]}/>
            <EventTile title ="Football 5-a-side" image = "e619f4e1-c156-419e-8d26-f2cc46235e76.jpg" tags = {["5-a-side","SkyFootball"]}/>
            <EventTile title ="Tennis Doubles" image = "download.jpeg" tags = {["5-a-side","SkyFootball"]}/>
          </EventsRail>
          }/>
          <Route path="/MyEvents" element={<h1>My Events Page Goes here</h1>}/>
          <Route path="/CreateEvent" element={<CreateEventForm/>}/>
          <Route path="/Profile" element={<ProfileForm user={userData.users[1]}/>}/>
          <Route path="/Search" element={<h1>Search Bar Goes here</h1>}/>
        </Route>
        <Route path="/Login" element={<LoginPage displayLoginRegPage={true}/>}/>
        <Route path="/Registration" element={<LoginPage displayLoginRegPage= {false}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;