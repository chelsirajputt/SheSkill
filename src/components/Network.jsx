import React, { useState } from 'react';
import './Network.css';
import { Link } from 'react-router-dom';

const Network = () => {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSendOtp = () => {
        // Here, you would typically send the OTP request
        setOtpSent(true);
    };

    return (
        <div className="network-container">
            <div className="network-navbar">
                <h1 className="network-heading">Welcome Back to SheSkill</h1>
                <div className="network-box">
                    <h2 className="network-box-heading">Sign In</h2>
                    <div className="network-options">
                        <button className="network-option google">
                            <img src="images/glogo1.png" alt="Sign in with Google" className="network-icon" />
                            Sign in with Google
                        </button>
                        <button className="network-option linkedin">
                            <img src="images/llogo2.png" alt="Sign in with LinkedIn" className="network-icon" />
                            Sign in with LinkedIn
                        </button>
                    </div>
                    <div className="network-email">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="network-email-input"
                        />
                        <button
                            onClick={handleSendOtp}
                            className="network-otp-button"
                            disabled={!email}
                        >
                            Continue with OTP
                        </button>
                    </div>
                    {otpSent && <p className="otp-sent-message">OTP has been sent to your email!</p>}
                </div>
            </div>
        </div>
    );
};

export default Network;
