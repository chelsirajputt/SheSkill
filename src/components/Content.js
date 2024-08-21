import React from 'react';
import './Content.css';

const Content = () => {
    return (
        <div class="content">
        <div class="left-side">
            <img src="images/girl2.png" class="left-image" alt="A girl illustration"/>
        </div>
        <div class="right-side">
            <h1 class="main-heading">Find the most exciting startup jobs</h1>
            <div class="job-search-bar">
                <input type="text" placeholder="State" class="search-input state-input"/>
                <input type="text" placeholder="City" class="search-input city-input"/>
                <input type="text" placeholder="Location" class="search-input location-input"/>
                <button class="search-btn">Search</button>
            </div>
            
        </div>
    </div>

    );
}

export default Content;
