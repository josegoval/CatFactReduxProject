// React
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Components
import FavouriteFactsScreen from './FavouriteFactsScreen';
import FactDetailsScreen from './FactDetailsScreen';
// Icons
import Icon from 'react-native-vector-icons/AntDesign';

const SearchStackNavigator = createStackNavigator();

export default function FavouritesTabScreen() {
  return (
    <SearchStackNavigator.Navigator initialRouteName="MyFavouriteFacts">
      <SearchStackNavigator.Screen
        name="MyFavouriteFacts"
        component={FavouriteFactsScreen}
        options={{
          headerTitle: (props) => (
            <View style={styles.headerContainer}>
              <Text style={styles.headerStyle}>My </Text>
              <Icon name="heart" size={35} color="#D33F53" />
              <Text style={styles.headerStyle}> Facts</Text>
            </View>
          ),
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

const styles = StyleSheet.create({
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
