import React, { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {
  const {totalTasks, completedTasks} = useContext(TodoContext);
  return (
    <header>
      <h1 className="header-title">Your tasks</h1>
      <h2 className='header-counter'>You've completed {completedTasks} out of {totalTasks} tasks</h2>
    </header>
  );
};

export {TodoCounter};