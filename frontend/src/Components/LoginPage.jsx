import React from 'react'
import LoginForm from "./LoginForm"
import "../resources/loginPage.css"
export const LoginPage = () => {
  return (
    <div className='loginPage'>
        <div className='loginPage-logo-container'>
            <div className='loginPage-logo'>
                Sky Social
            </div>
            <div className='loginPage-info'>
                Sky Social is your gateway to a social life at Sky.
                Explore opportunities to get involved in sports and 
                various socials around Sky.
            </div>
        </div>
        <div className='loginPage-form-container'>
            <LoginForm/>
        </div>
        
    </div>
  )
}

export default LoginPage