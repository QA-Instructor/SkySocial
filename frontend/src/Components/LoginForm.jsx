import React, { useEffect, useState } from 'react';
import "../resources/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegUserCircle } from "react-icons/fa";
import config from '../config.json';

const LoginForm = () => {

  const [loginData, setLoginData] = useState({
    "email" : "",
    "userPassword" : ""
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(config.backend.SERVER_URL +'/authLogin', loginData);
      localStorage.setItem('token', response.data);
      navigate("/");
  } catch (error) {
      alert('Invalid credentials');
  }
  }


  const onFormChange = (key, value) => {
    setLoginData(prevFormData => ({ ...prevFormData, [key]: value, }))
};

  const onFormSubmit = e => {
    e.preventDefault()
    setLoginData(loginData)
    //Make axios request
    handleLogin().then();
  }


  const navigate = useNavigate();
  return (
    <form className='login-form-container'>
        <div className='user-icon'><FaRegUserCircle /></div>
        <h1>Login</h1>
        <br />
        <form onSubmit={e => onFormSubmit(e)} method='post'>
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