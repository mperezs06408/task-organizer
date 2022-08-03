import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

  const {item: tasks, saveItem: saveTasks, loading, error} = useLocalStorage('TASKS_V1', []);

  const [searchValue,
    setSearchValue] = React.useState('');

  let searchedTasks = [];

  if (!searchValue.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task
        .text
        .toLowerCase();
      const searchText = searchValue.toLowerCase();

      return taskText.includes(searchText);
    })
  }

  const completedTasks = searchedTasks
    .filter(task => !!task.completed)
    .length;
  const totalTasks = searchedTasks.length;

  const onComplete = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);

    const newTasks = [...tasks];

    newTasks[taskIndex].completed = !tasks[taskIndex].completed;

    saveTasks(newTasks)
  }

  const onDelete = (text) => {
    const newTasks = tasks.filter(task => !(task.text === text));

    saveTasks(newTasks)
  }

  return (
    <TodoContext.Provider
      value={{
      loading,
      error,
      totalTasks,
      completedTasks,
      searchValue,
      setSearchValue,
      searchedTasks,
      onComplete,
      onDelete
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };