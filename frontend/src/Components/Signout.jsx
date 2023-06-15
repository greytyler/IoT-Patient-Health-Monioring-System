import React from "react";
import logoutAvatar from '../data/images/logoutAvatar.png';
import './Signout.css';

const Signout = () => {

  const handleLogout = () => {
    window.location.href = "http://localhost:5173";
  };

  return (
    <>
      <div id="logout-container">
        <div id="figure">
          <img src={logoutAvatar} alt='logout' />
        </div>
        <h2>GoodBye! Stay Healthy and Safe. </h2>
        <form>
          {/* <input type="name" id="username" placeholder="Enter your username" />
          <input type="password" id="p1p" placeholder="Enter your password" /> */}
          <input type="submit" onClick={handleLogout} value="Logout" id="logout-btn" />
        </form>
        <h4 id="statement">
          We strive to inspire hope and contribute to health and well-being of
          every patient.
        </h4>
      </div>
    </>
  );
};

export default Signout;
