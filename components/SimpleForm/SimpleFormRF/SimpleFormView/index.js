import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';

const SimpleFormView = ({ handleSubmit }) => (
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
      title="Submit Simple"
      onPress={handleSubmit}
    />
  </View>
); 

SimpleFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SimpleFormView;

