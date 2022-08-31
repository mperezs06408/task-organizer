import React from 'react';
import './TodoList.css'

function TodoList(props) {
    return(
        <section className='section-list'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.error && !props.generalTotalTasks) && props.onEmpty()}
            {(!!props.generalTotalTasks && !props.searchedTasks.length) && props.onEmptySearchResults(props.searchText)}
            
            {(!props.loading && !props.error) &&
                <ul className='list'>
                    {props.searchedTasks.map(props.render || props.children)}
                </ul>
            }
        </section>
    );
}

export {TodoList};