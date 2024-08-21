// src/App.js
import React from 'react';
import Home from './Home';
import "./App.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';



const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/signup" element={<SignUp/>}></Route>
           
            </Routes></BrowserRouter>
      
    );
};

export default App;
