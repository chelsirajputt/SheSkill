import React from 'react';
import './Network.css'; // Import the CSS file for styling

const profiles = [
    { id: 1, name: 'Jane Doe', title: 'Software Engineer', company: 'Tech Corp', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'John Smith', title: 'Product Manager', company: 'Innovate Inc.', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Emily Johnson', title: 'UX Designer', company: 'Creative Solutions', image: 'https://via.placeholder.com/100' },
    // Add more profiles as needed
];

const NetworkPage = () => {
    return (
        <div className="network-page">
            <h1>Network</h1>
            <div className="profile-list">
                {profiles.map(profile => (
                    <div key={profile.id} className="profile-card">
                        <img src={profile.image} alt={`${profile.name}'s profile`} className="profile-image" />
                        <div className="profile-info">
                            <h2 className="profile-name">{profile.name}</h2>
                            <p className="profile-title">{profile.title}</p>
                            <p className="profile-company">{profile.company}</p>
                            <button className="unfollow-button">Unfollow</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NetworkPage;
