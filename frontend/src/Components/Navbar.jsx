import React from 'react';
import "./Navbar.css";
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import doc from "../data/doc";



const Navbar = () => {
  return (
    <div className="div navbar">
      <div className="search">
        <input/>
        <FiSearch className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <BiMessageRoundedDetail className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <MdNotificationsNone className='nav-icon' />
      </div>

      <div className="user">
        <span>Dr Kim Sim</span>
       <img src={doc} alt="doctor" />
      </div>
    </div>
  )
}

export default Navbar;