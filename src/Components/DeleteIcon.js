// React
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
// Redux
import {removeFactFromEverywhere} from '../Redux/MultipleSynchronousActions';
// Icons
import Icon from 'react-native-vector-icons/AntDesign';

export default function DeleteIcon({fact}) {
  return (
    // Delete Fact Functionality
    <TouchableOpacity
      style={styles.touchableIcon}
      onPress={() => removeFactFromEverywhere(fact._id)}>
      <Icon name="delete" size={40} color="#000000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableIcon: {
    marginHorizontal: 20,
  },
});
