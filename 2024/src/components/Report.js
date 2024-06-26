import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Report.css';

const Report = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://seo-pms.vercel.app/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const completedItems = items.filter(item => item.status === 'completed').length;
  const pendingItems = items.filter(item => item.status === 'pending').length;
  const nearDeadlineItems = items.filter(item => {
    const deadline = new Date(item.deadline);
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    return deadline >= today && deadline <= nextWeek;
  }).length;

  return (
    <div className="container">
      <h1 className="title">Report</h1>
      <div className="report-section">
        <h2>Completed Items</h2>
        <p>{completedItems}</p>
      </div>
      <div className="report-section">
        <h2>Pending Items</h2>
        <p>{pendingItems}</p>
      </div>
      <div className="report-section">
        <h2>Near Deadline Items (Next 7 Days)</h2>
        <p>{nearDeadlineItems}</p>
      </div>
    </div>
  );
};

export default Report;
