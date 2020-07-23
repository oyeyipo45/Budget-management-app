import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  budgets: 0,
  transactions: [],
};

//Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function addBudget(newBudget) {
    dispatch({
      type: "ADD_BUDGET",
      payload: newBudget,
    });
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
