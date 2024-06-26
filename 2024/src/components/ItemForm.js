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
      <input
        className="input"
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Person"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        className="input"
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="deadline">Deadline:</label>
      <input
        className="input"
        type="date"
        id="deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button className="button" type="submit">{editItem ? 'Update Item' : 'Add Item'}</button>
    </form>
  );
};

export default ItemForm;
