import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { EventCard } from './EventCard';
import { useGetEvents } from '../../api/events';

export const ListOfEvents: React.FC = () => {
  const { data, error, loading, refetchEvents } = useGetEvents();

  useEffect(() => {
    refetchEvents();
  }, []);
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
        data.map((event: any, index: React.Key) => (
          <View key={index} style={styles.cardContainer}>
            <EventCard data={event} />
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
  },
  cardContainer: {
    marginBottom: 10,
  },
});

function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error('Function not implemented.');
}
