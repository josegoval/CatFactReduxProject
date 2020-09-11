// React
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
// Icon
import Icon from 'react-native-vector-icons/AntDesign';

export default function AddFactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Introduce your cat fact!</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.textInputContainer}>
        <TextInput
          placeholder="Start writing just here!"
          style={styles.textInput}
          multiline={true}
          blurOnSubmit={true}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
        <Icon name="upload" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: '700',
    borderBottomWidth: 5,
    borderColor: '#DFDFDF',
    paddingVertical: 3,
    textAlign: 'center',
  },
  textInputContainer: {
    maxHeight: '70%',
    // backgroundColor: 'red',
  },
  textInput: {
    fontSize: 20,
    paddingHorizontal: 10,
    // textAlignVertical: 'top',
    // flex: 1,
  },
  container: {
    flex: 1,
  },
  submitButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1BBD53',
    width: '40%',
    height: '10%',
    marginHorizontal: 200,
    borderRadius: 3,
  },
  submitText: {
    fontSize: 30,
    color: 'white',
    marginRight: 7,
    fontWeight: '700',
  },
});
