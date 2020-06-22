import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);

  const handleChange = e => {
    e.preventDefault();
    setAmount(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    asyncFunction();
  }

  // Inside the following function return new Promise that 
  // resolves with an object with a success message ({message: "success"}).
  // If the Promise resolves successfully (when the amount is larger than 2000) log data that is resolved with console.log().
  // If the amount of money is smaller or equal to 2000 the Promise should reject
  // with failed message object ({message: "failed"}) and log rejected data with console.log().
  // Also, you must have part of Promise that will execute each time, no matter if Promise is
  // rejected or resolved (In that part you must console.log() the amount of money).
  const asyncFunction = async () => {

  }

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" value={amount} onChange={handleChange} />
        <button type="submit">Set Amount</button>
      </form>
    </div>
  );
}

export default App;
