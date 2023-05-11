import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { TFakeCategory } from '../../utils/fakeData';
import Icons from '@expo/vector-icons/FontAwesome5';

export const CategoryCard: React.FC<TFakeCategory> = ({ title, icon, startDate, location }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <Icons name={icon} size={20} color="#f5694d" />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    marginRight: 20,
    marginBottom: 0,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 6,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
    borderColor: '#4e4e4e',
    justifyContent: 'center',
  },
});