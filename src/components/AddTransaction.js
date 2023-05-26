import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [price, setPrice] = useState(0);
  const { transactions, addTransaction } = useContext(GlobalContext);

  // Helper function to generate unique ID
const getNextId = (transactions) => {
  const maxId = Math.max(...transactions.map((transaction) => transaction.id));
  return maxId >= 10 ? maxId + 1 : 11;
};

  const sentForm = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      price: +price,
      id: getNextId(transactions),
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new receipt (for test)</h3>
      <form onSubmit={sentForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="price"
            >Price <br />
          </label>
          <input type="number"  value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
