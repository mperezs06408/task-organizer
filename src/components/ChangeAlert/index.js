import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({syncronizePage}) {
    const {storageChange: show , toggleShow} = useStorageListener(syncronizePage);

    return (
        <>
            {show && 
                <div className='syncAlert'>
                    <div className='syncAlert__card'>
                    <p className='syncAlert__msg'>Your tasks are outdated</p>
                    <button
                        className='syncAlert__btn'
                        onClick={() => toggleShow(false)}
                    >Refresh</button>
                    </div>
                </div>
            }
        </>
    )
}

export {ChangeAlert};