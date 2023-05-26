import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const InitialState = {
    transactions: [
        { id: 10, text: 'Guillaume Vandeville', timezone: 'UTC+2', status: 'Active', date: '25/05/23', city: 'Arras', country: 'FR', transport: 'plane',
        currency: '₱', price: 0, quantity: 1, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 9, text: 'Suitcase', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 2800, quantity: 2, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 8, text: 'Pencil', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 60, quantity: 3, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 7, text: 'Computer', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 60, quantity: 1, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 6, text: 'Mouse', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 400, quantity: 1, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 5, text: 'Keyboard', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 1000, quantity: 1, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 4, text: 'Headphone', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 2000, quantity: 1, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 3, text: 'Mobile Phone', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 25000, quantity: 1, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 2, text: 'Clothes', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 600, quantity: 5, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No' },
        { id: 1, text: 'Book', timezone: 'UTC+8', status: 'Active', date: '25/05/23', city: 'Muntinlupa', country: 'PH', transport: 'plane',
        currency: '₱', price: 200, quantity: 4, fname: 'Guillaume', lname: 'Vandeville', email: 'guil.vand@live.fr', verification: 'Yes', platform: 'interleukin',
        security: 'max', contact: '(+33)6...', approval:'Yes', delivered: 'No'},
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