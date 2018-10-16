import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';

const ValidationFormView = ({ handleSubmit, valid }) => (
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
      title="Submit Validation"
      onPress={handleSubmit}
    />
  </View>
); 

ValidationFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default ValidationFormView;

