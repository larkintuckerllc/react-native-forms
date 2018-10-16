import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const RFTextInput = ({ input: { onChange, value }}) => ( 
  <TextInput
    onChangeText={onChange}
    value={value}
    style={styles.root}
  />
);

RFTextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default RFTextInput;
