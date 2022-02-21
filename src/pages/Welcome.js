import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

const Welcome = props => {
  function goToMemberSign() {
    props.navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tree Team Soft!</Text>
      <Button text="Sign Up" onPress={goToMemberSign} />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
});
