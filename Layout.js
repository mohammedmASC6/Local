// Layout.js
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div className="container">
    <Sidebar />
    <div className="content">{children}</div>
  </div>
);

export default Layout;
