// React
import React from 'react';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Components
import SearchFactScreen from './SearchFactScreen';
import {View, Text} from 'react-native';

const SearchStackNavigator = createStackNavigator();

export default function SearchTabScreen() {
  return (
    // <View>
    //   <Text>I work</Text>
    // </View>
    <SearchStackNavigator.Navigator initialRouteName="SearchFact">
      <SearchStackNavigator.Screen
        name="SearchFact"
        component={SearchFactScreen}
      />
      {/* <SearchStackNavigator.Screen /> */}
    </SearchStackNavigator.Navigator>
  );
}
