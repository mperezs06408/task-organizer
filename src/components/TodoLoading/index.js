import React from 'react';

function TodoLoading() {
    return (
        <div className='msgContainer'>
            <span className='msgContainer__loading--img'></span>
            <p className='msgContainer__text'>Loading your tasks</p>
        </div>
        
    )
}

export {TodoLoading};