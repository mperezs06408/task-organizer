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
import {EmptySearchTask} from '../components/EmptySearchTask';
import { ChangeAlert } from '../components/ChangeAlert';
/**Styles */
import './App.css'


function App() {
  const {states, methods} = useTodos();

  const {
    error,
    loading,
    searchedTasks,
    openModal,
    totalTasks, 
    generalTotalTasks,
    completedTasks,
    searchValue, 
    createTask
  } = states;

  const {
    syncronizePage,
    onComplete,
    onDelete,
    setSearchValue,
    setOpenModal,
  } =  methods;

  return (

    <React.Fragment>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          // loading={loading} 
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} 
          loading={loading}
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTasks={searchedTasks}
        generalTotalTasks={generalTotalTasks}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <EmptySearchTask searchText={searchText} />}
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
      <ChangeAlert syncronizePage={syncronizePage} />
    </React.Fragment>
  );
}

export default App;
