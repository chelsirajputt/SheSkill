import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <h1>About Us</h1>
            </header>
            <section className="about-us-content">
                <h2>Our Mission</h2>
                <p>
                    We are dedicated to providing high-quality services that meet the needs of our clients.
                    Our mission is to create value through innovative solutions and exceptional customer service.
                </p>
                <h2>Our Team</h2>
                <p>
                    Our team consists of experienced professionals who are passionate about delivering excellence.
                    With diverse backgrounds and skills, we work together to achieve common goals and exceed expectations.
                </p>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or need further information, please feel free to contact us at:
                    <a href="mailto:yogaprakash@gmail.com"> info@example.com</a>.
                </p>
            </section>
        </div>
    );
};

export default About-us;