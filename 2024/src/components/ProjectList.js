import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import './ProjectList.css';

const ProjectList = () => {
  const projects = useSelector(state => state.projects);
  const [view, setView] = useState('list');

  const toggleView = () => {
    setView(view === 'list' ? 'kanban' : 'list');
  };

  return (
    <div className="project-list-container">
      <div className="project-list-header">
        <h2>Projects</h2>
        <div className="view-toggle" onClick={toggleView}>
          {view === 'list' ? 'Switch to Kanban View' : 'Switch to List View'}
        </div>
      </div>
      <div className="project-list-content">
        {view === 'list' ? (
          <ul className="project-list">
            {projects.map(project => (
              <li key={project.id}>
                <Link to={`/project/${project.id}`}>{project.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="kanban-board">
            {projects.map(project => (
              <div className="kanban-column" key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <h2>Add a New Project</h2>
      <ProjectForm />
    </div>
  );
};

export default ProjectList;
