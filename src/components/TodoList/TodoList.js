import React from 'react';
import './TodoList.css'

function TodoList(props) {
    return(
        <section className='section-list'>
            <ul className='list'>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};