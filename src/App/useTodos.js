import React from 'react';
import {useLocalStorage} from './useLocalStorage';

function useTodos() {

  const {item: tasks, saveItem: saveTasks, syncronizePage, loading, error} = useLocalStorage('TASKS_V1', []);

  const [searchValue,
    setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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
  const generalTotalTasks = tasks.length;

  const createTask = (text) => {
    const newTasks = [...tasks];

    newTasks.push({
      text,
      completed:false
    })

    saveTasks(newTasks)
  }

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

  const states = {
      loading,
      error,
      totalTasks,
      generalTotalTasks,
      completedTasks,
      searchValue,
      searchedTasks,
      createTask,
      openModal,
  }

  const methods = {
      setSearchValue,
      onComplete,
      onDelete,
      setOpenModal,
      syncronizePage
  }

  return {
    states,
    methods
  };
}

export { useTodos };