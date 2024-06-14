import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <ul>
      <li><Link to="/">Projects</Link></li>
      <li><Link to="/analysis">SEO Analysis</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
