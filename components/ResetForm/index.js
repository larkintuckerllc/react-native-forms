import React, { Component } from 'react';
import ResetFormRF from './ResetFormRF';

const wait = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

class ResetForm extends Component {
  handleSubmit = async ({ firstName, lastName }) => {
    await wait();
    // throw new Error(); // TEST Reset ERROR
    console.log(`firstname: ${firstName}`);
    console.log(`lastName: ${lastName}`);
  }

  render() {
    return <ResetFormRF onSubmit={this.handleSubmit} />;
  }
}

export default ResetForm;
