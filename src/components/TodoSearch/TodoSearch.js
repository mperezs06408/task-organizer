import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
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