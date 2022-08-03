import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';

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
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
