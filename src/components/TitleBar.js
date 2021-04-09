import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function TitleBar({title}) {
    return (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      textAlign: 'left',
      paddingBottom: 20,
      color: '#B5304C',
      fontWeight: 'bold',
    },
    titleContainer: {
      backgroundColor: 'white',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      paddingHorizontal: 30,
      paddingTop: 30
    },
});
