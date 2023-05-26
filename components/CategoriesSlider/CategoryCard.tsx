import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Icons from '@expo/vector-icons/FontAwesome5';

interface CategoryCardProps {
  id: number;
  label: string;
  icon_name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ label, icon_name }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <Icons name={icon_name} size={20} color="#f5694d" />
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;


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