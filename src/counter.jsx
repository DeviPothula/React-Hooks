import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-5">
      <h2>Counter: {count}</h2>
      <div className="mt-3">
        <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-danger me-2" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="btn btn-secondary me-2" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
