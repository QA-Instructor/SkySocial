import React, { useState } from 'react';
import '../profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilAlt } from "react-icons/fa";

const ProfileForm = ({user}) => {
  const defaultImage = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png";

  const [isDisabled, setEditable] = useState(true);

  const handleEditable = () => setEditable(!isDisabled);

  console.log(user.image);
  return (
    <div className='profile-form-container'>
         
        <form className='profile-form-form-container'>
        <div class="profile-form-btn-container">
            <a id="editBtn" className='editBtn' onClick={handleEditable}>
                <span id="editBtnText"><FaPencilAlt/></span>
            </a>
        </div>
        <div>
          {/* Integrate PictureUpload component */}
          { user.image === "" ? <img className="profile-form-image" src={defaultImage}/> : <img className="profile-form-image" src={user.image}/> }
        </div>

            <div className='profile-form-input-container'>
              <input type='text' className="form-control profile-form-input-field" name="firstname" disabled={isDisabled} value={user.firstname} />
              <input type='text' className="form-control profile-form-input-field"name="lastname" disabled={isDisabled} value={user.lastname} />
            </div>           
            <div className='profile-form-input-container'>
              <input type='email' className="form-control profile-form-input-field" name="email" disabled={isDisabled} value={user.email} />
              <input type='tel' className="form-control profile-form-input-field" name="phone" disabled={isDisabled} value={user.phone} />
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