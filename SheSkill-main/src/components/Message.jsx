import React, { useState } from 'react';
import './Message.css';

const Message = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, sent: true }]);
            setMessage('');
        }
    };

    return (
        <div className="message-container">
            <div className="message-header">
                <h2>Messages</h2>
            </div>
            <div className="message-body">
                <div className="message-list">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message-item ${msg.sent ? 'sent' : 'received'}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="message-footer">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Message;
