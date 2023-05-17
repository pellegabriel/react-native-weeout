import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import EventForm from '../components/Create/EventForm';

export const CreateEventScreen = () => {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <Text style={styles.title}>Crea tu propio evento</Text>

      <EventForm />
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
  },
});
