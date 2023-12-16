// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Archive from './components/Archive';
import Settings from './components/Settings';

// Welcome Page
const Welcome = () => (
  <div className="center-container">
    <h1>Welcome to Local</h1>
    <Link to="/signup"><button>Get Started</button></Link>
    <Link to="/home"><button>Continue as Guest</button></Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" component={<Profile/>} />
        <Route path="/archive" component={<Archive/>} />
        <Route path="/settings" component={<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;
