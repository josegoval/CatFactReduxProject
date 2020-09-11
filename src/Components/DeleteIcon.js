// React
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {saveFavouriteFact, removeFavouriteFact} from '../Redux/Actions';
// Icons
import Icon from 'react-native-vector-icons/AntDesign';
// Utils
import findFact from '../Utils/findFact';

export default function DeleteIcon({factId}) {
  const {
    facts,
    user_data: {favourites, my_facts},
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    // Delete Fact Functionality
    <TouchableOpacity style={styles.touchableIcon} onPress={() => dispatch()}>
      <Icon name="delete" size={40} color="#000000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableIcon: {
    marginHorizontal: 20,
  },
});
