import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Cookie  from 'js-cookie';

const initialState = {
  budgets: 0,
  transactions: [],
};

//putting the buddget and transactions in th broswer cookies
// const transactions = Cookie.getJSON('transactions') || [];
// const budget = Cookie.getJSON('budget') || '';

//Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const { transactions }  = state.transactions;
  // const { budgets }  = state.budgets;

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

    // console.log(state.transactions, "hfhfhfhfhf");
    
    // Cookie.set("TRANSCATIONS", JSON.stringify(transactions));
    // console.log(transaction);
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });

  //   Cookie.set("TRANSACTIONS", JSON.stringify(transactions));
  }

  

  function addBudget(newBudget) {
    dispatch({
      type: "ADD_BUDGET",
      payload: newBudget,
    });

    // Cookie.set("BUDGETS", JSON.stringify(budgets));
  }

  return (
    <GlobalContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        addBudget,
        transactions: state.transactions,
        budgets: state.budgets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
