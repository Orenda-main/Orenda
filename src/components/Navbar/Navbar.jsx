import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import hamburger from "../../assets/hamburger.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="nav-wrapper">
          <div className="~w-[5rem]/[7.8125rem] ~h-[1.75rem]/[2.8rem] flex-shrink-0">
            <img className="h-full" src={logo} alt="Orenda Psychiatry" />
          </div>

          <ul className="nav-list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Our Team">Our Team</NavLink></li>
              <NavLink to='/Insurance'><li>Insurance</li></NavLink>
              
              <li><NavLink to="/about">About</NavLink></li>
              <NavLink to={'/blogs'}><li>Blog</li></NavLink>
              <li><NavLink to="/privacypolicy">Privacy policy</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>

          <div className="contact">
              <button>Book Now</button>
          </div>

          <img src={hamburger} alt="" className='hamburger'/>
        </div>
      
    </div>
  )
}

export default Navbar
