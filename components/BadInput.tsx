import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
export default function BadInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  variant = 'default',
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  variant?: 'default' | 'ghost' | 'error' | 'underline';
}) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, styles[variant]]}
      autoCapitalize="none"
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: '#666',
  },
  default: {
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
  },
  ghost: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    color: '#AAA',
  },
  error: {
    borderWidth: 1,
    borderColor: '#CC0000',
    backgroundColor: '#FFF5F5',
    color: '#900',
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#999',
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
});









