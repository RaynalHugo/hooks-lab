import React from "react";

export class WithoutUseEffect extends React.Component {
  componentDidMount() {
    alert(`Value 1 ${this.props.value1}`);
  }

  componentDidUpdate() {
    alert(`Value 1 ${this.props.value1}`);
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Value1:</span>
        <span>{this.props.value1}</span>
        <span>Value2:</span>
        <span>{this.props.value2}</span>
      </div>
    );
  }
}
