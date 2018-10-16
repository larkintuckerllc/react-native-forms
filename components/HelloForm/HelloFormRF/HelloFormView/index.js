import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';

const HelloFormView = ({ handleSubmit }) => (
  <View>
    <Button
      title="Submit"
      onPress={handleSubmit}
    />
  </View>
); 

HelloFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default HelloFormView;

