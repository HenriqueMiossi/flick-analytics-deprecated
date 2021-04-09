import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileContainer() {
    return (
        <TouchableOpacity style={styles.profileButton}>
            <View style={styles.profileContainer}>
              <Ionicons name={'person-sharp'} size={80} color={'#B5304C'}/>

              <View style={styles.textContainer}>
                <Text style={styles.profileName}>Username</Text>
                <Text>Ver informações da conta</Text>
              </View>

              <Ionicons style={styles.arrowIcon} name={'chevron-forward-sharp'} size={24} color={'black'}/>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    profileButton: {
        marginBottom: 30,
    },
    profileContainer: {
        flexDirection: 'row',
    },
    textContainer: {
        justifyContent: 'center',
        flexShrink: 1,
    },
    profileName: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    arrowIcon: {
        alignSelf: 'center',
        marginLeft: 'auto',
    },
});
