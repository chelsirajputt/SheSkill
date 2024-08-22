import React from 'react';
import './Content.css';

const Content = () => {
    return (
        <div className="content">
        <div className="left-side">
            <img src="images/girl2.png" className="left-image" alt="A girl illustration"/>
        </div>
        <div className="right-side">
            <h1 className="main-heading">Find the most exciting startup jobs</h1>
            <div className="job-search-bar">
                <input type="text" placeholder="State" className="search-input state-input"/>
                <input type="text" placeholder="City" className="search-input city-input"/>
                <input type="text" placeholder="Location" className="search-input location-input"/>
                <button className="search-btn">Search</button>
            </div>
            
        </div>
    </div>

    );
}

export default Content;
