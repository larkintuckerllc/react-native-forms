import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';

const ValidationFormView = ({ handleSubmit }) => (
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
      title="Submit Validation"
      onPress={handleSubmit}
    />
  </View>
); 

ValidationFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ValidationFormView;

