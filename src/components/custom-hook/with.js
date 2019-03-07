import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  function double() {
    setCount(count * 2);
  }

  return {
    count: count,
    decrement: decrement,
    double: double,
    increment: increment,
    reset: reset,
    set: setCount
  };
}

export const With = () => {
  const { count, decrement, double, increment, reset, set } = useCounter(0);

  return (
    <div>
      <div>
        <span>Count:</span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={() => increment()}>UP !</button>
        <button onClick={() => decrement()}>Down !</button>
        <button onClick={() => reset()}>Reset !</button>
        <button onClick={() => double()}>Double !</button>
      </div>
      <input
        type={"number"}
        value={count}
        onChange={event => set(event.target.value)}
      />
    </div>
  );
};
