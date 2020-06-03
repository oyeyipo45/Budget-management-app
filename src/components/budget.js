import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";


export const Budget = () => {
    const  { transactions, budget } = useContext(GlobalContext);

  console.log(budget);
  
    // const amounts = transactions.map(transaction => transaction.amount);
    //  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    //   const budget = 500 - total;
    return (
      <React.Fragment>
        <div className="inc-exp-container">
          <div>
            <h4>Budget</h4>
            <h4>{budget}</h4>
          </div>
          <div>
            <h4>Your Balance</h4>
            <h4>$200.20</h4>
          </div>
        </div>
      </React.Fragment>
    );
}
