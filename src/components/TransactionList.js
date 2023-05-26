import React, {useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <div>
        {transactions.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>text</th>
                <th>timezone</th>
                <th>status</th>
                <th>date</th>
                <th>city</th>
                <th>country</th>
                <th>transport</th>
                <th>currency</th>
                <th>price</th>
                <th>quantity</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>verification</th>
                <th>platform</th>
                <th>security</th>
                <th>contact</th>
                <th>approval</th>
                <th>delivered</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <Transaction key={transaction.id} transactions={transaction} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
