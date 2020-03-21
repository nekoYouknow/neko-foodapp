import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/home';
import SettingScreen from './screens/setting';


const RootDrawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator>
        <RootDrawer.Screen name="Home" component={HomeScreen} />
        <RootDrawer.Screen name="Setting" component={SettingScreen} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
};
