import React, { useState, useEffect } from 'react';
import './ItemForm.css';

const ItemForm = ({ addItem, updateItem, editItem }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [link, setLink] = useState('');
  const [person, setPerson] = useState('');
  const [startDate, setStartDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setStatus(editItem.status);
      setLink(editItem.link);
      setPerson(editItem.person);
      setStartDate(editItem.startDate);
      setDeadline(editItem.deadline);
      setProjectName(editItem.projectName);
    } else {
      setName('');
      setStatus('');
      setLink('');
      setPerson('');
      setStartDate('');
      setDeadline('');
      setProjectName('');
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && status && link && person && startDate && deadline && projectName) {
      if (editItem) {
        updateItem({ ...editItem, name, status, link, person, startDate, deadline, projectName });
      } else {
        addItem({ name, status, link, person, startDate, deadline, projectName });
      }
      // Reset form fields
      setName('');
      setStatus('');
      setLink('');
      setPerson('');
      setStartDate('');
      setDeadline('');
      setProjectName('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskName">Task Name:</label>
        <input
          className="input"
          type="text"
          id="taskName"
          placeholder="Enter task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="person">Person:</label>
        <input
          className="input"
          type="text"
          id="person"
          placeholder="Enter person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <input
          className="input"
          type="text"
          id="status"
          placeholder="Enter status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link:</label>
        <input
          className="input"
          type="text"
          id="link"
          placeholder="Enter link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          className="input"
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="deadline">Deadline:</label>
        <input
          className="input"
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="projectName">Project Name:</label>
        <input
          className="input"
          type="text"
          id="projectName"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <button className="button" type="submit">{editItem ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default ItemForm;
