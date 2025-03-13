import React from "react";
import classNames from "classnames";

export default class BtnGroup  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {left: false, right: false};
  }

  handleClick = (event) => {
    const isLeft = event.target.classList.contains('left');
    const isRight = event.target.classList.contains('right');

    if (isLeft) {
      this.setState({ left: true, right: false })
    } else if (isRight) {
      this.setState({ left: false, right: true })
    }


  }

 render() {
  const classes = classNames('btn', 'btn-secondary')

  return (
    <div className="btn-group" role="group">
      <button
        type='button'
        className={`${classes} left ${this.state.left ? 'active' : ''}`}
        onClick={this.handleClick}
      >Left</button>
      <button
        type='button'
        className={`${classes} right ${this.state.right ? 'active' : ''}`}
        onClick={this.handleClick}
      >Right</button>
    </div>
  )
 }
}