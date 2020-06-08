import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";


export const Budgets = () => {
    const  { transactions, budgets } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const budgetsBalance = (budgets - total).toFixed(2);
    return (
      <React.Fragment>
        <div className="inc-exp-container">
          <div>
            <h4>budgets</h4>
            <h4>${budgets.toFixed(2)}</h4>
          </div>
          <div>
            <h4>Your Balance</h4>
            <h4>${budgetsBalance}</h4>
          </div>
        </div>
      </React.Fragment>
    );
}
