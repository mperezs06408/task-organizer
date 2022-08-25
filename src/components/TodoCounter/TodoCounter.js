import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTasks, completedTasks}) {
  return (
    <header>
      <h1 className="header-title">Your tasks</h1>
      <h2 className='header-counter'>You've completed {completedTasks} out of {totalTasks} tasks</h2>
    </header>
  );
};

export {TodoCounter};