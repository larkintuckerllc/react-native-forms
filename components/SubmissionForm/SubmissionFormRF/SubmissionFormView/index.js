import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';
import styles from './styles';

const SubmissionFormView = ({
  handleSubmit,
  submitFailed,
  submitSucceeded,
  submitting,
  valid
}) => (
  <View>
    <Field
      component={RFTextView}
      name="firstName"
      disabled={submitting}
    />
    <Field
      component={RFTextView}
      name="lastName"
      disabled={submitting}
    />
    {!submitting && submitFailed && <Text style={styles.rootFailed}>Submit Failed</Text>}
    {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>Submit Succeeded</Text>}
    <Button
      disabled={!valid || submitting}
      onPress={handleSubmit}
      title="Submit Submission"
    />
  </View>
); 

SubmissionFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  submitting: PropTypes.bool,
  valid: PropTypes.bool.isRequired,
};

SubmissionFormView.defaultProps = {
  submitting: false,
};

export default SubmissionFormView;

