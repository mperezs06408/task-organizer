import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton() {
  const onClickBtn = (msg) => {
    alert(msg);
  };

  return (
    <button 
      type='button' 
      className='btn-add'
      onClick={() => onClickBtn('Aquí debe ir un modal')}
    >
    </button>
  );
}

export {CreateTodoButton};