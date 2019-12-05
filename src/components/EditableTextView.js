import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { AppFonts } from '@theme';

const styles = StyleSheet.create({
  text: {
    ...AppFonts.headline,
    alignSelf: 'flex-start'
  }
});

const EditableTextView = ({ text, placeholder, onChange }) => {
  const [_text, _setText] = useState(text);

  const changeTextCallback = useCallback(value => _setText(value), [_setText]);
  const endEditingCallback = useCallback(() => text !== _text && onChange(_text.trim()), [_text, onChange, text]);

  useEffect(() => _setText(prevState => (prevState !== text ? text : prevState)), [text]);

  return (
    <TextInput
      style={styles.text}
      underlineColorAndroid="transparent"
      value={_text}
      onChangeText={changeTextCallback}
      onEndEditing={endEditingCallback}
      placeholder={placeholder}
    />
  );
};

export default EditableTextView;
