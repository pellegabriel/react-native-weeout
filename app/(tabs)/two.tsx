import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../components/button'; 
import { SearchInput } from '../../components/SearchInput';
import { ProfileEventsList } from '../../components/ProfileEventsList';
import { createStackNavigator, StackNavigationProp, } from '@react-navigation/stack';


  
interface TabTwoScreenProps {
  name: string;
  email: string;
  phone: string;
  image: string;
}

type TData = {
  id: string;
  name: string;
  date: string;
  image: string;
}[]
const Stack = createStackNavigator();

const data: TData = [
  {
    id: '1',
    name: 'John Doe',
    date: '2022-04-15',
    image: 'https://source.unsplash.com/random/300x301',
  },
  {
    id: '2',
    name: 'Jane Smith',
    date: '2022-04-16',
    image: 'https://source.unsplash.com/random/300x301',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    date: '2022-04-17',
    image: 'https://source.unsplash.com/random/300x301',
  },
];


const TabTwoScreen = ({ name, email, phone,image }: TabTwoScreenProps) => {

  const [text, setText] = useState('');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Mi Perfil</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.profile}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://source.unsplash.com/random/300x301' }}
          />

          <View style={styles.profileInfo}>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="pencil" size={20} color="#cccccc  " />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contact}>
          <Text style={styles.contactLabel}>Correo electrónico:</Text>
          <Text style={styles.contactText}>{email}</Text>
          <Text style={styles.contactLabel}>Teléfono:</Text>
          <Text style={styles.contactText}>{phone}</Text>
        </View>
        <Button/>
        <SearchInput
          value={text}
          onChangeText={handleTextChange}
          placeholder="Escribe algo..."
        />
        <ProfileEventsList data={data} />

  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // cambiar a '#F2F2F2' o cualquier otro tono de gris claro
    display: 'flex', justifyContent:'center'
  },
  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 20,
    padding: 5,
    zIndex: 1,
  },
  title: {
    color: '#fff', // cambiar a '#D50A0A' o cualquier otro color que prefieras
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  
  body: {
    padding: 20,
  },
  profile: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  
  profileInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  
  editButtonText: {
    color: '#D50A0A',
    fontSize: 16,
    marginLeft: 5,
  },
  contact: {
    marginBottom: 20,
  },
  contactLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TabTwoScreen;
