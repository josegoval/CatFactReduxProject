// React
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

// Components
import FactCard from './FactCard';

/**
 * Component that render a interactive list of facts which can
 * navigate to details.
 *
 * @param {Array} facts Array of facts to render
 * @param {Array} navigation Navigation prop
 * @param {Component} RightIcon Icon to show at right which will
 * recieve the fact as argument
 */
export default function FactList({facts, navigation, RightIcon}) {
  return (
    <FlatList
      data={facts}
      renderItem={({item}) =>
        item.visible && (
          <FactCard
            fact={item}
            onPressText={() => navigation.navigate('FactDetails', {fact: item})}
            RightIcon={RightIcon}
          />
        )
      }
      keyExtractor={(item) => item._id}
    />
  );
}

FactList.propTypes = {
  facts: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  RightIcon: PropTypes.element,
};
