import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Jobs from './components/Jobs';
import Message from './components/Message';
import Network from './components/Network';
import About from './components/About';
import Entrepreneurship from './components/Entrepreneurship'; // Import the Entrepreneurship component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/message" element={<Message />} />
        <Route path="/network" element={<Network />} />
        <Route path="/about" element={<About />} />
        <Route path="/entrepreneurship" element={<Entrepreneurship />} /> {/* Add the route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
