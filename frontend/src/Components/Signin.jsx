import React from 'react'
import {Link} from 'react-router-dom'
import loginAvatar from '../data/images/loginAvatar.png'
import './Signin.css';


const Signin = () => {
  return (
    <>
    <div id="login-container">
		<div id="figure">
		  <img src={loginAvatar} id="doc-img" alt='login'/>
		</div>
		<h2>Enter your credentials to log in!!</h2>
		<form >
			<input type="name" id="username" placeholder="Enter your username"/>
			<input type="email" id="email" placeholder="Enter your email"/>
			<input type="password" id="p1p" placeholder="Enter your password"/>
			<input type="submit" value='Log In' id='login-btn'/>
    	<span>
    		Don't have an account? 
    		<Link to="./Signup">Sign Up! </Link>
    	</span>
		</form>
		<h4 id="statement">
				We strive to inspire hope and contribute to health and well-being of every patient.
			</h4> 
	</div>
    </>
  )
}

export default Signin;