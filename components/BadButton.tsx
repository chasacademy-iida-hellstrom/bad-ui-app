import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BadButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#AAA',
    padding: 14,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#CCC',
    width: 200,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#444',
    fontSize: 14,
  },
});
