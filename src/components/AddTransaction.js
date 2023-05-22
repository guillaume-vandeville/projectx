import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const sentForm = e => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: +amount,
      id: Math.floor(Math.random()*123454321),
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new receipt</h3>
      <form onSubmit={sentForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
