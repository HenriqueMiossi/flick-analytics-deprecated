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
import DropDownPicker from 'react-native-dropdown-picker';

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

          <View style={styles.itemsContainer}>
            <Text style={styles.text}>
              Idioma
            </Text>
            
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
    paddingVertical: 20,
    paddingHorizontal: 30,
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
  profileButton: {
    marginBottom: 30,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  picker: {
    backgroundColor: '#fafafa',
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
