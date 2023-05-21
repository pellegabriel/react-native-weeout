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
