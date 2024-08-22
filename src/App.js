import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';

import Jobs from './components/Jobs';
import Message from './components/Message';
import Network from './components/Network';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/message" element={<Message />} />
                <Route path="/network" element={<Network />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
