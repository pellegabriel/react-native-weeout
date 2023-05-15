import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';
import AppImagePicker from '../Camara/ImagePicker';
// import { UserMarker } from '../Map/UserMarker';
import { Input } from 'react-native-elements';
import Icons from '@expo/vector-icons/FontAwesome5';
import { Sound } from 'expo-av/build/Audio';

type EventFormProps = {
  onSubmit: (eventData: EventData) => void;
};

export type EventData = {
  title: string;
  subtitle: string;
  description: string;
  category: string;
};

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [eventData, setEventData] = useState<EventData>({
    title: '',
    subtitle: '',
    description: '',
    category: '',
  });

  const [sound, setSound] = React.useState<Sound>();
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (key: keyof EventData, value: string) => {
    setEventData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(eventData);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const startRecording = async () => {
     if (recording) {
      console.log('Ya hay una grabación en curso');
      return;
    }

    setIsRecording(true);

    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      
      setRecording(recording);
      console.log('Recording started');

      // Iniciar el contador de tiempo
      setElapsedTime(0);
      const newIntervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(newIntervalId);

    } catch (err) {
        console.error('Failed to start recording', err);
      }
  };

  const stopRecording = async () =>{
    try {
      console.log('Stopping recording..');
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recording.getURI();
      setAudioUri(uri)
      console.log('Recording stopped and stored at', uri);

      // Detener el contador de tiempo
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const playAudio = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({ uri: audioUri })
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ScrollView style={styles.container}>   
      <View style={styles.container1}>
        
        <Text style={styles.label}>Título:</Text>
        <Input
          value={eventData.title}
          onChangeText={(text) => handleChange('title', text)}
          inputStyle={styles.input}
          placeholder="Escalada en el cerro Otto"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Text style={styles.label}>Subtitulo:</Text>
        <Input
          value={eventData.subtitle}
          onChangeText={(text) => handleChange('title', text)}
          inputStyle={styles.input}
          placeholder="Evento para para mayores de 26"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Text style={styles.label}>Description:</Text>
        <Input
          value={eventData.description}
          onChangeText={(text) => handleChange('title', text)}
          inputStyle={styles.input}
          placeholder="En este evento vamos a..."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Text style={styles.label}>Categoría:</Text>
        <Picker
          style={styles.picker}
          selectedValue={eventData.category}
          onValueChange={(value) => handleChange('category', value)}
        >
          <Picker.Item label='Teatro' value='Teatro' />
          <Picker.Item label='Musica' value='Musica' />
          <Picker.Item label='Actividades sociales' value='sociales' />
          <Picker.Item label='Baile' value='Baile' />
          <Picker.Item label='Presentaciones' value='Presentaciones' />
          <Picker.Item label='Arte' value='Arte' />
          <Picker.Item label='Medio ambiente' value='Medio ambiente' />
          <Picker.Item label='Deportes' value='Deportes' />
          <Picker.Item label='Actividad  fisica' value='Actividad  fisica' />
          <Picker.Item label='Literatura' value='Literatura' />
          <Picker.Item label='Política' value='Política' />
          <Picker.Item label='Religion' value='Religion' />
          <Picker.Item label='Espiritualidad' value='Espiritualidad' />
          <Picker.Item label='Salud y bienestar' value='Salud y bienestar' />
          <Picker.Item label='Trabajo y negocios' value='Trabajo y negocios' />
          <Picker.Item label='Vida nocturna' value='Vida nocturna' />
        </Picker>
        
        <Text style={styles.label}>Graba un audio contando acerca del evento:</Text>
        <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>

        <View style={styles.audioControls}>          
          <TouchableOpacity onPress={startRecording} 
            disabled={isRecording}
            style={styles.audioControlButton}
          >
            <Icons
              size={15}
              color="#f5694d"
              name='microphone'
            />                
          </TouchableOpacity>

          <TouchableOpacity onPress={stopRecording} style={styles.audioControlButton}>
            <Icons
              size={15}
              color="#f5694d"
              name='stop'
            />                 
          </TouchableOpacity>

          <TouchableOpacity onPress={playAudio} style={styles.audioControlButton}>
              <Icons
                  size={15}
                  color="#f5694d"
                  name='play'
              />          
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Subi una foto del evento:</Text>

        <AppImagePicker />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 30,
    paddingTop: 20,
  }, 
  container1: {
    marginTop: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
  titleHome:{
    padding:10,
    fontSize: 22,
    fontWeight: '600',
    color: '#1c1e21',
  },
  timer: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4b4c4f',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#4b4c4f',
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputInnerContainer: {
    borderBottomWidth: 0,
  },
  input: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#4e4e4e',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#ccd0d5',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#1877f2',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    marginTop: 20
  },
  audioControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20, 
    width: '100%',
  },
  audioControlButton: {
    borderColor: '#f5694d',
    borderWidth: 2, 
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: 50,
    height: 50,
    margin: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  audioControlButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export default EventForm;
