  
import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"



const initialState = {
  budgets: 0,
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Camera", amount: -10 },
    { id: 4, text: "Laptop", amount: 150 },
  ],
};

//Create Context
export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
    
  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function addBudget(newBudget){
    dispatch({
      type: 'ADD_BUDGET',
      payload: newBudget
    });
  }
  return (
    <GlobalContext.Provider 
    value={{ 
      deleteTransaction, 
      addTransaction,
      addBudget,
      transactions: state.transactions,
      budgets: state.budgets
    }}> 
      {children}
    </GlobalContext.Provider>
  );
};