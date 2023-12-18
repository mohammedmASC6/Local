// src/components/Home.js
import React from 'react';
import Sidebar from './Sidebar';

const Profile = () => (
  <div className="home-container">
    <Sidebar />
    <div className="content">
      <h2>PROFILE</h2>
      {/* Your home page content goes here */}
    </div>
  </div>
);

export default Profile;
