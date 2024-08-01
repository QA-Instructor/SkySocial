import React from 'react';
import "../resources/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {

  const loginData = {
    "username" : "",
    "userPassword" : ""
  }


  const onFormChange = (key, value) => {
      loginData[key] = value;
  }

  const onFormSubmit = () => {
    console.log(loginData)
    //Make axios request
    navigate('/')
  }


  const navigate = useNavigate();
  return (
    <form className='login-form-container'>
        <h1>Welcome to Sky Social</h1>
        <br />
        <form>
            <div className='login-form-input-container'>
            <FloatingLabel
                controlId="floatingInput"
                label="Email Address"
                className="mb-3"
            >
                  <Form.Control type="email" placeholder="name@example.com" name="userEmail" onChange={e => onFormChange(e.target.name, e.target.value)} required/>
            </FloatingLabel>      
              <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="mb-3">
                  <Form.Control type="password" placeholder="Password" id='password' name='userPassword' onChange={e => onFormChange(e.target.name, e.target.value)} required/>
              </FloatingLabel>     
                <input type="submit" value="LOGIN" name='LOGIN' className='btn btn-outline-primary form-submit-button' onClick={onFormSubmit}/>
            </div>
        </form>
        <br />
        <div className='create-account-container'>
            <p>OR</p>
            <button type="button" name='create-account' className='btn btn-outline-success form-submit-button' onClick={()=>navigate("/Registration")}>Create an Account</button>
        </div>
    </form>
  )
}

export default LoginForm