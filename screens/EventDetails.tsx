import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icons from '@expo/vector-icons/FontAwesome5';
import { ImageGrid } from "../components/ImageGrid/ImageGrid";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-elements";
import { fakeImages } from "../utils/fakeData";
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../App';

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
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  return (
    <ScrollView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Icons name='calendar' size={30} color="#f5694d" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtitle}>{event.subtitle}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.description}>{event.description}</Text>
          <View style={styles.infoContainer}>
            <Icons name='calendar' size={20} color="#f5694d" />
            <Text style={styles.infoText}>
              {event.startDate.toLocaleDateString()} - {event.endDate.toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Icons name='map-marker' size={20} color="#f5694d" />
            <Text style={styles.infoText}>{event.location}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Icons name='user' size={20} color="#f5694d" />
            <Text style={styles.infoText}>Created by {event.createdBy}</Text>
          </View>
        </View>
      </View>


        <View style={styles.listOfImages}>
          {fakeImages.map(({ uri, id }) => (
            <TouchableOpacity
            style={styles.imageContainer}
            // onPress={() => navigate('ImageDetails', { imageId: id })}
            >
              <Image source={{ uri }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 60,
      borderRadius: 10,
      marginHorizontal: 16,
      marginVertical: 8,
      borderWidth: 1,
      borderColor: '#f5694d',
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