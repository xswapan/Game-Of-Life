import React, { Component } from 'react';

import InputBox from '../atoms/InputBox';

/**
* Molecule for input type number and label text
*/
class InputBoxWithLabel extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    const labelText = this.props.labelText;

    return (
      <div>
        <label>{labelText}</label>
        <InputBox
          handleChange={this.handleChange}
          {...this.props} />
      </div>
    );
  }

}

export default InputBoxWithLabel;
