import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Picker() {
    return (
        <DropDownPicker
            items={[
                {label: 'Português', value: 'pt'},
                {label: 'English', value: 'us'},
                {label: 'Español', value: 'es'},
            ]}
            defaultValue={'pt'}
            containerStyle={{width: 150, height: 40}}
            style={styles.picker}
            itemStyle={{
                justifyContent: 'center',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            labelStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: '#000'
            }}
            selectedLabelStyle={{
            fontWeight: 'bold',
            }}
        />
    );
}

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#fafafa',
    },
});
