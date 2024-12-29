import React, { useState } from 'react';
import Column from './components/Column';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { title: 'Write blogs', status: 'To Do', date: '2023/02/21' },
    { title: 'Create release notes', status: 'Doing', date: '2023/02/17' },
    { title: 'Draft user guide', status: 'Done', date: '2023/02/11' },
  ]);

  const addTask = (title, status, date) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { title, status, date: date || new Date().toISOString().split('T')[0] },
    ]);
  };

  const moveTask = (taskIndex, newStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[taskIndex].status = newStatus;
      return updatedTasks;
    });
  };

  return (
    <div className="app">
      <h1>CheckMate</h1>
      <div className="columns">
        {['To Do', 'Doing', 'Done'].map((status) => (
          <Column
            key={status}
            title={status}
            tasks={tasks.filter((task) => task.status === status)}
            onMoveTask={(index, newStatus) => {
              const taskIndex = tasks.findIndex(
                (task) =>
                  task.title ===
                  tasks.filter((t) => t.status === status)[index].title
              );
              moveTask(taskIndex, newStatus);
            }}
            onAddTask={addTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
