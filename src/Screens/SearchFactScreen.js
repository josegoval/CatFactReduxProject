// React
import React, {useState} from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {filterFactResultsByText} from '../Redux/Actions';
// Components
import FactCard from '../Components/FactCard';

export default function SearchFactScreen({navigation}) {
  const facts = useSelector((state) => state.facts);
  const dispatch = useDispatch();
  const [textInputValue, setTextInputValue] = useState('');

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={styles.textInput}
          value={textInputValue}
          placeholder="Filter results..."
          onChangeText={(text) => {
            // Update the text
            setTextInputValue(text);
            // Dispatch the filter
            // Does not render "fine" probably because it needs queries on actions
            // but it works for now.
            dispatch(filterFactResultsByText(text));
          }}
        />
      </KeyboardAvoidingView>
      <FlatList
        data={facts}
        renderItem={({item}) =>
          item.visible && (
            <FactCard
              fact={item}
              onPressText={() =>
                navigation.navigate('FactDetails', {fact: item})
              }
            />
          )
        }
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 5,
    borderColor: '#DFDFDF',
  },
});
