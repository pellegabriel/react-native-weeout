import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { EventUser } from './EventUser';
import { useGetEvents } from '../../api/events';

export const ProfileEventsList: React.FC = () => {
  const { data, error, loading } = useGetEvents()

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {loading && <Text>loading...</Text>}
      
      {data && (
        data.map((event, index) => (
          <View key={index} style={styles.cardContainer}>
            <EventUser data={event} />
          </View>
        ))
      )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 40
  },
  cardContainer: {
    marginBottom: 10,
  },
});