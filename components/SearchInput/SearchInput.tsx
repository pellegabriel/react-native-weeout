import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput = ({ value, onChangeText, placeholder }: SearchInputProps) => {
  const [text, setText] = useState(value);

  const handleTextChange = (newText: string) => {
    setText(newText);
    onChangeText(newText);
  };

  const handleButtonPress = () => {
    // Hacer algo cuando se presione el botón
    console.log('Botón presionado');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder={placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
});

