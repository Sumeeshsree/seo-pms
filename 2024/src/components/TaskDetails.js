import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { deleteTask, updateTask } from '../redux/actions'; // Import your Redux actions for deleting and updating tasks
import './TaskDetails.css';

const TaskDetails = () => {
  const { taskId } = useParams(); // Get taskId from URL params
  const history = useHistory(); // Use useHistory hook to access the history object
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [editing, setEditing] = useState(false); // State to toggle editing mode
  const [formData, setFormData] = useState({}); // State to manage form data

  // Find the task with taskId
  const task = tasks.find(task => task.id === taskId);

  // Handle form input changes
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for task update
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTask(taskId, formData)); // Dispatch updateTask action with taskId and formData
    setEditing(false); // Exit editing mode after submission
  };

  // Handle task deletion
  const handleDelete = () => {
    dispatch(deleteTask(taskId)); // Dispatch deleteTask action with taskId
    history.push('/'); // Redirect to home or task list after deletion using history
  };

  if (!task) {
    return <div>Loading...</div>; // Handle case where task is still loading or not found
  }

  return (
    <div className="task-details-container">
      <h2>Task Details</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title || task.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description || task.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status || task.status}
            onChange={handleChange}
          />
          {/* Add more fields as needed (due date, assigned users, etc.) */}
          <button type="submit">Update Task</button>
          <button type="button" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div className="task-details">
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          {/* Display additional task details */}
          <div className="task-actions">
            <button onClick={() => setEditing(true)}>Edit Task</button>
            <button onClick={handleDelete}>Delete Task</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
