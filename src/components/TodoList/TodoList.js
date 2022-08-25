import React from 'react';
import './TodoList.css'

function TodoList(props) {
    return(
        <section className='section-list'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.error && !props.searchedTasks.length) && props.onEmpty()}
            <ul className='list'>
                {props.searchedTasks.map((task, i) => props.render(task, i))}
            </ul>
        </section>
    );
}

export {TodoList};