import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DashboardTitleBar from '../../../components/DashboardTitleBar';
import KillDeathRatio from '../../../components/KillDeathRatioContainer';

export default function Dashboard() {
  return (
    <LinearGradient 
      style={styles.background} 
      colors={['#B5304C', '#DC8875']}
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
    >
      <SafeAreaView>
        <DashboardTitleBar title={'Dashboard'}/>

        <KillDeathRatio />

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});