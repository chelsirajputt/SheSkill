import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname, gender, age, phoneNumber, email, password }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                navigate('/login');
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation', error);
            });
    }

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
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input type="text" id="fullname" name="fullname" placeholder="Full Name" required
                                        value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <select id="gender" name="gender" required
                                        value={gender} onChange={(e) => setGender(e.target.value)}>
                                        <option value="" disabled>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <input type="number" id="age" name="age" placeholder="Age" required
                                        value={age} onChange={(e) => setAge(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <input type="tel" id="phonenumber" name="phonenumber" placeholder="Phone Number" required
                                        value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <input type="text" id="email" name="email" placeholder="Personal Email" required
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <input type="password" id="password" name="password" placeholder="Set Your Password" required
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" required
                                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
