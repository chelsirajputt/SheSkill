import React from 'react';
 import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from './services/AuthContext'
import {useState, useContext} from 'react'

const Navbar = () => {
const {isLoggedIn,logout}=useContext(AuthContext)
const navigate=useNavigate()

function handleLogout(){
logout();
navigate('/login')
}
    return (
  
           <nav>
            <div className="logo-container">
                <img src="images/logo2.png" className="logo2" alt="Logo"/>
                <div className="SheSkill">
                    <h3>SheSkill</h3>
                </div>
            </div>
            <ul>
            <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/jobs'>Jobs</Link></li>
                <li><Link to='/Message'>Message</Link></li>
                <li><Link to='/Network'>Network</Link></li>
                <li><Link to='/about'>About us</Link></li>
                
                
                <li><Link to='/entrepreneurship'>Entrepreneurship</Link></li>
            </ul>
            {!isLoggedIn && <div className="buttons">
                <Link className="login-btn" to="/login">Login</Link>
                <Link className="signup-btn" to="/signup">SignUp</Link>
            </div>}
            {isLoggedIn && <div className="buttons">
                            <button className="login-btn" onClick={handleLogout} >Logout</button>

                        </div>}
        </nav>
      
    );
}

export default Navbar;
