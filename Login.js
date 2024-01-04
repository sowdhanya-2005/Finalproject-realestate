import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [action, setAction] = useState("Sign Up");
  return (
    <div className="insert_image">
    <div className='log-container'>
        <div className="log-header">
            <div className="log-text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
         
         <input type="text" placeholder="Name" required/>   
        </div>}
        
        
        <div className="input">
        
         <input type="email" placeholder="Email Id" required/>   
        </div>
        <div className="input">
        
         <input type="password" placeholder="Password" required/>   
        </div>
        {action==="Login" ? <div></div> :<div className="input">
          
          <input type="password" placeholder="Confirm Password" required></input>
        </div>}
        </div>
        
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>

        </div>
    </div>
    </div>
  )
}

export default Login
