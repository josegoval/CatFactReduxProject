// React
import React from 'react';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Redux
import {useDispatch} from 'react-redux';
// Components
import SearchFactScreen from './SearchFactScreen';
import {View, Text} from 'react-native';

const SearchStackNavigator = createStackNavigator();

export default function SearchTabScreen() {
  // Requires to dispatch an action to fetch data
  const dispatch = useDispatch();
  dispatch({type: 'none'});

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
