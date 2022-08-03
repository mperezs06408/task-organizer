import React from 'react';
/** Root Styles **/
import './App.css';
/** Components **/
import {TodoContext} from '../TodoContext';
import {TodoCounter} from '../components/TodoCounter/TodoCounter';
import {TodoSearch} from '../components/TodoSearch/TodoSearch';
import {TodoList} from '../components/TodoList/TodoList';
import {TodoItem} from '../components/TodoItem/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton/CreateTodoButton';

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTasks,
          onComplete,
          onDelete
        }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export {AppUI};