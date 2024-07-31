import React, { useState } from 'react';
import '../CSS/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilAlt } from "react-icons/fa";

const ProfileForm = ({user}) => {
  const defaultImage = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/person-profile-image-icon.png";

  const [isDisabled, setEditable] = useState(true);

  const handleEditable = () => setEditable(!isDisabled);

  //Add function to save changes to profile.
  const saveProfile = () => {};

  return (
    <div className='profile-form-container'>
         
        <form className='profile-form-form-container'>
        <div class="profile-form-btn-container">
            <a id="editBtn" className='profile-form-edit-button profile-form-save-text' onClick={handleEditable}>
                {!isDisabled ? <span onClick={saveProfile}>Save</span> : <span id="editBtnText"><FaPencilAlt/></span>}
            </a>
        </div>
        <div>
          {/* Integrate PictureUpload component */}
          { user.image === "" ? <img className="profile-form-image" src={defaultImage} alt="Profile"/> : <img className="profile-form-image" src={user.image} alt="Profile"/> }
        </div>

            <div className='profile-form-input-container'>
              <input type='text' className="form-control profile-form-input-field" name="firstname" disabled={isDisabled} value={user.firstname} />
              <input type='text' className="form-control profile-form-input-field" name="lastname" disabled={isDisabled} value={user.lastname} />
            </div>           
            <div className='profile-form-input-container'>
              <input type='email' className="form-control profile-form-input-field" name="email" disabled={isDisabled} value={user.email} />
              <input type='tel' className="form-control profile-form-input-field" name="phone" disabled={isDisabled} value={user.phone} />
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