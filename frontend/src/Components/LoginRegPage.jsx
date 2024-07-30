import React from 'react'
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"
import "../resources/loginRegPage.css"

export const LoginRegPage = (props) => {
  return (
    <div className='loginRegPage'>
        <div className='loginRegPage-logo-container'>
            <div className='loginRegPage-logo'>
                Sky Social
            </div>
            <div className='loginRegPage-info'>
                Sky Social is your gateway to a social life at Sky.
                Explore opportunities to get involved in sports and 
                various socials around Sky.
            </div>
        </div>
        
        <div className='loginRegPage-form-container'>
        {props.displayLoginRegPage && <LoginForm/>}
        {!props.displayLoginRegPage && <RegistrationForm/>}
        </div>
        
    </div>
  )
}


export default LoginRegPage