import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../CSS/registrationForm.css';

const RegistrationForm = () => {
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
                  controlId="Floating Password"
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
              <Button type="submit" className='registration-form-button' name="create">Create Account</Button>
        </form>
        <p>If you already have an account go to Log in page</p>
    </div>
  )
}

export default RegistrationForm