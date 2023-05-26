import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ProfileEventsList } from '../components/ProfileEventsList';
import { fakeProfile } from '../utils/fakeData';
import UserCategory from '../components/profile/UserCategory';
import { Button } from 'react-native';
import { supabase } from '../supabase';
import FloatingButton from '../components/profile/FloatingButton';


export const ProfileScreen = () => {
  const [text, setText] = useState('');

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={styles.container1}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-left" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Mi Perfil</Text>

        </View>
        {/* <Button title="Sign Out" onPress={() => supabase.auth.signOut()} /> */}

        <View style={styles.body}>
          <View style={styles.profile}>
            <Image
              style={styles.profileImage}
              source={{ uri: 'https://source.unsplash.com/random/300x301' }}
            />

            <View style={styles.profileInfo}>
              <TouchableOpacity style={styles.editButton}>
                <Icon name="pencil" size={20}/>

              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.contact}>
          <Text style={styles.contactLabel1}>Tus Datos</Text>
            <Text style={styles.contactLabel}>Correo electrónico:</Text>
            <Text style={styles.contactText}>{fakeProfile.email}</Text>
            <Text style={styles.contactLabel}>Teléfono:</Text>
            <Text style={styles.contactText}>{fakeProfile.phone}</Text>
          </View>
          <Text style={styles.titleFilter}>Filtra entre tus eventos </Text>
          <UserCategory/>
          <ProfileEventsList />

          <TouchableOpacity onPress={handleSignOut}>
            <Text style={styles.signOutText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>

      <FloatingButton/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:500
  },
  container1: {
    flex: 1,
    display: 'flex', justifyContent:'center'
  },
  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,

  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 20,
    padding: 5,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20
  },  
  titleFilter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    marginBottom: 20
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
  },
  
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  profileInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
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
    width:30
  },
  editButtonText: {
    fontSize: 16,
    marginLeft: 5,
  },
  contact: {
    marginBottom: 20,
  },
  contactLabel1:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactText: {
    fontSize: 11,
  },
  signOutText: {
    textAlign: 'center'
  }
});