// src/App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import CompaniesSection from './components/CompaniesSection';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className='container'>   
        <Navbar/>
            <Header />
               <Content />
        <CompaniesSection />
        </div>
    );
};

export default App;
