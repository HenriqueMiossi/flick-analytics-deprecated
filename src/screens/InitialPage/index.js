import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.background}>

      <Text style={styles.title}>
        Flick Analytics
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.text}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.text}>
          Cadastrar
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
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green'
  },
});