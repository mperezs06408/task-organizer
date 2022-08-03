import React from 'react';
/** Root Styles **/
import './App.css';
/** Components **/
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

function AppUI({
    loading,
    error,
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
        {error && <p>Sorry, we got an error loading the data</p>}
        {loading && <p>Loading...</p>}
        {(!loading && !searchedTasks.length) && <p>Create your first task!</p>}

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