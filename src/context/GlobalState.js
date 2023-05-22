import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const InitialState = {
    transactions: [
       { id: 1, text: 'Flower', amount: -20 },
       { id: 2, text: 'Salary', amount: 300 },
       { id: 3, text: 'Book', amount: -10 },
       { id: 4, text: 'Book', amount: -10 },
       { id: 5, text: 'Book', amount: -10 },
       { id: 6, text: 'Book', amount: -10 },
       { id: 7, text: 'Book', amount: -10 },
       { id: 8, text: 'Book', amount: -10 },
       { id: 9, text: 'Book', amount: -10 },
       { id: 10, text: 'Book', amount: -10 },


    ]
}

// Context creation
export const GlobalContext = createContext(InitialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_ROW',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_ROW',
            payload: transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}