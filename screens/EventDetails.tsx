import { StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
// import { ViewImage } from "../components/ImageGrid/Grid";
import { ImageGrid } from "../components/ImageGrid/ImageGrid";

interface Props {
    title: string;
    subtitle: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    createdBy: string;
    images: { id: number; uri: string }[];
    columns: number;
  }
  const event = {
    title: 'Mi evento',
    subtitle: 'Un evento muy interesante',
    description: 'Un evento para aprender mucho sobre React Native',
    startDate: new Date('2023-05-01T10:00:00Z'),
    endDate: new Date('2023-05-01T12:00:00Z'),
    location: 'Mi casa',
    createdBy: 'Juan Perez',
    
  };
export const EventDetailsScreen : React.FC<Props> = ({}) => {

  return (
      <View>

        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="event" size={36} color="#fff" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtitle}>{event.subtitle}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.description}>{event.description}</Text>
          <View style={styles.infoContainer}>
            <MaterialIcons name="schedule" size={20} color="#000" />
            <Text style={styles.infoText}>
              {event.startDate.toLocaleDateString()} - {event.endDate.toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <MaterialIcons name="place" size={20} color="#000" />
            <Text style={styles.infoText}>{event.location}</Text>
          </View>
          <View style={styles.infoContainer}>
            <MaterialIcons name="person" size={20} color="#000" />
            <Text style={styles.infoText}>Created by {event.createdBy}</Text>
          </View>
        </View>
         {/* <View>
          <ViewImage />
        </View> */}
      </View>
      <ImageGrid/>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 16,
      marginVertical: 8,
      elevation: 2,
    },
    imageContainer: {
      flex: 1,
      marginHorizontal: 5,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
    },
    image: {
      width: 170,
      borderRadius: 5,
      height: 170,
    },
    header: {
      backgroundColor: '#6C63FF',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      backgroundColor: '#C9C3FF',
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
      marginBottom: 16,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    infoText: {
      fontSize: 16,
      marginLeft: 8,
    },
  });