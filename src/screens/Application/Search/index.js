import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Search({ navigation }) {
  return (
    <LinearGradient 
      style={styles.background} 
      colors={['#B5304C', '#DC8875']}
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
    >
      <SafeAreaView>
        <Text style={styles.text}>
          Search
        </Text>
      </SafeAreaView>
    </LinearGradient>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    borderRadius: 40,
    height: 60,
    justifyContent: 'center',
  },
});