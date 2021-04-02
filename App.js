import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Application from './src/screens/Application/index.js';
import Login from './src/screens/Login/index.js';
import Register from './src/screens/Register/index.js';
import InitialPage from './src/screens/InitialPage/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='InitialPage'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Application' component={Application}/>
        <Stack.Screen name='InitialPage' component={InitialPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
