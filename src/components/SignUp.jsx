import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className="signup-container">
                <div className="left-section">
                    <img src="images/girl7.png" alt="Signup Illustration" />
                </div>
                <div className="right-section">
                    <div className="container-signup">
                        <div className="signup-box">
                            <h2>Sign up</h2>
                            <form action="/dashboard" method="POST">
                                <div className="input-group">
                                    <input type="text" id="fullname" name="fullname" placeholder="Full Name" required />
                                </div>
                                <div className="input-group">
                                    <select id="gender" name="gender" required>
                                        <option value="" disabled selected>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <input type="number" id="age" name="age" placeholder="Age" required />
                                </div>
                                <div className="input-group">
                                    <input type="tel" id="phonenumber" name="phonenumber" placeholder="Phone Number" required />
                                </div>
                                <div className="input-group">
                                    <input type="text" id="email" name="email" placeholder="Personal Email" required />
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" name="password" placeholder="Set Your Password" required />
                                </div>
                                <div className="input-group">
                                    <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" required />
                                </div>
                                <button type="submit">Sign Up</button>
                            </form>
                            <div className="already-account">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
