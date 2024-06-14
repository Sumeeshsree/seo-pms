import React from 'react';

const TaskList = ({ projectId }) => {
  const tasks = [
    { id: 1, name: 'Task A', status: 'Pending' },
    { id: 2, name: 'Task B', status: 'Completed' }
  ];

  return (
    <div>
      <h3>Tasks for Project {projectId}</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
