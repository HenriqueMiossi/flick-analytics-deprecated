import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Settings({ navigation }) {
  return (
    <LinearGradient 
      style={styles.background} 
      colors={['#B5304C', '#DC8875']}
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
    >
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Configurações
          </Text>
        </View>


        <View style={styles.mainContainer}>

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

          <View style={styles.languageContainer}>
            <Text>
              Idioma
            </Text>
            
            <DropDownPicker
            
              items={[
                  {label: 'Português', value: 'pt'},
                  {label: 'English', value: 'us'},
                  {label: 'Español', value: 'es'},
              ]}
              defaultValue={'pt'}
              containerStyle={{width: 200, height: 30}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              arrowStyle={{marginRight: 10}}

              
            />

          </View>

        </View>

      </SafeAreaView>
    </LinearGradient>
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

  mainContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
    height: 500,
  },

  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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

  profileButton: {
    marginBottom: 30,
  },

  languageContainer: {
    flexDirection: 'row',
  },

  background: {
    flex: 1,
  },
});
