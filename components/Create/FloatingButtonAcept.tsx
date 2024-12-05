import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const FloatingButtonAcept = () => {
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handlePress = () => {
    navigate('EventCreate')
  };

  const buttonStyles = [
    styles.button,
    isPressed && styles.buttonPressed,
  ];

  const textStyles = [
    styles.text,
    isPressed && styles.textVisible,
  ];


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={buttonStyles}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1} // Deshabilitar el cambio de opacidad al presionar
      >
        {isPressed ? null : <Text style={styles.icon}>+</Text>}
        <Text style={textStyles}>Crear nuevo evento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  button: {
    backgroundColor: '#f5694d',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonPressed: {
    width: 180,
    height: 60,
    backgroundColor: '#f5694d', // Mantener el mismo color de fondo
  },
  text: {
    color: 'white',
    marginTop: 8,
    opacity: 0,
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textVisible: {
    opacity: 1,
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
});

export default FloatingButtonAcept;
