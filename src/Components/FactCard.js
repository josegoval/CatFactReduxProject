// React
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {saveFavouriteFact, removeFavouriteFact} from '../Redux/Actions';
// Icons
import Icon from 'react-native-vector-icons/AntDesign';
// Utils
import findFact from '../Utils/findFact';

export default function FactCard({fact, onPressText}) {
  const favouriteFacts = useSelector((state) => state.user_data.favourites);
  const dispatch = useDispatch();

  return (
    <View style={styles.factCard}>
      <TouchableOpacity
        style={styles.touchableText}
        onPress={() => onPressText()}>
        <Text numberOfLines={3} style={styles.text}>
          {fact.text}
        </Text>
      </TouchableOpacity>
      {/* Favourite fact functionality */}
      {findFact(fact._id, favouriteFacts) ? (
        <TouchableOpacity
          style={styles.touchableIcon}
          onPress={() => dispatch(removeFavouriteFact(fact._id))}>
          <Icon name="heart" size={40} color="#D33F53" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.touchableIcon}
          onPress={() => dispatch(saveFavouriteFact(fact))}>
          <Icon name="hearto" size={40} color="#D33F53" />
        </TouchableOpacity>
      )}
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
    borderColor: '#DFDFDF',
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
