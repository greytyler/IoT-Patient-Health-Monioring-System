import React, { useState } from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import { API_URL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL + `/api/v1/register`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      toast.success("Account created successfully");
      setRedirect(true);
    } else {
      toast.error("Error on creating the account");
    }

    if(redirect) {
      return (<Navigate to={'/'} />)
    }

    
  };
  return (
    <section>
      <div className="container">
        <div className="imageContainer">
          <img src="/loginAvatar.png" alt="" />
        </div>
        <h1>Welcome, Stay Healthy and Safe</h1>

        <div className="formContainer">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            <p className="register">
              Already have an account?{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>{" "}
            </p>
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

        <p className="login_p">
          We strive to inspire hope and contribute to health and well being of
          every patient
        </p>
      </div>
    </section>
  );
};

export default Register;
