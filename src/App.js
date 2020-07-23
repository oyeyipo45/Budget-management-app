import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { Budgets } from "./components/budget";
import { AddBudget } from "./components/AddBudget";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Budgets />
        <TransactionList />
        <IncomeExpenses />
        <AddBudget />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
