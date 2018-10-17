import React, { Component } from 'react';
import SubmissionFormRF from './SubmissionFormRF';

const wait = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

class SubmissionForm extends Component {
  handleSubmit = async ({ firstName, lastName }) => {
    await wait();
    // throw new Error(); // TEST SUBMISSION ERROR
    console.log(`firstname: ${firstName}`);
    console.log(`lastName: ${lastName}`);
  }

  render() {
    return <SubmissionFormRF onSubmit={this.handleSubmit} />;
  }
}

export default SubmissionForm;
