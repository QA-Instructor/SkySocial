import React, { useState } from 'react';
import '../CSS/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilAlt } from "react-icons/fa";

const ProfileForm = ({user}) => {
  const defaultImage = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/person-profile-image-icon.png";
  const [isDisabled, setEditable] = useState(true);
  const handleEditable = () => setEditable(!isDisabled);

  const profileData = {
    firstName : user.firstName,
    lastName : user.lastName,
    email : user.email ,
    phone : user.phone,
    profileImage : user.profileImage
  }

  const onFormChange = (key, value) => {
    console.log("change: " + key)
    profileData[key] = value;
  } 

  const onFormSubmit = () => {
    console.log(profileData)
    //Make axios request
  }

  return (
    <div className='profile-form-container'>
         
        <form className='profile-form-form-container'>
        <div class="profile-form-btn-container">
            <a id="editBtn" className='profile-form-edit-button profile-form-save-text' onClick={handleEditable}>
                {!isDisabled ? <span onClick={onFormSubmit}>Save</span> : <span id="editBtnText"><FaPencilAlt/></span>}
            </a>
        </div>
        <div>
          {/* Integrate PictureUpload component */}
          { user.profileImage === "" ? <img className="profile-form-image" src={defaultImage} alt="Profile"/> : <img className="profile-form-image" src={user.profileImage} alt="Profile"/> }
        </div>

            <div className='profile-form-input-container'>
              <input type='text' className="form-control profile-form-input-field" name="firstName" disabled={isDisabled} defaultValue={user.firstName} onChange={e => onFormChange(e.target.name, e.target.value)} />
              <input type='text' className="form-control profile-form-input-field" name="lastName" disabled={isDisabled} defaultValue={user.lastName} onChange={e => onFormChange(e.target.name, e.target.value)} />
            </div>           
            <div className='profile-form-input-container'>
              <input type='email' className="form-control profile-form-input-field" name="email" disabled={isDisabled} defaultValue={user.email} onChange={e => onFormChange(e.target.name, e.target.value)} />
              <input type='tel' className="form-control profile-form-input-field" name="phone" disabled={isDisabled} defaultValue={user.phone} onChange={e => onFormChange(e.target.name, e.target.value)} />
            </div>
            <div className='profile-control-button-container'>
              <button id="deleteBtn" type="button" className='btn btn-danger profile-form-control-btn'>Delete Account</button>
              <button id="logoutBtn" className='btn btn-warning rofile-form-control-btn'>Logout</button>
            </div>
            
        </form>
    </div>
  )
}

export default ProfileForm