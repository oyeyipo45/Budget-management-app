import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from "./context/GlobalState";
import { Budget } from './components/budget';
import { AddBudget } from './components/AddBudget';

function App() {
  return ( 
    <GlobalProvider>
      <Header />
      <div className="container">
      {/* <Balance /> */}
         <Budget />
        <TransactionList />
        <IncomeExpenses />
        
        <AddTransaction /> 
        <AddBudget />
      </div>
    </GlobalProvider>
  );
}

export default App;
