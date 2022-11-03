import React, {useEffect} from 'react';

const initialState = (initialValue) => ({
  error: false,
  loading: true,
  syncronize:true,
  item: initialValue
})

const ACTION_TYPES = {
  error:'ERROR',
  success:'SUCCESS',
  save:'SAVE',
  syncronize:'SYNCRONIZE'
}

const REDUCER_HASH_TABLE = (payload) => ({
  [ACTION_TYPES.error]: {
    error: payload
  },
  [ACTION_TYPES.success]: {
    item: payload,
    loading: false,
    sincronize: true
  },
  [ACTION_TYPES.save]: {
    item: payload
  },
  [ACTION_TYPES.syncronize]: {
    loading: true,
    sincronize: false,
  }
})

const reducer = (state, action) => {
  if (REDUCER_HASH_TABLE()[action.type]){
    return {
      ...state,
      ...REDUCER_HASH_TABLE(action.payload)[action.type]
    }
  }
  return new Error('Forbitten action');
} 

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));

  const {
    error,
    loading,
    item,
    syncronize
  } = state;

  const onError = (e) => dispatch({type: ACTION_TYPES.error, payload: e});
  const onSuccess = (value) => dispatch({type: ACTION_TYPES.success, payload: value})
  const onSave = (value) => dispatch({type: ACTION_TYPES.save, payload: value})
  const onSyncronize = () => dispatch({type: ACTION_TYPES.syncronize})

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

        onSuccess(parsedItem);
      } catch (e) {
        console.log('error during changing');
        onError(e);
      }
    }, 3000)
  },[syncronize]);

  const saveItem = (newItem) => {
    try {
      onSave(newItem);
      /** Setting Local Storage */
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch (e) {
      onError(e)
    }
  }

  const syncronizePage = onSyncronize;

  return {item, saveItem, loading, error, syncronizePage};
}

export { useLocalStorage };