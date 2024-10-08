import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from '../image.jpg'
import './signin.css'
import photo from '../photo.jpg'


const SignIn = () => {
   const[email, setEmail] = useState('');
   const[password, setPassword] = useState('');
   const[message, setMessage] = useState('');

   const handleSignIn = (e) =>{
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password123') {
        setMessage('sign in successful!')
    } else{
        setMessage('Invalid email or password')
    }
   }
    return(
        <div className="option">
            <div id="header">
                <h1 id="head">Sign in to KWARA RIDE</h1>
                <img className="image" src={image} alt="" />
            </div>
            <button id="but">
                <img src={photo} alt="" />
            sign in with Google
            </button>
            
            <form onSubmit={handleSignIn}>
            <div>
             <label> Username or Email</label> 
             <br />
             <input
             id="value" 
             type="email"
             value={email} 
             onChange ={(e) => setEmail(e.target.value)}
             required
             />
            </div>
            <div>
                <label>password</label>
                <input 
                id="word"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.vaue)}
                required
                />
            </div>
            <button type="submit">sign in</button>
            </form>
           

          {message && <p>{message}</p>}
        </div>
    )
}
 
export default SignIn