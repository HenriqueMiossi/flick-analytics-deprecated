import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Flag from 'react-native-flags';

export default function TitleBar({ title }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePicture}
          source={require('../images-testing/profile-pic.jpg')}
        />
        <View style={styles.textContainer}>
          <View style={styles.horizontalAlign}>
            <Flag code='BR' size={24} type='flat' style={styles.flag}/>
            <Text style={styles.profileName}>FallenLoko</Text>
          </View>

          <View style={styles.horizontalAlign}>
            <Image
              style={styles.teamPicture}
              source={require('../images-testing/team-pic.png')}
            />
            <Text style={styles.teamName}>Hospício Gaming Club</Text>
          </View>
        </View>
      </View>
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
    paddingVertical: 30,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profilePicture: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginRight: 20,
  },
  teamPicture: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  teamName: {
    fontSize: 16,
  },
  horizontalAlign: {
    flexDirection: 'row',
  },
  flag: {
    alignSelf: 'center',
    marginRight: 10,
  }
});
