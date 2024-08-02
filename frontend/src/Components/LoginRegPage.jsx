import React from 'react'
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"
import "../resources/loginRegPage.css"


export const LoginRegPage = (props) => {
  return (
    <>
    <div className='loginRegPage'>
        <div className='loginRegPage-logo-container'>
            <div className='loginRegPage-logo'>
                <img
                    className='logo-img'
                    src='logocolour.png'
                    alt="Second Slide"
                />
            </div>
            <div className='loginRegPage-image'>
            <img
                    className='login-img'
                    src='login-image.png'
                    alt="Second Slide"
                />
            </div>
        </div>
        
        <div className='loginRegPage-form-container'>
        {props.displayLoginRegPage && <LoginForm/>}
        {!props.displayLoginRegPage && <RegistrationForm/>}
        </div>
        
      </div>
      </>
  )
}


export default LoginRegPage