import React from 'react';
/** Root Styles **/
import './App.css';
/** Components **/
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    onComplete,
    onDelete,
}) {
  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTasks} 
        completed={completedTasks}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTasks.map((task, i) => (<TodoItem
          key={i}
          text={task.text}
          completed={task.completed}
          onComplete={() => onComplete(task.text)}
          onDelete={() => onDelete(task.text)}/>))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export {AppUI};