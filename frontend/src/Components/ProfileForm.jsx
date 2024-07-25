import React, { useState } from 'react';
import '../profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileForm = (user) => {
  const defaultImage = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png";

  const [isDisabled, setEditable] = useState(true);

  const handleEditable = () => setEditable(!isDisabled);
  return (
    <div className='profile-form-container'>
        <div className='profile-form-btn-container '>
          <button id='editBtn' className='btn btn-secondary' onClick={handleEditable}>{isDisabled ? "Edit Profile" : "Save"}</button>
        </div>
        <form>
        <div>
          {/* Integrate PictureUpload component */}
          { user.userData.image === "" ? <img className="profile-form-image" src={defaultImage}/> : <img className="profile-form-image" src={user.userData.image}/> }
        </div>

            <div className='profile-form-input-container'>
              <input type='text' className="form-control profile-form-input-field" name="firstname" disabled={isDisabled} value={user.userData.firstname} />
              <input type='text' className="form-control profile-form-input-field"name="lastname" disabled={isDisabled} value={user.userData.lastname} />
            </div>           
            <div className='profile-form-input-container'>
              <input type='email' className="form-control profile-form-input-field" name="email" disabled={isDisabled} value={user.userData.email} />
              <input type='tel' className="form-control profile-form-input-field" name="phone" disabled={isDisabled} value={user.userData.phone} />
            </div>
            <div className='profile-control-button-container'>
              <button id="deleteBtn" type="button" className='btn btn-danger'>Delete Account</button>
              <button id="logoutBtn" className='btn btn-warning'>Logout</button>
            </div>
            
        </form>
    </div>
  )
}

export default ProfileForm