import React, { useState } from 'react';
import Task from './Task';
import './Column.css';

const Column = ({ title, tasks, onMoveTask, onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      onAddTask(newTaskTitle, title, newTaskDate);
      setNewTaskTitle('');
      setNewTaskDate('');
    }
  };

  return (
    <div className="column">
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          status={task.status}
          date={task.date}
          onMove={(newStatus) => onMoveTask(index, newStatus)}
        />
      ))}
      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          placeholder="Task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Column;
