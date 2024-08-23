import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-heading">Company</h2>
                    <ul className="footer-list">
                        <li><a href="About.jsx" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">Careers</a></li>
                        <li><a href="#" className="footer-link">Brand Center</a></li>
                        <li><a href="#" className="footer-link">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-heading">Help Center</h2>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">Discord Server</a></li>
                        <li><a href="#" className="footer-link">Twitter</a></li>
                        <li><a href="#" className="footer-link">Facebook</a></li>
                        <li><a href="#" className="footer-link">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-heading">Legal</h2>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        <li><a href="#" className="footer-link">Licensing</a></li>
                        <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-heading">Download</h2>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">iOS</a></li>
                        <li><a href="#" className="footer-link">Android</a></li>
                        <li><a href="#" className="footer-link">Windows</a></li>
                        <li><a href="#" className="footer-link">MacOS</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span className="footer-bottom-text">© 2023 <a href="#" className="footer-bottom-link">Your Company</a>. All Rights Reserved.</span>
                <div className="footer-social">
                    <a href="#" className="footer-social-link" aria-label="Facebook">F</a>
                    <a href="#" className="footer-social-link" aria-label="Discord">D</a>
                    <a href="#" className="footer-social-link" aria-label="Twitter">T</a>
                    <a href="#" className="footer-social-link" aria-label="GitHub">G</a>
                    <a href="#" className="footer-social-link" aria-label="Dribbble">D</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
