import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <Text>Dashboard</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    textAlign: 'center',
    paddingBottom: 20
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  background: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green'
  },
});