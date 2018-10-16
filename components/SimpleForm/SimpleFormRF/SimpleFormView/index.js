import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';

const SimpleFormView = ({ handleSubmit }) => (
  <View>
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

