import React from 'react';
import { AppUI } from './AppUI';

const defaultTasks = [
  {
    text: 'Cortar cebolla',
    completed: false
  }, {
    text: 'Tomar curso de intro a React',
    completed: false
  }, {
    text: 'Llorar con la llorona',
    completed: false
  }
];

function App() {
  const localStorageTasks = localStorage.getItem('TASKS_V1');

  let parsedTasks; 

  if (!localStorageTasks) {
    localStorage.setItem('TASKS_V1', JSON.stringify([]));
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStorageTasks);
  }

  const [tasks, setTasks] = React.useState(parsedTasks);
  const [searchValue, setSearchValue] = React.useState('');

  let searchedTasks = [];

  if (!searchValue.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return taskText.includes(searchText);
    })
  }

  const completedTasks = searchedTasks.filter(task => !!task.completed ).length;
  const totalTasks = searchedTasks.length;

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    /** Setting Local Storage */
    localStorage.setItem('TASKS_V1', JSON.stringify(newTasks));
  }

  const onComplete = (text) => {
    const taskIndex = tasks.findIndex( task => task.text === text);

    const newTasks = [...tasks];

    newTasks[taskIndex].completed = !tasks[taskIndex].completed;

    saveTasks(newTasks)
  }

  const onDelete = (text) => {
    const newTasks = tasks.filter(task => !(task.text === text));

    saveTasks(newTasks)
  }
  return (
    <AppUI
      totalTasks={totalTasks} 
      completedTasks={completedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
