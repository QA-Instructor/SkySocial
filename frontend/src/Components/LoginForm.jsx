import React, { useEffect, useState } from 'react';
import "../resources/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginForm = () => {

  const [loginData, setLoginData] = useState({
    "username" : "",
    "userPassword" : ""
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', loginData);
      localStorage.setItem('token', response.data);
      alert('Login successful');
  } catch (error) {
      alert('Invalid credentials');
  }
  }


  const onFormChange = (key, value) => {
    setLoginData(prevFormData => ({ ...prevFormData, [key]: value, }))
};

  const onFormSubmit = () => {
    setLoginData(loginData)
    //Make axios request
    handleLogin().then(navigate('/'));
  }


  const navigate = useNavigate();
  return (
    <div className='login-form-container'>
        <h1>Welcome to Sky Social</h1>
        <br />
        <form onSubmit={onFormSubmit}>
            <div className='login-form-input-container'>
                <input type="text" placeholder='Email or username' name='username' className='form-control login-form-input-field' id='username' onChange={e => onFormChange(e.target.name, e.target.value)}/>
                <input type="password" name='userPassword' id='password' placeholder='Password' className='form-control login-form-input-field' onChange={e => onFormChange(e.target.name, e.target.value)}/>
                <input type="submit" value="Log in" name='login' className='btn btn-outline-primary form-submit-button' onClick={onFormSubmit}/>
            </div>
        </form>
        <br />
        <div className='create-account-container'>
            <p>OR</p>
            <button type="button" name='create-account' className='btn btn-outline-success' onClick={()=>navigate("/Registration")}>Create an Account</button>
        </div>
    </div>
  )
}

export default LoginForm