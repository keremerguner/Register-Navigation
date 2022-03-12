import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  //const {user} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hoş geldiniz </Text>
    </SafeAreaView>
  );
};

export default MemberResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'black',
  },
});
