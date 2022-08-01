import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) { 
  return (
    <header>
      <h1 className="header-title">Your tasks</h1>
      <h2 className='header-counter'>You've completed {completed} out of {total} tasks</h2>
    </header>
  );
};

export {TodoCounter};