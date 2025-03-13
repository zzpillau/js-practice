import React from "react";

export default class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
  }

  toggleText = () => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown });
  }

  render() {
    const { isShown } = this.state;

    return (
      <div>
        <button onClick={this.toggleText} type="button" className={`btn ${ isShown ? 'btn-success' : 'btn-primary'}`}>
          {isShown ? 'hide' : 'show'}
        </button>
        {isShown && <p>&#127793;</p>}
      </div>
    );
  }

}