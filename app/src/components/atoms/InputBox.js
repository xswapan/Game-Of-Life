import React, { Component } from 'react';

class InputBox extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    const name = this.props.inputBoxName;
    const id = this.props.inputBoxId;

    return (
      <input
        type="number"
        id={id}
        name={name}
        defaultValue={0}
        onChange={this.handleChange} />
    );
  }

}

export default InputBox;
