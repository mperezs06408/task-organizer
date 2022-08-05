import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContext';

function TodoSearch(  ) {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <nav>
            <span className='search-icon'></span>
            <input 
                className='search-input' 
                placeholder="Search a task"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </nav>
    );
}

export {TodoSearch};