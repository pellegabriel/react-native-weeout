import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const Input = ({ value, onChangeText, placeholder }: InputProps) => {
  const [text, setText] = useState(value);

  const handleTextChange = (newText: string) => {
    setText(newText);
    onChangeText(newText);
  };

  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={handleTextChange}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 320,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',    
    padding: 10,
    marginVertical: 10,
    borderRadius: 20
  },
});

export default Input;
