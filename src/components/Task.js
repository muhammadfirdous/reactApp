import React from 'react';
import './Task.css';

const Task = ({ title, status, date, onMove }) => {
  const handleMove = (newStatus) => {
    onMove(newStatus);
  };

  return (
    <div className={`task ${status.toLowerCase()}`}>
      <h4>{title}</h4>
      <p>Status: {status}</p>
      <p>Due Date: {date}</p>
      <div className="task-actions">
        {status !== 'To Do' && (
          <button onClick={() => handleMove('To Do')}>Move to To Do</button>
        )}
        {status !== 'Doing' && (
          <button onClick={() => handleMove('Doing')}>Move to Doing</button>
        )}
        {status !== 'Done' && (
          <button onClick={() => handleMove('Done')}>Move to Done</button>
        )}
      </div>
    </div>
  );
};

export default Task;
