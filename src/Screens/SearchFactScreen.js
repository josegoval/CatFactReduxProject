// React
import React from 'react';
import {View, FlatList} from 'react-native';
// Redux
import {useSelector} from 'react-redux';
// Components
import FactCard from '../Components/FactCard';

export default function SearchFactScreen({navigation}) {
  const facts = useSelector((state) => state.facts);

  return (
    <View>
      {/* <Text>Loaded: {String(asyncInitialState.loaded)}</Text>
      <Text>Loading: {String(asyncInitialState.loading)}</Text> */}
      <FlatList
        data={facts}
        renderItem={({item}) => (
          <FactCard
            fact={item}
            onPressText={() => navigation.navigate('FactDetails', {fact: item})}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
