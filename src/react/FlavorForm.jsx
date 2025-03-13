import React from "react";

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', isGoing: false, selectedOption: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value});
  };

  handleCheckChange = (e) => {
    this.setState({ isGoing: e.target.checked });
  };

  handleRadioChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`You picked ${this.state.value} flavor`)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="d-flex row col-2">
          <label>
            Pick fancy flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Select a fruit</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="octopus">Octopus</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
          </label>
          <input type="submit" value="Submit"/>
          <label>
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleCheckChange} />
            Are you here?
          </label>
          <label>
            <input
              type="radio"
              value="option1"
              checked={this.state.selectedOption === 'option1'}
              onChange={this.handleRadioChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              checked={this.state.selectedOption === 'option2'}
              onChange={this.handleRadioChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              value="option3"
              checked={this.state.selectedOption === 'option3'}
              onChange={this.handleRadioChange}
            />
            Option 3
          </label>
        </div>
      </form>
    )
  }
} 