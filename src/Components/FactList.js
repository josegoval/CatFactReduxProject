// React
import React from 'react';
import {FlatList} from 'react-native';
// Components
import FactCard from './FactCard';

/**
 * Component that render a interactive list of facts which can
 * navigate to details.
 *
 * @param {Array} facts Array of facts to render
 * @param {Array} navigation Navigation prop
 */
export default function FactList({facts, navigation}) {
  return (
    <FlatList
      data={facts}
      renderItem={({item}) =>
        item.visible && (
          <FactCard
            fact={item}
            onPressText={() => navigation.navigate('FactDetails', {fact: item})}
          />
        )
      }
      keyExtractor={(item) => item._id}
    />
  );
}
