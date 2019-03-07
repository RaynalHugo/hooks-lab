import React, { useState } from "react";

export const WithUseState = () => {
  const [count, updateCount] = useState(0);

  return (
    <div>
      <div>
        <span>Count:</span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={() => updateCount(count + 1)}>UP !</button>
      </div>
    </div>
  );
};
