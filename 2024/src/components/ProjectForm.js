import React, { useState, useEffect } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({ name: '', description: '', tasks: [] });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', tasks: [] });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Project Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">{initialData ? 'Update Project' : 'Create Project'}</button>
    </form>
  );
};

export default ProjectForm;
