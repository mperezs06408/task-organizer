import React from 'react';

function EmptyTodos() {
    return (
        <div
            className='msgContainer'
        >   
            <span className='msgContainer__empty-img'></span>
            <p className='msgContainer__text'>Create your first task!</p>
            <p className='msgContainer__subText'>Click over <span className='subText__img--plus'></span> and start to manage your tasks!</p>
        </div>
    )
}

export { EmptyTodos };