import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import Report from './components/Report';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar collapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar} />
        <div className={`content ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
