import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Flick Analytics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  background: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
