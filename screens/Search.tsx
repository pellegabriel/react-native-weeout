import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../App';
import { CategoriesSlider } from '../components/CategoriesSlider/CategoriesSlider';
import { useGetEvents } from '../api/events';
import { EventSearch } from '../components/profile/EventSearch';

export const SearchScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const { data, error, loading } = useGetEvents();
  const [events, setEvents] = useState<any[]>([]); // Agrega el estado events// nose que estoy pasandole mal aca 

  useEffect(() => {
    if (data && selectedCategoryId && Array.isArray(data)) {
      const filteredEvents = data.filter((event) => event.categoria === selectedCategoryId);
      setEvents(filteredEvents);
    } else {
      setEvents(data || []);
    }
  }, [selectedCategoryId, data]);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Encuentra el evento perfecto para ti</Text>
      <CategoriesSlider
        selectedCategoryId={selectedCategoryId}
        handleCategoryClick={handleCategoryClick}
      />
      {events.map((event) => ( // Utiliza events en lugar de data
        <View key={event.id} style={styles.cardContainer}>
          <EventSearch data={event} />
        </View>
      ))}
    </ScrollView>
  );
};


// +lindo esto +lindo detalle +lindo perfil
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
    cardContainer: {
      flex: 1,
      paddingVertical: 10,
      display: 'flex',
      backgroundColor: '#fff',
      padding:20
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