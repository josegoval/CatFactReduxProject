// React
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// Components
import FavouriteIcon from '../Components/FavouriteIcon';
// Icons
import Icon from 'react-native-vector-icons/AntDesign';

export default function FactDetailsScreen({route}) {
  const {fact} = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Fact Text */}
      <Text numberOfLines={1} style={styles.title}>
        {`Fact ${fact._id.slice(0, 10)}...`}
      </Text>
      <Text style={styles.factText}>{fact.text}</Text>
      {/* upvotes and favourite */}
      <View style={styles.interactionsContainer}>
        <View style={styles.upvotesContainer}>
          <TouchableOpacity style={styles.touchableIcon}>
            {fact.userUpvoted ? (
              <Icon name="like1" size={40} color="#4037BA" />
            ) : (
              <Icon name="like2" size={40} color="#4037BA" />
            )}
          </TouchableOpacity>
          <Text style={styles.upvotesText}>{fact.upvotes}</Text>
        </View>
        <FavouriteIcon fact={fact} />
      </View>
      {/* Creator Details */}
      <Text style={styles.title}>Creator Details</Text>
      <View style={styles.creatorDetailsContainer}>
        <Text style={styles.factText}>{`ID: ${fact.user._id}`}</Text>
        <Text
          style={
            styles.factText
          }>{`Name: ${fact.user.name.first} ${fact.user.name.last}`}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '700',
    // fontStyle: 'italic',
    borderBottomWidth: 10,
    borderBottomColor: '#DFDFDF',
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: '#F5F5F5',
    // flexDirection: 'row',
    flex: 1,
  },
  factText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  interactionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 2,
  },
  upvotesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  upvotesText: {
    fontSize: 25,
    fontWeight: 'bold',
    // color: '#333333',
    paddingLeft: 5,
  },
  creatorDetailsContainer: {
    paddingTop: 5,
  },
});
