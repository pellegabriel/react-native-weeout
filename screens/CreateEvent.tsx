import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventForm from '../components/Create/EventForm';
import { useCallback } from 'react';
import { useGetEvents } from '../api/events';

export const CreateEventScreen = () => {
  const navigation = useNavigation();
  const { refetchEvents } = useGetEvents();

  const onEventCreatedSuccesfully = useCallback(async () => {
    try {
      // Realizar el fetch de los eventos aquí
      await refetchEvents();
  
      // Navegar a la pantalla de inicio (HomeScreen)
      navigation.navigate('Home');
    } catch (error) {
      console.log(':(', error);
    }
  }, [refetchEvents, navigation]);

  const handleEventCreated = useCallback(async () => {
    try {
      await refetchEvents();
    } catch (error) {
      console.log('Error al obtener eventos actualizados:', error);
    }
  }, [refetchEvents]);
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <Text style={styles.title}>Crea tu propio evento</Text>
      <EventForm 
      onEventCreatedSuccesfully={onEventCreatedSuccesfully} 
      handledEventCreated={handleEventCreated}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingVertical: 100,
    paddingHorizontal: 40,
    backgroundColor: '#f0f2f5',
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

