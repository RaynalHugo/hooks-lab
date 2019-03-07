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

export class WithoutUseState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counters: [0, 0, 0] };
  }

  render() {
    return (
      <div>
        <Counter
          name="Count0"
          value={this.state.counters[0]}
          onClick={() =>
            this.setState({
              counters: [
                this.state.counters[0] + 1,
                this.state.counters[1],
                this.state.counters[2]
              ]
            })
          }
        />
        <Counter
          name="Count1"
          value={this.state.counters[1]}
          onClick={() =>
            this.setState({
              counters: [
                this.state.counters[0],
                this.state.counters[1] + 1,
                this.state.counters[2]
              ]
            })
          }
        />
        <Counter
          name="Count2"
          value={this.state.counters[2]}
          onClick={() =>
            this.setState({
              counters: [
                this.state.counters[0],
                this.state.counters[1],
                this.state.counters[2] + 1
              ]
            })
          }
        />
        <button onClick={() => this.setState({ counters: [0, 0, 0] })}>
          RESET
        </button>
      </div>
    );
  }
}
