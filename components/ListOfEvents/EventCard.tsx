import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TFakeEvent } from '../../utils/fakeData';
import { Audio } from 'expo-av';
import audioSample from '../../assets/audio-sample.mp3'
import Icons from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export interface CardProps {
  data: TFakeEvent;
}

export const EventCard: React.FC<CardProps> = ({ data }) => {
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audioSample);
    setSound(sound);

    await sound.playAsync();
  }

  const handleAudio = async () => {
    if (sound === undefined) {
      playSound()
    } else {
      setSound(undefined)
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleClickOnCard = () => {
    navigate('EventDetails', { eventId: data.id })
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handleClickOnCard}>
      <View style={styles.imageContainer}>
      <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text numberOfLines={4} style={styles.description}>{data.description}</Text>
      
        <View style={styles.audioCOntainer}>
          <TouchableOpacity
            onPress={handleAudio}
            style={styles.button}
          >
            <Icons
              size={10}
              color="#f5694d"
              name={sound ? 'pause' : 'play'}
              />
          </TouchableOpacity>

          <View style={styles.dataPoint}>
            <Icons style={styles.dataPointIcon} name='map-marker' size={14} color="#f5694d" />
            <Text numberOfLines={2} style={styles.dataPointText}>{data.location}</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
    marginBottom:20,
    borderWidth: 1,
    borderColor: '#4e4e4e',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 16,
    paddingTop: 12
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
  },
  audioCOntainer: {
    flex: 1,
    marginRight: 2,
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    marginRight: 20,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    borderColor: '#4e4e4e',
    justifyContent: 'center',
  },
  dataPoint: {
    flex: 1,
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center'
  },
  dataPointText: {
    fontSize: 12
  },
  dataPointIcon: {
    marginRight: 10
  },
});