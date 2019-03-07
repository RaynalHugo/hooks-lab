import React from "react";

export class WithoutUseEffect extends React.Component {
  componentDidMount() {
    alert(`Value ${this.props.value}`);
  }

  componentDidUpdate() {
    alert(`Value ${this.props.value}`);
  }

  render() {
    return (
      <div>
        <span>Value:</span>
        <span>{this.props.value}</span>
      </div>
    );
  }
}
