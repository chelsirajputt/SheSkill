import React from 'react';
import './Header.css';

const Header = () => {
    const handleGetStartedClick = () => {
        const jobSearchElement = document.getElementById('job-search');
        jobSearchElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <div className="header-content">
                <div className="header-left">
                    <h1 className="main-heading">Create Confidently</h1>
                    
                    <p>Unlock your potential and begin your journey towards a fulfilling career.</p>
                    <p>Your career starts here—take the first step towards your dreams.</p>
                    <p>Empower yourself today, and let your ambitions take flight.</p>
                    
                    <div className="button">
                        <button className="get-started-btn" onClick={handleGetStartedClick}>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="header-right">
                    <img src="images/girl1.png" className="right-image" alt="A girl illustration"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
