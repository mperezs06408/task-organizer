import React from 'react';

function useStorageListener(syncronizePage) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key == 'TASKS_V1') {
                console.log('Hubo cambios en TASKS_V1');
                setStorageChange(true);
            }
        })

        const toggleShow = () => {
            syncronizePage();
            setStorageChange(false)
        }

        return{storageChange, toggleShow}
}

export {useStorageListener};