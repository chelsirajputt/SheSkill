import React from 'react';
import './Jobs.css';
import { Link } from 'react-router-dom';

function Jobs() {
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'TechCorp',
            location: 'San Francisco, CA',
            type: 'Technical',
            image: 'images/techcorp.png'
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            company: 'Designify',
            location: 'New York, NY',
            type: 'Non-Technical',
            image: 'images/designify.png'
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'DataWorks',
            location: 'Boston, MA',
            type: 'Technical',
            image: 'images/dataworks.png'
        },
        {
            id: 4,
            title: 'HR Manager',
            company: 'PeopleFirst',
            location: 'Los Angeles, CA',
            type: 'Non-Technical',
            image: 'images/peoplefirst.png'
        },
        // Add more job listings as needed
    ];

    return (
        <div className="jobs-container">
            <h2>Available Jobs</h2>
            <div className="job-listings">
                {jobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <img src={job.image} alt={job.company} className="company-logo" />
                        <div className="job-info">
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.location}</p>
                            <button className="apply-btn">Apply</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
