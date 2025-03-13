import React from "react";
import cn from 'classnames';

export default class Button extends React.Component {
  render() {
    const { type, label } =  this.props;

    const btnClass = cn('btn', `btn-${type}`, {
      'bth-pressed': true,
      'btn-over': false,
    })

    return <button className={btnClass}>{label}</button>
  }
}

