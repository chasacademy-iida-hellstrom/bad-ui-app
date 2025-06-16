import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function BadInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    color: '#AAAAAA',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
