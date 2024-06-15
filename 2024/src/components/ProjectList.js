import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import './ProjectList.css';
import { addProject, deleteProject, updateProject } from '../redux/actions'; // Updated to use the correct action names

const ProjectList = () => {
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();
  const [view, setView] = useState('list');
  const [editingProject, setEditingProject] = useState(null);

  const toggleView = () => {
    setView(view === 'list' ? 'kanban' : 'list');
  };

  const handleCreate = (project) => {
    dispatch(addProject(project)); // Updated to use addProject
  };

  const handleUpdate = (project) => {
    dispatch(updateProject(project));
    setEditingProject(null);
  };

  const handleDelete = (projectId) => {
    dispatch(deleteProject(projectId));
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
          <table className="project-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Description</th>
                <th>Task Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td><Link to={`/projects/${project.id}`}>{project.name}</Link></td>
                  <td>{project.description}</td>
                  <td>{project.tasks.length}</td>
                  <td>
                    <button onClick={() => setEditingProject(project)}>Edit</button>
                    <button onClick={() => handleDelete(project.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="kanban-board">
            {projects.map(project => (
              <div className="kanban-column" key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>Tasks: {project.tasks.length}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <h2>{editingProject ? 'Edit Project' : 'Add a New Project'}</h2>
      <ProjectForm
        onSubmit={editingProject ? handleUpdate : handleCreate}
        initialData={editingProject}
      />
    </div>
  );
};

export default ProjectList;
