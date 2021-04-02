import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InitialPage({ navigation }) {
  return (
    <>
      <LinearGradient 
        style={styles.background} 
        colors={['#B5304C', '#DC8875']}
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 1}}
      >
        <SafeAreaView>
          <Text style={styles.title}>
            Flick Analytics
          </Text>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.registerButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerText}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    textAlign: 'center',
    paddingBottom: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  registerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#B5304C',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#C5545D',
    padding: 10,
    margin: 20,
    borderRadius: 40,
    height: 60,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  registerButton: {
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    borderRadius: 40,
    height: 60,
    justifyContent: 'center',
  },
});