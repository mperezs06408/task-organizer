import React, {useContext} from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [newTaskValue, setNewTaskValue] = React.useState(''); 
    const [emptyTaskValidation, setEmptyTaskValidation] = React.useState(false);

    const  {
        createTask,
        setOpenModal
    } = useContext(TodoContext);

    const handleChange = (e) => {
        if (e.target.value.length == 0) {
            setEmptyTaskValidation(true);
        } else {
            setEmptyTaskValidation(false);
        }
        setNewTaskValue(e.target.value);
    } 

    const onCancel =() => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!emptyTaskValidation && newTaskValue.length != 0){
            createTask(newTaskValue);
            setOpenModal(false);
        } else {
            setEmptyTaskValidation(true);
        }
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <label htmlFor="" className='form__label'>Create a new task!</label>
            <textarea 
                className='form__input'
                placeholder='Insert a new task' 
                value={newTaskValue}
                onChange={handleChange}
            ></textarea>
            {!!emptyTaskValidation && (<p className='form--error'>Tasks cannot be empty!</p>)}
            <div>
                <button
                    className='form__btn--cancel'
                    type="button"
                    onClick={onCancel}
                >Cancel</button>
                <button
                    className='form__btn--submit'
                    type="submit"
                >Create</button>
            </div>
        </form>
    )
}

export {TodoForm};