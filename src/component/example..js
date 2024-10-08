// // src/SignIn.js  
// import React, { useState } from 'react';  
// import { auth, firebase } from './firebaseConfig'; // Import your firebase configuration  

// const SignIn = () => {  
//   const [email, setEmail] = useState('');  
//   const [password, setPassword] = useState('');  

//   const handleSignInWithEmail = (e) => {  
//     e.preventDefault();  
//     auth.signInWithEmailAndPassword(email, password)  
//       .then(() => {  
//         // Handle successful sign-in  
//       })  
//       .catch(error => {  
//         // Handle sign-in errors  
//         console.error(error);  
//       });  
//   };  

//   const handleSignInWithGoogle = () => {  
//     const provider = new firebase.auth.GoogleAuthProvider();  
//     auth.signInWithPopup(provider)  
//       .then(() => {  
//         // Handle successful sign-in  
//       })  
//       .catch(error => {  
//         console.error(error);  
//       });  
//   };  

//   return (  
//     <div>  
//       <h1>Sign in to KWARA RIDE</h1>  
//       <button onClick={handleSignInWithGoogle}>Sign in with Google</button>  
//       <hr />  
//       <form onSubmit={handleSignInWithEmail}>  
//         <label>  
//           Username or Email  
//           <input  
//             type="email"  
//             value={email}  
//             onChange={(e) => setEmail(e.target.value)}  
//             required  
//           />  
//         </label>  
//         <label>  
//           Password  
//           <input  
//             type="password"  
//             value={password}  
//             onChange={(e) => setPassword(e.target.value)}  
//             required  
//           />  
//         </label>  
//         <button type="submit">Sign In</button>  
//       </form>  
//       <a href="/forgot-password">Forgot?</a>  
//       <p>  
//         Don’t have an account? <a href="/sign-up">Sign up</a>  
//       </p>  
//     </div>  
//   );  
// };  

// export default SignIn;
// src/SignIn.js  
// import React, { useState } from 'react';  

// const SignIn = () => {  
//   const [email, setEmail] = useState('');  
//   const [password, setPassword] = useState('');  
//   const [message, setMessage] = useState('');  

//   const handleSignIn = (e) => {  
//     e.preventDefault();  
//     // Simulate an API call  
//     if (email === 'user@example.com' && password === 'password123') {  
//       setMessage('Sign in successful!');  
//     } else {  
//       setMessage('Invalid email or password');  
//     }  
//   };  

//   return (  
//     <div>  
//       <h1>Sign In</h1>  
//       <form onSubmit={handleSignIn}>  
//         <div> 
//           <label>Email:</label>  
//           <input   
//             type="email"   
//             value={email}   
//             onChange={(e) => setEmail(e.target.value)}   
//             required   
//           />  
//         </div>  
//         <div>  
//           <label>Password:</label>  
//           <input   
//             type="password"   
//             value={password}   
//             onChange={(e) => setPassword(e.target.value)}   
//             required   
//           />  
//         </div>  
//         <button type="submit">Sign In</button>  
//       </form>  
//       {message && <p>{message}</p>}  
//     </div>  
//   );  
// };  

// export default SignIn;
import React, { useState } from "react";  
import { Link } from "react-router-dom";  
import image from '../image.jpg';  
import './signup.css';  

const SignIn = () => {  
   const [email, setEmail] = useState('');  
   const [password, setPassword] = useState('');  
   const [message, setMessage] = useState('');  

   const handleSignIn = (e) => {  
      e.preventDefault();  
      if (email === 'user@example.com' && password === 'password123') {  
          setMessage('Sign in successful!');  
      } else {  
          setMessage('Invalid email or password');  
      }  
   };  

   return (  
      <div>  
          <div id="header">  
              <h1 id="head">Sign in to KWARA RIDE</h1>  
              <img className="image" src={image} alt="" />  
          </div>  
          <form onSubmit={handleSignIn}>  
              <div>  
                  <label>Email</label>  
                  <input  
                      type="email"  
                      value={email}  
                      onChange={(e) => setEmail(e.target.value)} // Corrected here  
                      required  
                  />  
              </div>  
              <div>  
                  <label>Password</label>  
                  <input  
                      type="password" // Changed type to "password" for security  
                      value={password}  
                      onChange={(e) => setPassword(e.target.value)} // Corrected here  
                      required  
                  />  
              </div>  
              <button type="submit">Sign in</button>  
          </form>  

          {message && <p>{message}</p>}  
      </div>  
   );  
};  

export default SignIn;