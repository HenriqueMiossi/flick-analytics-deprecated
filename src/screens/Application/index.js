import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard/index.js';
import Bookmarks from './Bookmarks/index.js';
import Search from './Search/index.js';
import Settings from './Settings/index.js';

const Tab = createBottomTabNavigator();

export default function Application() {
  return (
    <Tab.Navigator initialRouteName='Dashboard'>
      <Tab.Screen name="Dashboard" component={Dashboard}/>
      <Tab.Screen name="Bookmarks" component={Bookmarks}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
  );
}
