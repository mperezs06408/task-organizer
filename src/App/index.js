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

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem; 

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) => {
    setItem(newItem);
    /** Setting Local Storage */
    localStorage.setItem(itemName, JSON.stringify(newItem));
  }

  return [item, saveItem];
}



function App() {
  const [tasks, saveTasks] = useLocalStorage('TASKS_V1', []);

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
