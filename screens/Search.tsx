import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../App';
import { CategoriesSlider } from '../components/CategoriesSlider/CategoriesSlider';
import { useGetEvents } from '../api/events';

export interface Event {
  id: number;
  title: string;
  categoryId: number;
  // Otros campos relevantes para un evento
}

export const SearchScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const { data: allEvents, error, loading } = useGetEvents();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (selectedCategoryId) {
      const filteredEvents = allEvents.filter((event: Event) => event.categoryId === selectedCategoryId);
      setEvents(filteredEvents);
    } else {
      setEvents(allEvents);
    }
  }, [selectedCategoryId, allEvents]);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Encuentra el evento perfecto para ti</Text>
        <CategoriesSlider
          selectedCategoryId={selectedCategoryId}
          handleCategoryClick={handleCategoryClick}
        />

      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {events &&
        events.map((event: Event) => (
          <TouchableOpacity
            key={event.id}
            style={styles.imageContainer}
            // onPress={() => navigate('EventDetails', { eventId: event.id })}
          >
            <Text style={styles.image}>{event.title}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    titleImage:{
        width: 160,
        fontSize: 12,
        padding: 3
    },
    container: {
      flex: 1,
      paddingVertical: 100,
      display: 'flex',
      backgroundColor: '#fff',
    },
    title: {
      paddingHorizontal: 40,
      fontSize: 40,
      display: 'flex',
      marginBottom: 0,
      fontWeight: 'bold',
      justifyContent:'flex-start',
    },
    inputContainer: {
        paddingHorizontal: 40,
    },
    inputInnerContainer: {
        borderBottomWidth: 0,
    },
    input: {
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#4e4e4e',
    },
    categoriesList: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      marginBottom: 20
    },
    category: {
        marginRight: 16
    },
    categoryText: {
        fontSize: 20,
        display: 'flex',
        fontWeight: 'bold',
        justifyContent:'flex-start',
    },
    categoryTextSelected: {
        all: 'inset',
        fontSize: 20,
        display: 'flex',
        color: '#4e4e4e',  
        fontWeight: 'bold',
        justifyContent:'flex-start',
    },
    listOfImages: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 100


      },
      imageContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#f5694d',
      },
      image: {
        width: 160,
        height: 160,
      },
});