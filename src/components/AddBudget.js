import React, { useState } from "react";

export const AddBudget = () => {
  const [budget, setBudget] = useState([]);
  const addBudget = () => {
    setBudget(budget);
  };
  return (
    <>
      <form>
        <h3>Add New Budget</h3>
        <div className="form-control">
          <label htmlFor="Budget">
            {" "}
            <br />
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter Budget..."
          />
        </div>
        <button className="btn" onClick={addBudget}>
          Add Budget
        </button>
      </form>
    </>
  );
};
