import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import EventForm, { EventData } from '../components/Create/EventForm';
import { supabase } from '../supabase';
import { AdressInputWithMap } from '../components/Map/AdressInputWithMap';

export const CreateEventScreen = () => {

  const handleEventSubmit = async (eventData: EventData) => {
    // Aquí se maneja la lógica de guardar o procesar los datos del evento
    // Por ejemplo, puedes guardar los datos en una base de datos, enviarlos a un servidor, etc.
    const insertData = await supabase.from('events').insert(eventData)
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps='always'>
      <Text style={styles.title}>Crea tu propio evento</Text>

      <EventForm onSubmit={handleEventSubmit} />
    
      <AdressInputWithMap map_point={''} />
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
    justifyContent:'flex-start',
  },
});
