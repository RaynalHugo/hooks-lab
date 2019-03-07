import React, { useState } from "react";

export const Counter = ({ name = "Count", value, onClick }) => (
  <div>
    <div>
      <span>{name}:</span>
      <span>{value}</span>
    </div>
    <div>
      <button onClick={onClick}>UP !</button>
    </div>
  </div>
);

export const WithUseState = () => {
  const [count0, updateCount0] = useState(0);
  const [count1, updateCount1] = useState(0);
  const [count2, updateCount2] = useState(0);

  return (
    <div>
      <Counter
        name="Count0"
        value={count0}
        onClick={() => updateCount0(count0 + 1)}
      />
      <Counter
        name="Count1"
        value={count1}
        onClick={() => updateCount1(count1 + 1)}
      />
      <Counter
        name="Count2"
        value={count2}
        onClick={() => updateCount2(count2 + 1)}
      />
      <button
        onClick={() => {
          updateCount0(0);
          updateCount1(0);
          updateCount2(0);
        }}>
        RESET
      </button>
    </div>
  );
};
