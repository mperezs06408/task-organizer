import React, {useContext} from 'react';
/** Root Styles **/
import './App.css';
/** Components **/
import {TodoContext} from '../TodoContext';
import {TodoCounter} from '../components/TodoCounter/TodoCounter';
import {TodoSearch} from '../components/TodoSearch/TodoSearch';
import {TodoList} from '../components/TodoList/TodoList';
import {TodoItem} from '../components/TodoItem/TodoItem';
import { TodoForm } from '../components/TodoForm';
import {CreateTodoButton} from '../components/CreateTodoButton/CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoLoading } from '../components/TodoLoading';
import { TodoError } from '../components/TodoError';
import { EmptyTodos } from '../components/EmptyTodos';

function AppUI() {
  const {
    error,
    loading,
    searchedTasks,
    onComplete,
    onDelete,
    openModal,
    setOpenModal
  } =  useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {(!loading && !error && !searchedTasks.length) && <EmptyTodos />}

        {searchedTasks.map((task, i) => (<TodoItem
          key={i}
          text={task.text}
          completed={task.completed}
          onComplete={() => onComplete(task.text)}
          onDelete={() => onDelete(task.text)}/>))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>

      )}

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export {AppUI};