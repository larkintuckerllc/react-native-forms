import React, { Component } from 'react';
import ValidationFormRF from './ValidationFormRF';

class ValidationForm extends Component {
  handleSubmit = ({ firstName, lastName }) => {
    console.log(`firstname: ${firstName}`);
    console.log(`lastName: ${lastName}`);
  }

  render() {
    return <ValidationFormRF onSubmit={this.handleSubmit} />;
  }
}

export default ValidationForm;
