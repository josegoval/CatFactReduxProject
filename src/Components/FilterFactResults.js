// React
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';
// Redux
import {useDispatch} from 'react-redux';

/**
 * Component that render a input which on each new type dispatch an
 * action (onFilterDispatch).
 *
 * @param {Function} onFilterDispatch Action to dispatch when filtering
 */
export default function FilterFactResult({onFilterDispatch}) {
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
            dispatch(onFilterDispatch(text));
          }}
        />
      </KeyboardAvoidingView>
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
