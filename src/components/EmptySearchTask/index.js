import React from 'react';

function EmptySearchTask(props) {
    return (
        <div
            className='msgContainer'
        >   
            <span className='msgContainer__emptySearch-img'></span>
            <p className='msgContainer__text'>Are you looking for something?</p>
            <p className='msgContainer__subText'>We didn't find results to <strong>"{props.searchText}"</strong>. Please check you search out and try it again.</p>
        </div>
    )
}

export { EmptySearchTask };