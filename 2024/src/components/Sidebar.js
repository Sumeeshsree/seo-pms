import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ collapsed, onToggleSidebar }) => {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={onToggleSidebar}>
        {collapsed ? '>' : '<'}
      </div>
      <div className="menu">
        <div className="menu-item">
          <Link to="/">Home</Link>
        </div>
        <div className="menu-item">
          <Link to="/report">Report</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
