import React, { useState, useEffect, useContext} from 'react';
import './Jobs.css';
import { Link,Navigate } from 'react-router-dom';
import {AuthContext} from './services/AuthContext';

const jobsData = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', image: 'images/job1.png' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignStudio', image: 'images/job3.jpg' },
    { id: 4, title: 'Project Manager', company: 'DataMinds', image: 'images/job4.png' },
    { id: 5, title: 'Data Scientist', company: 'TechWave', image: 'images/company6.jpg' },
    { id: 6, title: 'Mobile Developer', company: 'Appify', image: 'images/job6.png' },
    { id: 7, title: 'DevOps Engineer', company: 'CloudSync', image: 'images/job7.png' },
    { id: 8, title: 'QA Engineer', company: 'QualityPlus', image: 'images/job8.jpg' },
    { id: 9, title: 'Content Writer', company: 'Google', image: 'images/company5.png' },
    { id: 10, title: 'Cybersecurity Analyst', company: 'Intel', image: 'images/company3.png' }
];

const Jobs = () => {
    const [jobs,setJobs]=useState('');
    const [error,setError]=useState('');

    const { isLoggedIn } = useContext(AuthContext);

        // if (!isLoggedIn) {
        //     return <Navigate to="/login" />;
        // }
    useEffect(() => {
            const token = localStorage.getItem('token');

            if (token) {
                fetch('http://localhost:8080/job/allJobs', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to fetch jobs');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setJobs(data);
                    })
                    .catch(error => {

                    });
            } else {
                setError('No token found, please log in first.');
         }
    },[]);
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
