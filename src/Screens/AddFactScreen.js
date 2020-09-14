// React
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {addNewFact} from '../Redux/Actions';
// Icon
import Icon from 'react-native-vector-icons/AntDesign';

const dimensions = Dimensions.get('window');

export default function AddFactScreen() {
  const user = useSelector((state) => state.user_data);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

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
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
            text.trim().length > 0 ? setCanSubmit(true) : setCanSubmit(false);
          }}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={[
          styles.submitButton,
          canSubmit ? styles.submitButtonEnabled : styles.submitButtonDisabled,
        ]}
        disabled={!canSubmit}
        onPress={() => {
          dispatch(addNewFact(inputValue, user));
          setInputValue('');
          setCanSubmit(false);
        }}>
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
    width: dimensions.width * 0.4,
    height: dimensions.height * 0.1,
    marginHorizontal: 200,
    borderRadius: 3,
  },
  submitButtonEnabled: {
    backgroundColor: '#1BBD53',
  },
  submitButtonDisabled: {
    backgroundColor: '#90eeb1',
  },
  submitText: {
    fontSize: 30,
    color: 'white',
    marginRight: 7,
    fontWeight: '700',
  },
});
