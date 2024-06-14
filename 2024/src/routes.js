import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import SEOAnalysis from './components/SEOAnalysis';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const AppRoutes = () => (
  <Router>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '200px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/analysis" element={<SEOAnalysis />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default AppRoutes;
