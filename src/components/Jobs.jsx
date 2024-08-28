import React from 'react';
import './Jobs.css';
import { Link } from 'react-router-dom';

const jobsData = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', image: 'images/job1.png' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignStudio', image: 'images/job3.jpg' },
    { id: 4, title: 'Project Manager', company: 'DataMinds', image: 'images/job4.png' },
    { id: 5, title: 'Data Scientist', company: 'TechWave', image: 'images/company6.jpg' },
    { id: 6, title: 'Mobile Developer', company: 'Appify', image: 'images/job6.png' },
    { id: 7, title: 'DevOps Engineer', company: 'CloudSync', image: 'images/job7.png' },
    { id: 8, title: 'QA Engineer', company: 'QualityPlus', image: 'images/job8.jpg' },
    { id: 9, title: 'Content Writer', company: 'Google', image: 'images/company5.png' },
    { id: 10, title: 'Cybersecurity Analyst', company: 'Intel', image: 'images/company3.png' },
];

const Jobs = () => {
    return (
        <div className="jobs-container">
            <h1>Exciting Job Opportunities</h1>
            <div className="jobs-list">
                {jobsData.map((job) => (
                    <div key={job.id} className="job-item">
                        <div className="job-image-container">
                            <img src={job.image} alt={`${job.company} logo`} />
                        </div>
                        <div className="job-info">
                            <h2>{job.title}</h2>
                            <p>{job.company}</p>
                            <button>Apply Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
