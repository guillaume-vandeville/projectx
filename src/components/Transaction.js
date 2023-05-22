import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Transaction = ({ transactions }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li>
            {transactions.text} <span>₱{transactions.amount}</span> <button onClick={() => deleteTransaction(transactions.id)} className="delete-btn">x</button>
        </li>
    )
}
