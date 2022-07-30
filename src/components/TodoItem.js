import React from 'react';
import '../styles/TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete }) {
    let textChecked = '';
    let spanCheckedColor = '';

    if (completed) {
        textChecked = 'checked-text';
        spanCheckedColor = 'checked-span';
    }

    return(
        <li className='list-item'>
            <span 
                className={`list-item_checked ${spanCheckedColor}`}
                onClick={onComplete}    
            ></span>
            <p className={`list-item_content ${textChecked}`}>{text}</p>
            <span 
                className='list-item_remove'
                onClick={onDelete}    
            ></span>
        </li>
    );
}

export {TodoItem};