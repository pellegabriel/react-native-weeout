import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-elements";
import Icons from '@expo/vector-icons/FontAwesome5';
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useNavigation, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../App';
import { useGetEvents } from "../api/events";
import {DetailMap} from "../components/Map/DetailMap";
import { useEffect, useState } from "react";
import { gecodificateLocation } from "../api/geocodification";


export const EventDetailsScreen: React.FC = ({ route }: { route: RouteProp<RootStackParamList, 'EventDetails'> }) => {
  const [address, setAddress] = useState('');
  const { eventId } = route.params;
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const { data: eventsData, error: eventsError, loading: eventsLoading } = useGetEvents();

  // Find the event with the matching ID
  const event = eventsData?.find((event: { id: string; }) => event.id === eventId);

  useEffect(() => {
    const getAddressData = async () => {
      if (event?.location) {
        const addressData = await gecodificateLocation(event.location);
        setAddress(addressData);
      }
    };

    getAddressData();
  }, [event?.location]);

  if (eventsError) {
    return (
      <View>
        <Text>{eventsError}</Text>
      </View>
    );
  }

  if (!event || eventsLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <ScrollView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Icons name='calendar' size={30} color="#f5694d" />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{event?.title}</Text>
            <Text style={styles.subtitle}>{event?.subtitle}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.info}>
          <Image source={{ uri: event.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <View style={styles.boxInfo}>
                <Text style={styles.infoText}>{event?.date}</Text>
              </View>
              <Text style={styles.description}>{event?.description}</Text>
              <View style={styles.adress}>
                <Text style={styles.adress}>{address}</Text>
              </View>

            </View>
        </View>
        </View>
        <View style={styles.mapContainer}>
          <DetailMap event={event}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    maxHeight: 300, // Establece la altura máxima deseada
    flex: 1,
    marginBottom: 20
  },
    container: {
      marginTop: 60,
      borderRadius: 10,
      marginHorizontal: 16,
      marginVertical: 8,
    },    mapContainer:{
      height:240,
      paddingTop: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    listOfImages: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',

    },
    imageContainer: {
      marginVertical: 10,
      marginHorizontal: 10
    },
    image: {
      width: 160,
      height: 160,
      borderRadius: 5,
    },
    header: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      backgroundColor: '#fff',
      borderRadius: 30,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      marginLeft: 16,
    },
    title: {
      fontSize: 40,
      display: 'flex',
      fontWeight: 'bold',
      justifyContent: 'flex-start',
    },
    subtitle: {
      fontSize: 26,
    },
    body: {
      paddingHorizontal: 16,
    },

    description: {
      width: 110,
      fontSize: 12,
      borderBottomWidth: 1,
      marginTop:5,
      padding: 5

    },
    boxInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
      marginTop: 5,
      borderBottomWidth: 1,
      padding: 5

    },   
    adress: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
      fontSize: 12,
      marginTop:5
      
    },  
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 0,
      

    },
    infoText: {
      fontSize: 12,
  
    },
    infoContainer: {
      flexDirection: 'column',
      padding: 20,
      marginTop: 10,
      height: 200,
      marginBottom: 20,
      width: 150


    }
});