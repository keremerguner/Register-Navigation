import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from '../Input/Input.styles';

const InputSecure = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default InputSecure;
