// React
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// Redux
import {useSelector} from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/AntDesign';

export default function FavouritesTabScreen() {
  const user_data = useSelector((state) => state.user_data);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>Your </Text>
        <Icon name="user" size={35} color="#D33F53" />
        <Text style={styles.headerStyle}> Info</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`ID: ${user_data._id}`}</Text>
        <Text
          style={
            styles.text
          }>{`Name: ${user_data.name.first} ${user_data.name.last}`}</Text>
        <View style={styles.dataContainer}>
          <Icon name="heart" size={30} color="#D33F53" />
          <Text
            style={
              styles.text
            }>{` facts: ${user_data.favourites.length}`}</Text>
        </View>
        <Text
          style={
            styles.text
          }>{`Created facts: ${user_data.my_facts.length}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: '#DFDFDF',
  },
  text: {
    paddingVertical: 5,
    fontSize: 30,
  },
  textContainer: {
    paddingTop: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
