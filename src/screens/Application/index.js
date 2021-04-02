import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from './Dashboard/index.js';
import Bookmarks from './Bookmarks/index.js';
import Search from './Search/index.js';
import Settings from './Settings/index.js';

const Tab = createBottomTabNavigator();

export default function Application() {
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Bookmarks') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={28} color={'#B5304C'} />;
        },
      })}
      backBehavior={'initialRoute'}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#cd077d',
        inactiveTintColor: 'grey',
        style:{
          borderTopLeftRadius: 21, 
          borderTopRightRadius: 21,
          position: 'absolute',
          backgroundColor: 'white',
        }
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Bookmarks" component={Bookmarks}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
  );
}
