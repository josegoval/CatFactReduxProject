// React
import React from 'react';
import {View} from 'react-native';
// Redux
import {useSelector} from 'react-redux';
import {filterFactResultsByText} from '../Redux/Actions';
// Components
import FilterFactResults from '../Components/FilterFactResults';
import FactList from '../Components/FactList';

export default function SearchFactScreen({navigation}) {
  const facts = useSelector((state) => state.facts);

  return (
    <View>
      <FilterFactResults onFilterDispatch={filterFactResultsByText} />
      <FactList facts={facts} navigation={navigation} />
    </View>
  );
}
