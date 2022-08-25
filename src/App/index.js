import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  const [state, setState] = React.useState('Initial state');
  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItems state={state} />
      </TodoList>
    </>
  )
}


function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}


function TodoList({ children }) {
  return (
    <section className='TodoList__container'>
      {children}
    </section >
  )
}

function TodoCounter() {
  return (
    <>
      <p>TodoCounter</p>
    </>
  )
}


function TodoSearch() {
  return (
    <>
      <p>TodoSearch</p>
    </>
  )
}


function TodoItems({ state }) {
  return (
    <>
      <p>{state}</p>
    </>
  )
}

// function App() {
  // return (
    // <TodoProvider>
      {/* <AppUI/> */}
    {/* </TodoProvider> */}
  // );
// }

export default App;
