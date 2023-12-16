// src/components/Home.js
import React from 'react';
import Sidebar from './Sidebar';
import './Sidebar.css'; // Import the CSS file

const Profile = () => (
  <div className="home-container">
    <Sidebar />
    <div className="content">
      <h2>HOME</h2>
      {/* Your home page content goes here */}
    </div>
  </div>
);

export default Profile;
