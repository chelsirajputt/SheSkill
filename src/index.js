// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Global styles if any
import App from './App';
import AuthProvider from './components/services/AuthContext.jsx'

ReactDOM.render(
    <React.StrictMode>
    <AuthProvider>
        <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

