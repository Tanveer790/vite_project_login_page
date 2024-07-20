import React, { useState } from 'react'
import './SignupLogin.css'

export const SignUp = () => {

    const [action, setAction] = useState("Sign Up");

    const handleSignUp = () => {
        if (action !== "Sign Up") {
            setAction("Sign Up");
        }
    };

    const handleLogIn = ()=> {
        if (action !== "Log In"){
            setAction("Log In")
        }
    };

  return (

    <div className='app'>
        <div className='circular-img'>
        
        </div>
        <div className='app_min'>
            <span className='top'>
                <b>{action}</b>
            </span>
            <form action=''>
                {action === "Log In" ? null :<td><input type="text" placeholder='Username' /></td>}<br/>
                <td><input type="email" placeholder='Email'/></td><br />
                <td><input type="Password" placeholder='Password' /></td><br />
                <span className='rem'><input type="checkbox" />Remember me</span>
                <div className='container'>
                    <button className= {action === "Log In" ? "submit submit-gray" : "submit"} type='button' onClick={handleSignUp}><b>Sign Up</b></button>
                    <button className= {action === "Sign Up" ? "submit submit-gray" : "submit"} type='button' onClick={handleLogIn}><b>Log In</b></button>
                    <br />
                </div>
                <a href="" className='botm'>Forgot Password?</a>
            </form>

        </div>
    </div>
  )
}
