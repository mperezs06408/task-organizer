import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTasks, completedTasks, loading}) {
  return (
    <header>
      <h1 className="header-title">Your tasks</h1>
      <h2 className={`header-counter ${loading && 'header-counter--loading'}`}>You've completed {completedTasks} out of {totalTasks} tasks</h2>
    </header>
  );
};

export {TodoCounter};