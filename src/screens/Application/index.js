import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard/index.js';
import Bookmarks from './Bookmarks/index.js';
import Search from './Search/index.js';
import Settings from './Settings/index.js';

const Tab = createBottomTabNavigator();

export default function Application() {
  return (
    <Tab.Navigator 
      initialRouteName='Dashboard'
      
      // Should uncomment this block later when dealing with style and icons
      /*
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Bookmarks') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      */

    >
      <Tab.Screen name="Dashboard" component={Dashboard}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Bookmarks" component={Bookmarks}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
  );
}

