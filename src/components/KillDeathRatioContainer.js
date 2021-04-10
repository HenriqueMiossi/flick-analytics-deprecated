import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function KillDeathRatio() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>
        KDR
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
