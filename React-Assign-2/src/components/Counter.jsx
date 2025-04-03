import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
//   const [update, setUpdate] = useState(false);  // Changing the update state has no effect on the component.

  const increment = () => {
    setCount(count + 1)
    // update(!setUpdate) // To change the initial update value to the update state we wrapw the !setUpdate into a function 
    // i.e. setUpdate((prev) => !prev);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;