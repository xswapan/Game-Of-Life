import React, { Component } from 'react';

class SubmitButton extends Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const value = this.props.value;
    const id = this.props.inputBoxId;

    return (
      <input
        type="submit"
        id={id}
        value={value}
        className="button"
        onClick={this.handleClick} />
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(e);
  }

}

export default SubmitButton;
