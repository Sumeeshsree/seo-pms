import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Report.css';

const Report = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => {
        setTasks(response.data);
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

  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const nearDeadlineTasks = tasks.filter(task => {
    const deadline = new Date(task.deadline);
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    return deadline >= today && deadline <= nextWeek;
  }).length;

  return (
    <div className="container">
      <h1 className="title">Report</h1>
      <div className="report-section">
        <h2>Completed Tasks</h2>
        <p>{completedTasks}</p>
      </div>
      <div className="report-section">
        <h2>Pending Tasks</h2>
        <p>{pendingTasks}</p>
      </div>
      <div className="report-section">
        <h2>Near Deadline Tasks (Next 7 Days)</h2>
        <p>{nearDeadlineTasks}</p>
      </div>
    </div>
  );
};

export default Report;
