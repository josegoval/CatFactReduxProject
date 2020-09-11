// React
import React from 'react';
import {View} from 'react-native';
// Redux
import {useSelector} from 'react-redux';
import {filterFavouriteFactsResultsByText} from '../Redux/Actions';
// Components
import FilterFactResults from '../Components/FilterFactResults';
import FactList from '../Components/FactList';

export default function FavouriteFactScreen({navigation}) {
  const favouriteFacts = useSelector((state) => state.user_data.favourites);

  return (
    <View>
      <FilterFactResults onFilterDispatch={filterFavouriteFactsResultsByText} />
      <FactList facts={favouriteFacts} navigation={navigation} />
    </View>
  );
}
