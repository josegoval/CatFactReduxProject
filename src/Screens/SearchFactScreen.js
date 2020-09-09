// React
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
// Redux
import {useSelector} from 'react-redux';
// Components
import FactCard from '../Components/FactCard';

export default function SearchFactScreen() {
  const facts = useSelector((state) => state.facts);

  return (
    <View>
      {/* <Text>Loaded: {String(asyncInitialState.loaded)}</Text>
      <Text>Loading: {String(asyncInitialState.loading)}</Text> */}
      <FlatList
        data={facts}
        renderItem={({item, id}) => <FactCard fact={item} arrayId={id} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  factCard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 5,
    borderBottomColor: '#DFDFDF',
  },
  touchableText: {
    marginLeft: 3,
    width: '85%',
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    // fontStyle: 'italic',
  },
  touchableIcon: {
    marginHorizontal: 20,
  },
});
