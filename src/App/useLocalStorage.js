import React, {useEffect} from 'react';

function useLocalStorage(itemName, initialValue) {
  const [error,
    setError] = React.useState(false);
  const [loading,
    setLoading] = React.useState(true);
  const [item,
    setItem] = React.useState(initialValue);
  const [syncronize, 
    setSyncronize] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSyncronize(true);
        //throw new error('ups');
      } catch (e) {
        setError(e)
      }
    }, 3000)
  },[syncronize]);

  const saveItem = (newItem) => {
    try {
      setItem(newItem);
      /** Setting Local Storage */
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch (e) {
      setError(e)
    }
  }

  const syncronizePage = () => {
    setLoading(true);
    setSyncronize(false);
  }

  return {item, saveItem, loading, error, syncronizePage};
}

export { useLocalStorage };