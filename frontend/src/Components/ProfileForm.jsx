import React, { useEffect, useState } from 'react';
import '../CSS/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios';
import config from '../config.json';
const ProfileForm = () => {
  const defaultImage = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/person-profile-image-icon.png";
  const [isDisabled, setEditable] = useState(true);
  const [profileData, setProfileData] = useState({
    firstName : "",
    lastName : "",
    email : "" ,
    phone : "",
    profileImage : ""
  });


  const handleEditable = () => setEditable(!isDisabled);

  useEffect(() => {
    axios.get(config.backend.SERVER_URL + '/getEmailById?id='+ localStorage.getItem('token'),  {headers})
    .then(response => { 
        console.log(response.data)
        axios.get(config.backend.SERVER_URL + '/getByEmail?email=' + response.data, {headers}).then((response) => {
            console.log(response);
            setProfileData(response.data);})})
    
    .catch((err) => {
        console.log(err);
    });
  }, []);


  
  const onFormChange = (key, value) => {
    console.log("change: " + key)
    // profileData[key] = value;
    setProfileData(prevProfileData => ({ ...prevProfileData, [key]: value, }))
  } 

  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
  };

  const onFormSubmit = async (e) => {
    e.preventDefault()
    console.log(profileData)
    //Make axios request
    try{
      axios.put(config.backend.SERVER_URL + "/updateAccount", profileData, {headers});
    }catch(error){
      alert('Unable to update profile')
    }
    
  }

  return (
    <div className='profile-form-container'>
         
        <form className='profile-form-form-container'>
        <div class="profile-form-btn-container">
            <a id="editBtn" className='profile-form-edit-button profile-form-save-text' onClick={handleEditable}>
                {!isDisabled ? <span onClick={e => onFormSubmit(e)}>Save</span> : <span id="editBtnText"><FaPencilAlt/></span>}
            </a>
        </div>
          {/* Integrate PictureUpload component */}
          {/* { user.profileImage === "" ? <img className="profile-form-image" src={defaultImage} alt="Profile"/> : <img className="profile-form-image" src={user.profileImage} alt="Profile"/> } */}
        
        <div className='user-icon'><FaRegUserCircle /></div>
        <h1>Profile</h1>
            <div className='profile-form-input-container'>
              <input type='text' className="form-control profile-form-input-field" name="firstName" disabled={isDisabled} defaultValue={profileData.firstName} onChange={e => onFormChange(e.target.name, e.target.value)} />
              <input type='text' className="form-control profile-form-input-field" name="lastName" disabled={isDisabled} defaultValue={profileData.lastName} onChange={e => onFormChange(e.target.name, e.target.value)} />
            </div>           
            <div className='profile-form-input-container'>
              <input type='email' className="form-control profile-form-input-field" name="email" disabled={isDisabled} defaultValue={profileData.email} onChange={e => onFormChange(e.target.name, e.target.value)} />
              <input type='tel' className="form-control profile-form-input-field" name="phone" disabled={isDisabled} defaultValue={profileData.phone} onChange={e => onFormChange(e.target.name, e.target.value)} />
            </div>
            <div className='profile-control-button-container'>
              {/* <button id="deleteBtn" type="button" className='btn btn-danger form-submit-button'>Delete Account</button> */}
              <button id="logoutBtn" className='btn form-submit-button'>Logout</button>
            </div>
            
        </form>
    </div>
  )
}

export default ProfileForm