// React
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
// Components
import FavouriteIcon from './FavouriteIcon';

export default function FactCard({fact, onPressText, RightIcon}) {
  return (
    <View style={styles.factCard}>
      <TouchableOpacity
        style={styles.touchableText}
        onPress={() => onPressText()}>
        <Text numberOfLines={3} style={styles.text}>
          {fact.text}
        </Text>
      </TouchableOpacity>
      {RightIcon ? <RightIcon /> : <FavouriteIcon fact={fact} />}
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
});

FactCard.propTypes = {
  fact: PropTypes.object.isRequired,
  onPressText: PropTypes.func.isRequired,
  RightIcon: PropTypes.element,
};
