// src/components/Home.js
import React from 'react';
import Sidebar from './Sidebar';
import './Home.css'; // Import the CSS file

const Home = () => (
  <div className="home-container">
    <Sidebar />
    <div className="content">
      <h2>HOME PAGE</h2>
      {/* Your home page content goes here */}
    </div>
  </div>
);

export default Home;
