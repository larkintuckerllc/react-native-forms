import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';

const SubmissionFormView = ({ handleSubmit, valid }) => (
  <View>
    <Field
      name="firstName"
      component={RFTextView}
    />
    <Field
      name="lastName"
      component={RFTextView}
    />
    <Button
      disabled={!valid}
      title="Submit Submission"
      onPress={handleSubmit}
    />
  </View>
); 

SubmissionFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default SubmissionFormView;

