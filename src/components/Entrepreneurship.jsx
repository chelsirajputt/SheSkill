import React, { useState } from 'react';
import './Entrepreneurship.css';

function Entrepreneurship() {
  const [ideas, setIdeas] = useState([]);
  const [idea, setIdea] = useState('');
  const [contact, setContact] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null); // New state for file upload

  const addIdea = (e) => {
    e.preventDefault();
    if (idea && contact && (link || file)) {
      const fileURL = file ? URL.createObjectURL(file) : null;
      setIdeas([...ideas, { idea, contact, link, file: fileURL, contributions: [] }]);
      setIdea('');
      setContact('');
      setLink('');
      setFile(null); // Reset file input
    }
  };

  const addContribution = (index, contribution) => {
    const newIdeas = ideas.map((ideaItem, i) =>
      i === index ? { ...ideaItem, contributions: [...ideaItem.contributions, contribution] } : ideaItem
    );
    setIdeas(newIdeas);
  };

  return (
    <div className="entrepreneurship-wrapper">
      <div className="image-container">
        <img src="images/group1.png" alt="Entrepreneurship Illustration" />
      </div>
      <div className="entrepreneurship-container">
        <form className="idea-form" onSubmit={addIdea}>
          <h2>Share Your Innovative Idea</h2>
          <textarea
            placeholder="Describe your idea..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your contact details"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link related to your idea (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])} // Capture file input
          />
          <button type="submit">Submit Idea</button>
        </form>

        <div className="idea-list">
          <h2>Innovative Ideas</h2>
          {ideas.map((ideaItem, index) => (
            <div key={index} className="idea-item">
              <p>{ideaItem.idea}</p>
              <p>Contact: {ideaItem.contact}</p>
              {ideaItem.link && (
                <p>
                  Link: <a href={ideaItem.link} target="_blank" rel="noopener noreferrer">{ideaItem.link}</a>
                </p>
              )}
              {ideaItem.file && (
                <p>
                  Uploaded File: <a href={ideaItem.file} target="_blank" rel="noopener noreferrer">View File</a>
                </p>
              )}
              <h4>Contributions:</h4>
              <ul>
                {ideaItem.contributions.map((contribution, idx) => (
                  <li key={idx}>{contribution}</li>
                ))}
              </ul>
              <textarea
                placeholder="Add your contribution..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim() !== '') {
                    addContribution(index, e.target.value.trim());
                    e.target.value = '';
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Entrepreneurship;
