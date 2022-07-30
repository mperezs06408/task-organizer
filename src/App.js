import React from 'react';
/** Root Styles **/
import './App.css';
/** Components **/
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

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
  const [tasks, setTasks] = React.useState(defaultTasks);
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

    setTasks(newTasks);
  }

  const onDelete = (text) => {
    const newTasks = tasks.filter(task => !(task.text === text));

    setTasks(newTasks);
  }
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
        {searchedTasks.map((task,i) => (
          <TodoItem 
            key={i} 
            text={task.text}
            completed={task.completed}
            onComplete={() => onComplete(task.text)}
            onDelete={() => onDelete(task.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
