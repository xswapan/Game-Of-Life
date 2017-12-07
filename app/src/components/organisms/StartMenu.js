import React, { Component } from 'react';

import InputBoxWithLabel from '../molecules/InputBoxWithLabel';
import SubmitButton from '../atoms/SubmitButton';

/**
* Organism responsible for rendering start menu input form
*/
class StartMenu extends Component {

  constructor() {
    super();

    this.state = {
      gridLength: 0
    }

    this.handleGridLengthChange = this.handleGridLengthChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleGridLengthChange(e) {
    this.setState({gridLength: e.target.value});
  }

  handleClick(e) {
    if (this.state.gridLength < 0) {
      this.props.onFormSubmit({
        error: true,
        gridLength: 0
      });
    } else {
      this.props.onFormSubmit({
        error: false,
        gridLength: this.state.gridLength
      });
    }
  }

  render() {
    return (
      <form>
        <InputBoxWithLabel
          labelText={`Enter length of grid`}
          inputBoxName={`grid-ength`}
          inputBoxId={`grid-length`}
          handleChange={this.handleGridLengthChange} />
        <SubmitButton
          id={`submit`}
          value={`Start`}
          handleClick={this.handleClick} />
      </form>
    );
  }

}

export default StartMenu;
