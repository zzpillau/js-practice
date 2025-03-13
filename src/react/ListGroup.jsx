import React from "react";

export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul>
      {React.Children.map(children, (child) => {
        return <li>{child}</li>
      })}
      </ul>
    )
  }
}