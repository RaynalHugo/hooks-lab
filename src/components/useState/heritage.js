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

export class WithoutUseState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.multiplyCount = this.multiplyCount.bind(this);
  }

  multiplyCount() {
    this.setState({ count: this.state.count * 2 });
  }
  render() {
    return (
      <Child count={this.state.count} multiplyCount={this.multiplyCount} />
    );
  }
}
