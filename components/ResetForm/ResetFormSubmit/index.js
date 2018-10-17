import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import ResetFormRF from './ResetFormRF';

const wait = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

class ResetFormSubmit extends Component {
  handleSubmit = async ({ firstName, lastName }) => {
    const { reset } = this.props;
    await wait();
    // throw new Error(); // TEST Reset ERROR
    console.log(`firstname: ${firstName}`);
    console.log(`lastName: ${lastName}`);
    reset();
  }

  render() {
    return <ResetFormRF onSubmit={this.handleSubmit} />;
  }
}

ResetFormSubmit.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default ResetFormSubmit;
