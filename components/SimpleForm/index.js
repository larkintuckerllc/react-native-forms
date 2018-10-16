import React, { Component } from 'react';
import SimpleFormRF from './SimpleFormRF';

class SimpleForm extends Component {
  handleSubmit = () => {
    console.log('SUBMITTED');
  }

  render() {
    return <SimpleFormRF onSubmit={this.handleSubmit} />;
  }
}

export default SimpleForm;
