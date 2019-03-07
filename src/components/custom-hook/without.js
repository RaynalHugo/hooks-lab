import React, { useState } from "react";

export const Without = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function double() {
    setCount(count * 2);
  }

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
        onChange={event => setCount(event.target.value)}
      />
    </div>
  );
};
