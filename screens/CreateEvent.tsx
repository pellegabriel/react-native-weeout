import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import EventForm from '../components/Create/EventForm';
import uuid from 'react-native-uuid';
import { AdressInputWithMap } from '../components/Map/AdressInputWithMap';
import { useCreateEvent } from '../api/events';


export const CreateEventScreen = () => {
  const { createEvent } = useCreateEvent()
  const [formData, setFormData] = useState({
    id: uuid.v4(),
    title: '',
    image: '',
    location: '',
    subtitle: '',
    categoria: '',
    created_by: '',
    description: '',
    event_date_start: '1970-01-01 00:00:02',
    event_date_end: '1970-01-02 00:00:06',
    event_time_end: '1970-01-04 00:00:01',
    event_time_start: '1970-01-05 00:00:03',
  });
  const handleAddressChange = (addressData: { address: string, latitude: number, longitude: number }) => {
    setFormData((prevData) => ({
      ...prevData,
      location: addressData.address,
    }));
  };
  const handleSubmit = () => {
    createEvent(formData)
  }
  // const handleSubmit = async (content: string, image: string) => {
  //   try {
  //     let publicUrl = "";
  //     if (image) {
  //       const fileExt = image.split(".").pop();
  //       const fileName = image.replace(/^.*[\\\/]/, "");
  //       const filePath = `${Date.now()}.${fileExt}`;

  //       const formData = new FormData();
  //       const photo = {
  //         uri: image,
  //         name: fileName,
  //         type: `image/${fileExt}`,
  //       } as unknown as Blob;
  //       formData.append("file", photo);

  //       const { error } = await supabase.storage
  //         .from("posts")
  //         .upload(filePath, formData);
  //       if (error) throw error;

  //       const { data } = supabase.storage.from("posts").getPublicUrl(filePath);
  //       publicUrl = data.publicUrl;
  //     }
  //     const { data, error } = await supabase
  //       .from("posts")
  //       .insert({ content, image: publicUrl })
  //       .select("*, profile: profiles(username, avatar_url)");
  //     if (error) {
  //       throw error;
  //     } else {
  //       setPosts([data[0], ...posts]);
  //     }
  //   } catch (error: any) {
  //     Alert.alert("Server Error", error.message);
  //   }
  // };

  // const handleDeletePost = async (id: string) => {
  //   const { error } = await supabase.from("posts").delete().eq("id", id);
  //   if (error) {
  //     console.log(error);
  //     Alert.alert("Server Error", error.message);
  //   } else {
  //     setPosts(posts.filter((post) => post.id !== id));
  //   }
  // };

  const Label = ({ text }: { text: string}) => {
    return (
      <Text style={styles.label}>{text}:</Text>
    )
  }
  
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <Text style={styles.title}>Crea tu propio evento</Text>

      <EventForm />
      <Label text='Ubicasion del evento' />

      <AdressInputWithMap onChange={handleAddressChange} map_point="" />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Crear evento</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingVertical: 100,
    paddingHorizontal: 40,
    backgroundColor: '#f0f2f5', // Color de fondo claro de Facebook
  },
  title: {
    fontSize: 40,
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },  button: {
    backgroundColor:  '#f5694d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#4b4c4f',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
