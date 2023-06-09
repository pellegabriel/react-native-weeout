import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ProfileEventsList } from '../components/ProfileEventsList';
import { fakeProfile } from '../utils/fakeData';
// import UserCategory from '../components/profile/UserCategory';
// import { Button } from 'react-native';
import { supabase } from '../supabase';
import FloatingButton from '../components/profile/FloatingButton';


export const ProfileScreen = () => {
  const [text, setText] = useState('');

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  // const handleTextChange = (newText: string) => {
  //   setText(newText);
  // };

  return (
    <View style={styles.container1}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mi Perfil</Text>

        </View>
        {/* <Button title="Sign Out" onPress={() => supabase.auth.signOut()} /> */}

        <View style={styles.body}>
          {/* <View style={styles.profile}>


            <View style={styles.profileInfo}>
              <TouchableOpacity style={styles.editButton}>
                <Icon name="pencil" size={20}/>

              </TouchableOpacity>
            </View>
          </View> */}
{/* 
          <View style={styles.contact}>
            <Text style={styles.contactLabel}>Correo electrónico:</Text>
            <Text style={styles.contactText}>{fakeProfile.email}</Text>
            <Text style={styles.contactLabel}>Teléfono:</Text>
            <Text style={styles.contactText}>{fakeProfile.phone}</Text>
          </View> */}
          <Text style={styles.titleFilter}>Tus eventos </Text>
          <View style={styles.scroll}>
          <ProfileEventsList />
          </View>
          <View style={styles.signOutView}> 
          <TouchableOpacity onPress={handleSignOut}  style={styles.signout}>
            <Text style={styles.signOutText}>
              Logout
            </Text>
          </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>

      <FloatingButton/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    display: 'flex', justifyContent:'center'
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,

  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 20,
    padding: 5,
    zIndex: 1,
  },
  scroll: {
    height:400
  },
  title: {
    paddingHorizontal: 40,
    fontSize: 40,
    display: 'flex',
    marginBottom: 0,
    fontWeight: 'bold',
    justifyContent:'flex-start',
  },
  titleFilter: {
    paddingHorizontal: 20,
    fontSize: 30,
    display: 'flex',
    fontWeight: 'bold',
    justifyContent:'center',
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
    paddingHorizontal: 10,
    fontSize: 30,
    display: 'flex',
    marginBottom: 20,
    fontWeight: 'bold',
    justifyContent:'flex-start',
  },
  contactLabel: {
    paddingHorizontal: 10,
    fontSize: 20,
    display: 'flex',
    marginBottom: 0,
    fontWeight: 'bold',
    justifyContent:'flex-start',
  },
  contactText: {
    paddingHorizontal: 10,
    fontSize: 15,
    display: 'flex',
    marginBottom: 15,
    justifyContent:'flex-start',  },
  signOutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',  },
  signout: {
    marginTop: 60,
    backgroundColor:  '#f5694d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, 
    width: 150,
   },
   signOutView: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
   }
});