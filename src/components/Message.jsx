import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <a href="mailto:sheskillportal@gmail.com" className="email-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#64ffda" className="icon">
            {/* Envelope icon */}
            <path d="M2 3h20v18H2z" />
          </svg>
          <span>sheskillportal@gmail.com</span>
        </a>
        <a href="https://twitter.com" className="social-link">
          Twitter
        </a>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <h2 className="form-title">Write me a Message <span role="img" aria-label="pointing down">👇</span></h2>
        <form className="form">
          <input
            type="text"
            placeholder="Your Name"
            className="input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="textarea"
          />
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
