import React from "react";

export class WithoutUseState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <div>
          <span>Count:</span>
          <span>{this.state.count}</span>
        </div>
        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}>
            UP !
          </button>
        </div>
      </div>
    );
  }
}
