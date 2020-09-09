// React
import React from 'react';
import {View, Text, FlatList} from 'react-native';
// Redux
import {useSelector, useStore} from 'react-redux';
import store from '../Redux/store';

export default function SearchFactScreen() {
  const facts = useSelector((state) => state.facts);
  const store = useStore();
  console.log(store.getState());
  return (
    <View>
      {/* <Text>wholap</Text> */}
      <FlatList
        data={facts._W}
        renderItem={({item}) => <Text>{item.text}</Text>}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
