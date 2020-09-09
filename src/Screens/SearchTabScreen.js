// React
import React from 'react';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Redux
import {useDispatch} from 'react-redux';
// Components
import SearchFactScreen from './SearchFactScreen';
// Icons
import Icon from 'react-native-vector-icons/Ionicons';

const SearchStackNavigator = createStackNavigator();

export default function SearchTabScreen() {
  // Requires to dispatch an action to fetch data
  const dispatch = useDispatch();
  dispatch({type: ''});

  return (
    // <View>
    //   <Text>I work</Text>
    // </View>
    <SearchStackNavigator.Navigator initialRouteName="SearchFact">
      <SearchStackNavigator.Screen
        name="SearchFact"
        component={SearchFactScreen}
        options={{
          title: 'Search Facts',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            paddingRight: 20,
            fontWeight: 'bold',
            fontSize: 40,
          },
          headerRight: () => <Icon name="paw" size={35} color="#D33F53" />,
          headerRightContainerStyle: {
            paddingRight: 33,
            // Will Work?
            transform: [{rotate: '30deg'}],
          },
          // headerTintColor: '#0C63ED',
        }}
      />
      {/* <SearchStackNavigator.Screen /> */}
    </SearchStackNavigator.Navigator>
  );
}
