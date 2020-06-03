import React, {useState} from 'react'

export const AddBudget = () => {

    const [budget, setBudget] = useState(0);
    return (
        <>
            
      <form>
        
        <div className="form-control">
          <label htmlFor="Budget"
            >Budget <br />
        </label>
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)}  placeholder="Enter Budget..." />
        </div>
        <button className="btn">Add Budget</button>
      </form>
        </>
    )
}
