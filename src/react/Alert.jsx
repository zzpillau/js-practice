import React from "react";

export default class Alert extends React.Component {
  render() {
    const { children } = this.props;
    return <div className='alert alert-success'>
      {children}
    </div>
  }
}

