import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from './TaskForm';
import { deleteTask, updateTask, createTask } from '../redux/actions'; // Assuming these actions are defined
import './TaskList.css';

const TaskList = ({ projectId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.filter(task => task.projectId === projectId));
  const [editingTask, setEditingTask] = useState(null);

  const handleCreate = (task) => {
    dispatch(createTask({ ...task, projectId }));
  };

  const handleUpdate = (task) => {
    dispatch(updateTask(task));
    setEditingTask(null);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="task-list-container">
      <h2>Tasks</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => setEditingTask(task)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{editingTask ? 'Edit Task' : 'Add a New Task'}</h2>
      <TaskForm
        onSubmit={editingTask ? handleUpdate : handleCreate}
        initialData={editingTask}
      />
    </div>
  );
};

export default TaskList;
