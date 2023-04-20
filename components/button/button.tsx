import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
    >
      <Text style={styles.buttonText}>Presionar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});