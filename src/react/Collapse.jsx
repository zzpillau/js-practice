import React from 'react';
import cn from 'classnames';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { opened } = this.props;
    this.state = { opened }
  }

  toggleText = () => {
    this.setState((prevstate) => ({opened: !prevstate.opened}))
  }
  
  render() {
    const { text } = this.props;
    const { opened } = this.state;

    const classes = cn('collapse', {show: opened})

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            onClick={this.toggleText}
            data-bs-toggle="collapse"
            href="#" role="button"
            aria-expanded={ opened }
          >
            Link with href
          </a>
        </p>
        <div className={classes}>
          <div className='card, card-body'>
            {text}
          </div>
        </div>
      </div>
    )
  }
}

Collapse.defaultProps = {
  opened: true
}