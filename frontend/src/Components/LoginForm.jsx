import React from 'react';
import PropTypes from 'prop-types';
import "../resources/LoginForm.css";

const LoginForm = () => {
  return (
    <div className='form-container'>
        <h1>Welcome to Sky Social</h1>
        <br />
        <form method='post'>
            <div className='input-container'>
                <input type="text" placeholder='Email or username' name='username' className='form-control input-field' id='username'/>
                <input type="password" name='password' id='password' placeholder='Password' className='form-control input-field'/>
                <input type="submit" value="Log in" name='login' className='btn btn-outline-primary form-submit-button'/>
            </div>
        </form>
        <br />
        <div className='create-account-container'>
            <p>OR</p>
            <button type="button" name='create-account' className='btn btn-outline-success'>Create an Account</button>
        </div>
    </div>
  )
}

export default LoginForm