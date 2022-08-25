import React from 'react';
import { useTodos } from './useTodos';
/** Components **/
import {TodoHeader} from '../components/TodoHeader';
import {TodoCounter} from '../components/TodoCounter/TodoCounter.js';
import {TodoSearch} from '../components/TodoSearch/TodoSearch.js';
import {TodoList} from '../components/TodoList/TodoList';
import {TodoItem} from '../components/TodoItem/TodoItem';
import { TodoForm } from '../components/TodoForm';
import {CreateTodoButton} from '../components/CreateTodoButton/CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoLoading } from '../components/TodoLoading';
import { TodoError } from '../components/TodoError';
import { EmptyTodos } from '../components/EmptyTodos';
/**Styles */
import './App.css'


function App() {
  const {
    error,
    loading,
    searchedTasks,
    onComplete,
    onDelete,
    openModal,
    setOpenModal,
    totalTasks, 
    completedTasks,
    searchValue, 
    setSearchValue,
    createTask
  } =  useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTasks={totalTasks}
          completedTasks={completedTasks}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} 
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTasks={searchedTasks}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <EmptyTodos />}
        render={(task, i) => 
          <TodoItem
            key={i}
            text={task.text}
            completed={task.completed}
            onComplete={() => onComplete(task.text)}
            onDelete={() => onDelete(task.text)}
          />
        }
      />

      {/* <TodoList>
        {error && }
        {loading && }
        {(!loading && !error && !searchedTasks.length) && }

        {searchedTasks.map((task, i) => ())}
      </TodoList> */}
      
      {!!openModal && (
        <Modal>
          <TodoForm
            createTask={createTask}
            setOpenModal={setOpenModal}
          />
        </Modal>

      )}

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
