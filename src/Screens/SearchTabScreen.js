// React
import React, {useState} from 'react';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Redux
import {useDispatch} from 'react-redux';
// Components
import SearchFactScreen from './SearchFactScreen';
import FactDetailsScreen from './FactDetailsScreen';
// Icons
import Icon from 'react-native-vector-icons/Ionicons';

const SearchStackNavigator = createStackNavigator();

export default function SearchTabScreen() {
  // Requires to dispatch an action to fetch data (just once)
  const [initialReduxState, setinitialReduxState] = useState(true);
  const dispatch = useDispatch();
  if (initialReduxState) {
    dispatch({type: ''});
    setinitialReduxState(false);
  }

  return (
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
            paddingTop: 10,
            paddingRight: 30,
            // Will Work?
            transform: [{rotate: '30deg'}],
          },
          // headerTintColor: '#0C63ED',
        }}
      />
      <SearchStackNavigator.Screen
        name="FactDetails"
        component={FactDetailsScreen}
        options={{
          title: 'Fact Details',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        }}
      />
    </SearchStackNavigator.Navigator>
  );
}
