import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div class="header-content">
                <div class="header-left">
                    <h1 class="main-heading">Create Confidently</h1>
                    
                    <p>Unlock your potential and begin your journey towards a fulfilling career.</p>
                    <p>Your career starts here—take the first step towards your dreams.</p>
                    <p>Empower yourself today, and let your ambitions take flight.</p>
                    

                    <div class="button">
                        <button class="get-started-btn">Get Started</button>
                    </div>
                </div>
                <div class="header-right">
                    <img src="images/girl1.png" class="right-image" alt="A girl illustration"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
