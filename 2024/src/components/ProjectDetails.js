import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = useSelector(state =>
    state.projects.find(project => project.id === parseInt(id))
  );

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-details">
      <h2>Project Details</h2>
      <p><strong>Name:</strong> {project.name}</p>
      <p><strong>Description:</strong> {project.description}</p>
      <h3>Tasks</h3>
      <ul>
        {project.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <TaskForm projectId={project.id} />
    </div>
  );
};

export default ProjectDetails;
