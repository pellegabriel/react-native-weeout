import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { fakeEvents } from '../../utils/fakeData';
import { EventCard } from './EventCard';

export const ListOfEvents: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {fakeEvents.map((event, index) => (
        <View key={index} style={styles.cardContainer}>
          <EventCard data={event} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginBottom: 10,
  },
});