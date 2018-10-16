import React, { Component } from 'react';
import SimpleFormRF from './SimpleFormRF';

class SimpleForm extends Component {
  handleSubmit = ({ firstName, lastName }) => {
    console.log(`firstname: ${firstName}`);
    console.log(`lastName: ${lastName}`);
  }

  render() {
    return <SimpleFormRF onSubmit={this.handleSubmit} />;
  }
}

export default SimpleForm;
