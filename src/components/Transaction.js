import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction, transactions } = useContext(GlobalContext);

  return (
    <div>
      {transactions === [] ? (
        "Please Add Transactions"
      ) : (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
          {transaction.text}{" "}
          <span>
            {sign}${Math.abs(transaction.amount)}
          </span>
          <button
            className="delete-btn"
            onClick={() => deleteTransaction(transaction.id)}
          >
            x
          </button>
        </li>
      )}
    </div>
  );
};
