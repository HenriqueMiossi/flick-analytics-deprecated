import React, {useState} from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  Switch
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Picker from '../../../components/Picker';
import TitleBar from '../../../components/TitleBar';
import ProfileContainer from '../../../components/ProfileContainer';

export default function Settings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <LinearGradient 
      style={styles.background} 
      colors={['#B5304C', '#DC8875']}
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
    >
      <SafeAreaView>
        <TitleBar title='Configurações'></TitleBar>

        <View style={styles.mainContainer}>

          <ProfileContainer />

          <View style={styles.itemsContainer}>
            <Text style={styles.text}>
              Idioma
            </Text>
            <Picker />
          </View>

          <View style={styles.separatorLine}/>

          <View style={styles.itemsContainer}>
            <Text style={styles.text}>
              Ativar Notificações
            </Text>
            <Switch
              trackColor={{ false: "#B5304C", true: "#31B43F" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={styles.separatorLine}/>
          
          <View>
            <TouchableOpacity style={styles.itemsContainer}>
              <Text style={styles.text}>
                Reportar um Bug
              </Text>
              <Ionicons name={'bug-sharp'} size={24} color={'#B5304C'}/>
            </TouchableOpacity>
          </View>
          
          <View style={styles.separatorLine}/>

          <View style={styles.itemsContainer}>
            <Text style={styles.text}>
              Versão do Aplicativo
            </Text>
            <Text style={styles.text}>
              0.1 - Alpha
            </Text>
          </View>
          
        </View>

      </SafeAreaView>
    </LinearGradient>
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
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorLine: {
    borderBottomColor: '#B5304C',
    borderBottomWidth: 1,
    marginVertical: 20
  },
  background: {
    flex: 1,
  },
});
