// React
import React from 'react';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// Redux
import {Provider} from 'react-redux';
import store from './src/Redux/store';
// Screens
import SearchTabScreen from './src/Screens/SearchTabScreen';
import FavouritesTabScreen from './src/Screens/FavouritesTabScreen';
import AddTabScreen from './src/Screens/AddTabScreen';
import ProfileTabScreen from './src/Screens/ProfileTabScreen';
// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainBottomTabNavigator = createMaterialBottomTabNavigator();

function App() {
  return (
    // Redux provider
    <Provider store={store}>
      {/* React Navigation */}
      <NavigationContainer>
        <MainBottomTabNavigator.Navigator initialRouteName="Search">
          <MainBottomTabNavigator.Screen
            name="Search"
            component={SearchTabScreen}
            options={{
              tabBarLabel: 'Search',
              tabBarColor: '#0C63ED',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="search-web"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <MainBottomTabNavigator.Screen
            name="Favourites"
            component={FavouritesTabScreen}
            options={{
              tabBarLabel: 'Favourites',
              tabBarColor: '#EBB50B',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="star" color={color} size={26} />
              ),
            }}
          />
          <MainBottomTabNavigator.Screen
            name="Add"
            component={AddTabScreen}
            options={{
              tabBarLabel: 'Add New',
              tabBarColor: '#1BBD53',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="plus-box"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <MainBottomTabNavigator.Screen
            name="Profile"
            component={ProfileTabScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#D81838',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account-box"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </MainBottomTabNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
