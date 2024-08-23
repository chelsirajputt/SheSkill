import React from 'react';
import './Companies.css';

const CompaniesSection = () => {
    return (
        <section className="companies-section">
    <div className="container">
        <h2 className="companies-heading">Our Partner Companies</h2>
        <div className="companies-area flex">
            <div className="company-card flex">
                <img src="images/company1.png" alt="Company 1 Logo"/>
              
                
                <p>They are known for their cutting-edge products and commitment to excellence.</p>
                <a href="#" className="about-more-btn">About More</a>
            </div>

            <div className="company-card flex">
                <img src="images/company2.jpg" alt="Company 2 Logo"/>
              
                <p>Company 2 excels in providing top-notch consulting services for various industries.</p>
               
                <a href="#" className="about-more-btn">About More</a>
            </div>

            <div className="company-card flex">
                <img src="images/company3.png" alt="Company 3 Logo"/>
                
                <p>Company 3 is renowned for its innovative approaches in software development.</p>
                
                <a href="#" className="about-more-btn">About More</a>
            </div>

            <div className="company-card flex">
                <img src="images/company4.png" alt="Company 4 Logo"/>
              
                <p>Company 4 specializes in digital marketing strategies that boost online presence.</p>
               
                <a href="#" className="about-more-btn">About More</a>
            </div>

            <div className="company-card flex">
                <img src="images/company5.png" alt="Company 5 Logo"/>
               
                <p>Company 5 offers cutting-edge solutions in financial technology and services.</p>
                
                <a href="#" className="about-more-btn">About More</a>
            </div>

            <div className="company-card flex">
                <img src="images/company6.jpg" alt="Company 6 Logo"/>
               
                
                <p>Their expertise lies in crafting impactful campaigns and strategies.</p>
                <a href="#" className="about-more-btn">About More</a>
            </div>
        </div>
    </div>
</section>


    );
}

export default CompaniesSection;
