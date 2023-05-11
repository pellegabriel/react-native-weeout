import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import EventForm, { EventData } from '../components/Create/EventForm';

export const CreateEventScreen = () => {

  const handleEventSubmit = (eventData: EventData) => {
    // Aquí se maneja la lógica de guardar o procesar los datos del evento
    console.log('Datos del evento:', eventData);

    // Por ejemplo, puedes guardar los datos en una base de datos, enviarlos a un servidor, etc.
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Crea tu propio Evento</Text>
      <EventForm onSubmit={handleEventSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 40,
    paddingVertical: 100,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 40,
    display: 'flex',
    marginBottom: 40,
    fontWeight: 'bold',
    justifyContent:'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});