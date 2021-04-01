import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.background}>
      <TouchableOpacity>
        <Text 
          style={styles.text}
          onPress={() => navigation.navigate('Application')}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green'
  },
});
