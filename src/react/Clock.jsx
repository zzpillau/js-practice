import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  handleclick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p>
          it is {this.state.date.toLocaleTimeString()}
        </p>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.handleclick}
        >
          Refresh
        </button>
      </div>
    )
  }
}