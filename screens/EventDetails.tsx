import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-elements";
import Icons from '@expo/vector-icons/FontAwesome5';
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useNavigation, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from '../App';
import { useGetEvents } from "../api/events";
import DetailMap from "../components/Map/DetailMap";

export const EventDetailsScreen: React.FC = ({ route }: { route: RouteProp<RootStackParamList, 'EventDetails'> }) => {
  
  const { eventId } = route.params;
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  const { data: eventsData, error: eventsError, loading: eventsLoading } = useGetEvents();

  if (eventsError) {
    return (
      <View>
        <Text>{eventsError}</Text>
      </View>
    );
  }

  // Find the event with the matching ID
  const event = eventsData?.find((event) => event.id === eventId);

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
          <Text style={styles.description}>{event?.description}</Text>
          <Image source={{ uri: event.uri }} style={styles.image} />

          <View style={styles.infoContainer}>
            <Icons name='calendar' size={20} color="#f5694d" />
            <Text style={styles.infoText}>
              {/* {event?.startDate.toLocaleDateString()} - {event?.endDate.toLocaleDateString()} */}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Icons name='map-marker' size={20} color="#f5694d" />
            <Text style={styles.infoText}>{event?.location}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Icons name='user' size={20} color="#f5694d" />
            <Text style={styles.infoText}>Created by {event?.createdBy}</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
          <DetailMap events={[event]} />
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
      borderWidth: 1,
      borderColor: '#f5694d',
    },    mapContainer:{
      width:360,
      height:240,
      paddingTop: 0,
      padding: 20,
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
      backgroundColor: '#f5694d',
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
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      color: '#fff',
    },
    body: {
      padding: 16,
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    infoText: {
      fontSize: 16,
      marginLeft: 12,
    },
});