import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function BadButton({
  title,
  onPress,
  variant = 'knapp',
}: {
  title: string;
  onPress: () => void;
  variant?: 'knapp' | 'logIn' | 'default' | 'error';
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[variant]]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 0,
    width: 200,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
  },
  text: {
    color: '#444',
    fontSize: 14,
  },
  // Era varianter ↓↓↓
  knapp: {
    backgroundColor: '#AAA',
    borderColor: '#CCC',
  },
  logIn: {
    backgroundColor: '#A6FF00',
    borderColor: '#000088',
  },
  default: {
    backgroundColor: '#EEEEEE',
    borderColor: '#999999',
  },
  error: {
    backgroundColor: '#FFCCCC',
    borderColor: '#990000',
  },
});






