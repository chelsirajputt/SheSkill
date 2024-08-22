import React from 'react';
 import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
  
           <nav>
            <div className="logo-container">
                <img src="images/logo2.png" className="logo2" alt="Logo"/>
                <div className="SheSkill">
                    <h3>SheSkill</h3>
                </div>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><Link to='/jobs'>Jobs</Link></li>
               
                <li><a href="#">Message</a></li>
                <li><a href="#">Network</a></li>
               
                <li><a href="#">About us</a></li>
                <li><a href="#">Entrepreneurship</a></li>
            </ul>
            <div className="buttons">
                <Link className="login-btn" to="/login">Login</Link>
                <Link className="signup-btn" to="/signup">SignUp</Link>
            </div>
        </nav>
      
    );
}

export default Navbar;
