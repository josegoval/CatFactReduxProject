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

export default function FavouriteIcon({fact}) {
  const favouriteFacts = useSelector((state) => state.user_data.favourites);
  const dispatch = useDispatch();

  return (
    <View>
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
  touchableIcon: {
    marginHorizontal: 20,
  },
});
