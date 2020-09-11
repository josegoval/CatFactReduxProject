// React
import React from 'react';
import {View, Text} from 'react-native';
// React Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// Components
import AddFactScreen from './AddFactScreen';
import MyFactsScreen from './MyFactsScreen';

const TopBarNavigator = createMaterialTopTabNavigator();

export default function AddTabScreen() {
  return (
    <TopBarNavigator.Navigator
      initialRouteName="AddFacts"
      tabBarOptions={{labelStyle: {fontSize: 20, fontWeight: 'bold'}}}>
      <TopBarNavigator.Screen
        name="AddFacts"
        component={AddFactScreen}
        options={{title: 'Add New'}}
      />
      <TopBarNavigator.Screen
        name="MyFacts"
        component={MyFactsScreen}
        options={{title: 'My Facts'}}
      />
    </TopBarNavigator.Navigator>
  );
}
