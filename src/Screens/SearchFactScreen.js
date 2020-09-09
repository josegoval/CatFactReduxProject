// React
import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
// Redux
import {useSelector} from 'react-redux';

export default function SearchFactScreen() {
  const facts = useSelector((state) => state.facts);

  return (
    <View>
      {/* <Text>Loaded: {String(asyncInitialState.loaded)}</Text>
      <Text>Loading: {String(asyncInitialState.loading)}</Text> */}
      <FlatList
        data={facts}
        renderItem={({item}) => <Text>{item.text}</Text>}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
