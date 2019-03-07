import React, { useState } from "react";

export class Child extends React.Component {
  render() {
    const { count, multiplyCount } = this.props;

    return (
      <div>
        <div>
          <span>Count:</span>
          <span>{count}</span>
        </div>
        <div>
          <button onClick={multiplyCount}>x2</button>
        </div>
      </div>
    );
  }
}

export const WithUseState = () => {
  const [count, updateCount] = useState(1);

  const multiplyCount = () => updateCount(count * 2);

  return (
    <div>
      <div>
        <span>Count:</span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={multiplyCount}>x2</button>
      </div>
    </div>
  );
};
