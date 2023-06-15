import React from 'react';
import {MdHealthAndSafety } from "react-icons/md"
import { menuItems } from '../data/dummy';
import { Link } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="container">
      <div className="logo">
        <MdHealthAndSafety className="logo-icon" />
        <span>IoT P.M.S</span>
      </div>

      <div className="menu">
        {
          menuItems.map((item) => (

            <Link to={`/${item.name}`} key={item.id} style={{textDecoration: 'none'}}>
              <div className="item" >
                {item.icon}
                <h4>{item.title}</h4>
              </div>
            </Link>


          ))
        }
      </div>
    </div>
  )
}

export default Sidebar