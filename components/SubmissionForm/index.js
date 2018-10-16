import React, { Component } from 'react';
import SubmissionFormRF from './SubmissionFormRF';

class SubmissionForm extends Component {
  handleSubmit = ({ firstName, lastName }) => {
    console.log(`firstname: ${firstName}`);
    console.log(`lastName: ${lastName}`);
  }

  render() {
    return <SubmissionFormRF onSubmit={this.handleSubmit} />;
  }
}

export default SubmissionForm;
