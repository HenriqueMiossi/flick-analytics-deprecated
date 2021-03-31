import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard/index.js';

const Tab = createBottomTabNavigator();

export default function Application() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard}/>
    </Tab.Navigator>
  );
}
