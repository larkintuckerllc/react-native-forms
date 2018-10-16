import React, { Component } from 'react';
import HelloFormRF from './HelloFormRF';

class HelloForm extends Component {
  handleSubmit = () => {
    console.log('SUBMITTED');
  }

  render() {
    return <HelloFormRF onSubmit={this.handleSubmit} />;
  }
}

export default HelloForm;
