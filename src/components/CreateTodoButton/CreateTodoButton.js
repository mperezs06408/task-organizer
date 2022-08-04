import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {
  const onClickBtn = () => {
    setOpenModal(!openModal);
  };

  return (
    <button 
      type='button' 
      className={`btn-add ${!!openModal ? 'btn-activate' : ''}`}
      onClick={onClickBtn}
    >
    </button>
  );
}

export {CreateTodoButton};