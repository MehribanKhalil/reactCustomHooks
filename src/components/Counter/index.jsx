import React from "react";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
 const [count,increaseCount,decreaseeCount]=useCounter()
 const [count1,increaseCount1,decreaseeCount1]=useCounter()
  return (
    <div>
      <div>
        <button onClick={increaseCount}>+</button>
        <div>{count}</div>
        <button onClick={decreaseeCount}>-</button>
      </div>

      <div>
        <button onClick={increaseCount1}>+</button>
        <div>{count1}</div>
        <button onClick={decreaseeCount1}>-</button>
      </div>
    </div>
  );
};

export default Counter;
