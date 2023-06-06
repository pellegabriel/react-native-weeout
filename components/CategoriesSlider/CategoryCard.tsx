import React from 'react';
import Icons from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

type CategoryCardProps = {
  id: number
  label: string
  icon_name: string
  isSelected:  boolean
  handlePress: () => void
}

const CategoryCard: React.FC<CategoryCardProps> = ({ label, icon_name, isSelected, handlePress }) => {
  const containerStyles = {
    ...styles.iconContainer,
    backgroundColor: isSelected ? '#f5694d' : 'white'
  }
  return (
    <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
      <View style={containerStyles}>
        <Icons name={icon_name} size={20} color={isSelected ? 'white' : "#f5694d"} />
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

//cuando sale bien la creacion del evento te navegue a la home y hacer un fetch de vuelta de los eventos ,desde el home le pasas una prop al componente eventForm
//onEventCreatedSuccesfully y esta funcion va a hacer un fetch de vuelta de los eventos y navegar para atras (Home)
// funcion goBack para el form 
//