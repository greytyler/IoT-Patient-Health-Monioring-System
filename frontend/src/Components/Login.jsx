import React, { useState,useEffect } from "react";

import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {login} from '../actions/userAction';
import { useDispatch, useSelector } from "react-redux";



const Login =  () => {
  
  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 

  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));

    
    
  };
  const redirect =  "/";

  useEffect(() => {
    if (error) {
      toast.error("Error while logging in")
    }

    if (isAuthenticated) {
      toast.success("Login successful")
      navigate(redirect)
    }
  }, [dispatch, error,navigate,  isAuthenticated, redirect]);
  
  return (
    <section>
      <div className='container'>
        <div className='imageContainer'>
          <img src="/loginAvatar.png" alt=""  />
        </div>
        <h1>Welcome, Stay Healthy and Safe</h1>

        <div className='formContainer'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="email" placeholder='Enter your Email'  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
            <p className='register'>Don't have an account? <Link to="/register"><span>Register</span></Link> </p>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          
        </div>

        <p className='login_p'>We strive to inspire hope and contribute to health and well being of every patient</p>
      </div>
    </section>
  )
}

export default Login