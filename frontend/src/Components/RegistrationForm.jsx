import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../CSS/registrationForm.css';

const RegistrationForm = () => {
    const navigate = useNavigate();
  return (
    <div className='registration-form-container'>
        <h1 name='heading'>Create an account</h1>
            <FloatingLabel controlId="floatingInput" label="Upload an image" className="mb-3">
                <Form.Control type="file" placeholder="Upload an profile photo" name="imageUpload" accept="image/*" />
            </FloatingLabel>
        <form className='registration-form-input-container'>
            <FloatingLabel
                controlId="floatingInput"
                label="Email Address"
                className="mb-3"
            >
                  <Form.Control type="email" placeholder="name@example.com" name="email" required/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3"
            >
                  <Form.Control type="text" placeholder="First Name" name='firstname' required/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3"
            >
                  <Form.Control type="text" placeholder="Last Name" name='lastname' required/>
            </FloatingLabel>
              <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="mb-3">
                  <Form.Control type="password" placeholder="Password" name='password' required/>
              </FloatingLabel>
              <FloatingLabel
                  controlId="confirmPassword"
                  label="Confirm Password"
                  className="mb-3">
                  <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' required/>
              </FloatingLabel>
              <button type="submit" className='btn btn-outline-primary form-submit-button' name="create" onClick={()=>navigate("/")}>Create Account</button>
        </form>
        <p>If you already have an account:</p>
        <button type="submit" className='btn btn-outline-success' name="login" onClick={()=>navigate("/Login")}>Login</button>
    </div>
  )
}

export default RegistrationForm