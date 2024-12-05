import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Map from '../components/Map';
import { useGetEvents } from '../api/events';
import FloatingButton from '../components/profile/FloatingButton';
import { EventCard } from '../components/ListOfEvents/EventCard';
// import { ListOfEvents } from '../components/ListOfEvents';

export const HomeScreen = ({route}) => {
  const { data, error, loading, refetchEvents } = useGetEvents();

  useEffect(() => {
   if (route.params?.shouldRefetch) {
    refetchEvents()
    }
  }, [route.params])

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Bienvenido a Weeout</Text>
          <Text style={styles.subtitle}>¡La app definitiva para los amantes de los eventos!</Text>
        </View>

        {/* Renderizar el componente del mapa aquí */}
        <View style={styles.mapContainer}>
          <Map />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.listOfEventsTitle}>
            ¡Descubre los eventos más populares!
          </Text>
        </View>
        <View style={styles.containerList}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}

        {data &&
          data.map((event: any, index: React.Key) => (
            <View key={index} style={styles.cardContainer}>
              <EventCard data={event} />
            </View>
          ))}
          </View> 
        {/* <ListOfEvents /> */}
      </ScrollView>
      <FloatingButton />
    </>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fff',
      paddingTop: 50,
      width:400
      
    },containerList: {
      padding:30
      
    },
    cardContainer: {
      marginBottom: 10,
      width: 300
    },
    mapContainer:{
      width:'100%',
      height:340,
    },
    titleContainer: {
      marginTop: 14,
      marginBottom: 20,
      paddingLeft: 40,
      paddingRight: 40,
    },
    title: {
      fontSize: 50,
      display: 'flex',
      fontWeight: 'bold',
      justifyContent:'flex-start',
    },
    subtitle: {
      fontSize: 18,
      marginTop: 20,
    },
    highlight: {
      color: '#f5694d'
    },
    title2: {
      fontSize: 25,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent:'flex-start', 
      padding: 20,
      paddingLeft: 0
    },
    search: {
      fontSize: 30,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent:'center',
      width: 340,
      marginTop: 30
    },
    listOfEventsTitle: {
      fontSize: 18,
      marginTop: 20,
      // fontWeight: 'bold',
    },
});