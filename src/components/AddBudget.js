import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddBudget = () => {
  const { addBudget } = useContext(GlobalContext);

  const [budget, setBudget] = useState(0);

  const newBudget = parseInt(budget);

  const onSubmit = (e) => {
    if (budget === 0 || budget <= 0) {
      e.preventDefault(alert("Please Enter Budget"));
    } else if (budget === null || budget === isNaN) {
      e.preventDefault(alert("Please Enter Budget"));
    } else {
      e.preventDefault();
      addBudget(newBudget);
    }
  };
  return (
    <>
      <form>
        <h3>Add New Budget</h3>
        <div className="form-control">
          {/* <label htmlFor="Budget">
            {" "}
            <br />
          </label> */}
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter Budget..."
          />
        </div>
        <button className="btn" onClick={onSubmit}>
          Add Budget
        </button>
      </form>
    </>
  );
};
