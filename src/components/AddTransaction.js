import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    if (text === "" || amount === "") {
      return e.preventDefault(alert("Please Fill Fields"));
    } else {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 100),
        text: text,
        amount: +amount,
      };
      addTransaction(newTransaction);
    }
  };
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            Add (-) for expenses and (+) for income
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <p className="alert"></p>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
