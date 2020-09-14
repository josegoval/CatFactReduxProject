// React
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
// Redux
import {removeFactFromEverywhere} from '../Redux/MultipleActions';
import {useDispatch} from 'react-redux';
// Icons
import Icon from 'react-native-vector-icons/AntDesign';

export default function DeleteIcon({fact}) {
  const dispatch = useDispatch();

  return (
    // Delete Fact Functionality
    <TouchableOpacity
      style={styles.touchableIcon}
      onPress={() => {
        dispatch(removeFactFromEverywhere(fact._id));
      }}>
      <Icon name="delete" size={40} color="#000000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableIcon: {
    marginHorizontal: 20,
  },
});
