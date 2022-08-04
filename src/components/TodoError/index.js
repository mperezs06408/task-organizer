import React from 'react';

function TodoError() {
    return (
        <div
            className='msgContainer'
        >
            <span className='msgContainer__img--error'></span>
            <p className='msgContainer__text'>We're sorry :(</p>
            <p className='msgContainer__subText'>We've got an error loading your previous data</p>
        </div>
    );
}

export { TodoError };