import React from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity,
  TextInput, 
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TitleBar from '../../components/TitleBar';

export default function Register({ navigation }) {
  const [name, onChangeName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -35;
  return (
    <LinearGradient 
      style={styles.background} 
      colors={['#B5304C', '#DC8875']}
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
    >
      <SafeAreaView>
        <KeyboardAvoidingView 
          behavior='position'
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          
          
          <TitleBar title='Cadastro'/>

          <View style={styles.mainContainer}>

            <Text style={styles.text}>
              Nome de Usuário
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeName}
              value={name}
              placeholderTextColor='grey'
              keyboardType='visible-password'
            />

            <Text style={styles.text}>
              Email
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeEmail}
              value={email}
              placeholderTextColor='grey'
              keyboardType='email-address'
            />

            <Text style={styles.text}>
              Senha
            </Text>
            <TextInput 
              secureTextEntry={true} 
              style={styles.textInput}
              placeholderTextColor='grey'
            />

            <Text style={styles.text}>
              Confirmar Senha
            </Text>
            <TextInput 
              secureTextEntry={true} 
              style={styles.textInput}
              placeholderTextColor='grey'
            />

            <TouchableOpacity 
              style={styles.registerButton}
            >
              <Text style={styles.registerText}>
                Cadastrar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.loginButton}
            >
              <Text style={styles.loginText}>
                Voltar
              </Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
  },
  textInput: {
    fontFamily: 'Roboto',
    height: 40,
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#B5304C',
    color: 'black',
    fontSize: 16,
    borderRadius: 50,
  },
  registerButton: {
    backgroundColor: '#C5545D',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 40,
    height: 60,
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 20,
    
    borderRadius: 40,
    height: 60,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#C5545D',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#C5545D',
  },
});