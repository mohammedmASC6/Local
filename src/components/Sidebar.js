// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/home">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/archive">Archive</Link>
    <Link to="/settings">Settings</Link>
  </div>
);

export default Sidebar;
