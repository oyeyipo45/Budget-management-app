import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";


export const Balance = () => {
    const  { transactions } = useContext(GlobalContext);


    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    
    return (
      <React.Fragment>
        <div className="inc-exp-container">
          <div>
            <h4>Budget</h4>
            <h4>$4000000.00</h4>
          </div>
          <div>
            <h4>Your Balance</h4>
            <h4>${total}</h4>
          </div>
        </div>
      </React.Fragment>
    );
}
