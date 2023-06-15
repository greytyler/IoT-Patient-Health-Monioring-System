import React from 'react'

import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AddPatient from "../Components/Add_Patient";
import Patients from "../Components/Patients";
//import { loadUser } from "./actions/userAction";
//import store from "./store";
import Charts from "../Components/Charts";
import Home from "../Components/Home";
import Signout from "../Components/Signout";
import './dashboard.css'
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <>

    
    <div className="main">

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="nav">
        <div className="navbar">
          <Navbar />
        </div>

        <div>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/add_patient" element={<AddPatient />} />
              <Route path="/signout" element={< Signout  />} />
              <Route path="/charts" element={<Charts />} />
            </Routes>
            
            
            
          
        </div>
      </div>
    </div>

    <div>
      
   
    </div>

    </>
  )
}

export default Dashboard;