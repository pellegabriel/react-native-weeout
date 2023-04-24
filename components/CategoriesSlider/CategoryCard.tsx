import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TFakeCategory } from '../../utils/fakeData';

export const CategoryCard: React.FC<TFakeCategory> = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      <AntDesign name="smileo" size={29} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: '#4e4e4e',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#4e4e4e',
  },
});