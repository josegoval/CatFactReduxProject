// React
import React from 'react';
import {View} from 'react-native';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Redux
import {useSelector} from 'react-redux';
import {filterMyFactsResultsByText} from '../Redux/Actions';
// Components
import FilterFactResults from '../Components/FilterFactResults';
import FactList from '../Components/FactList';
import DeleteIcon from '../Components/DeleteIcon';
import FactDetailsScreen from './FactDetailsScreen';

function SearchMyFactsScreen({navigation}) {
  const my_facts = useSelector((state) => state.user_data.my_facts);

  return (
    <View>
      <FilterFactResults onFilterDispatch={() => filterMyFactsResultsByText} />
      <FactList
        facts={my_facts}
        navigation={navigation}
        RightIcon={DeleteIcon}
      />
    </View>
  );
}

export default function MyFactsScreen() {
  const MyFactsStackNavigator = createStackNavigator();

  return (
    <MyFactsStackNavigator.Navigator initialRouteName="MyFactsList">
      <MyFactsStackNavigator.Screen
        name="SearchMyFact"
        component={SearchMyFactsScreen}
        options={{headerShown: false}}
      />
      <MyFactsStackNavigator.Screen
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
    </MyFactsStackNavigator.Navigator>
  );
}
