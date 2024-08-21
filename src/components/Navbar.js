import React from 'react';
 import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
  
           <nav>
            <div class="logo-container">
                <img src="images/logo2.png" class="logo2" alt="Logo"/>
                <div class="SheSkill">
                    <h3>SheSkill</h3>
                </div>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Companies</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="#">Network</a></li>
                <li><a href="#">Sessions</a></li>
                <li><a href="#">Events</a></li>
            </ul>
            <div class="buttons">
                <Link class="login-btn" to="/login">Login</Link>
                <Link class="signup-btn" to="/signup">SignUp</Link>
            </div>
        </nav>
      
    );
}

export default Navbar;
