import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';
import AppImagePicker from '../Camara/ImagePicker';
import { UserMarker } from '../Map/UserMarker';
import { Input } from 'react-native-elements';
import Icons from '@expo/vector-icons/FontAwesome5';

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
  const [eventData, setEventData] = useState<EventData>({
    title: '',
    subtitle: '',
    description: '',
    category: '',
  });

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
    try {
      await Audio.requestPermissionsAsync();
      const { granted } = await Audio.getPermissionsAsync();
      if (!granted) {
        alert('No se otorgaron permisos para grabar audio');
        return;
      }

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync({
        android: {
          extension: '.m4a',
          outputFormat: 2, // Android.Media.MediaRecorder.OutputFormat.MPEG_4
          audioEncoder: 3, // Android.Media.MediaRecorder.AudioEncoder.AAC
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: '.caf',
          // audioQuality: 'high',
          audioQuality: 3,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        web: {
          mimeType: 'audio/webm',
          bitsPerSecond: 128000,
        },
      });
      
      await newRecording.startAsync();
      setRecording(newRecording);

      // Iniciar el contador de tiempo
      setElapsedTime(0);
      const newIntervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    } catch (err) {
      console.error('No se pudo iniciar la grabación', err);
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setAudioUri(uri);
        setRecording(null);
  
        // Detener el contador de tiempo
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }
    } catch (err) {
      console.error('No se pudo detener la grabación', err);
    }
  };

  const playAudio = async () => {
    if (audioUri) {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync({ uri: audioUri });
        await soundObject.playAsync();
      } catch (error) {
        console.error('Error al reproducir el audio', error);
      }
    }
  };

  function handleDragEnd(event: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ScrollView style={styles.container}>   
      <View style={styles.container1}>
        
        <Text style={styles.label}>Título:</Text>
        <Input
          value={eventData.title}
          onChangeText={(text) => handleChange('title', text)}
          inputStyle={styles.input}
          placeholder="Correr en el bosque..."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Text style={styles.label}>Subtitulo:</Text>
        <Input
          value={eventData.subtitle}
          onChangeText={(text) => handleChange('title', text)}
          inputStyle={styles.input}
          placeholder="Correr en el bosque..."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Text style={styles.label}>Description:</Text>
        <Input
          value={eventData.description}
          onChangeText={(text) => handleChange('title', text)}
          inputStyle={styles.input}
          placeholder="Correr en el bosque..."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Text style={styles.label}>Categoría:</Text>
        <Picker
          selectedValue={eventData.category}
          onValueChange={(value) => handleChange('category', value)}
          style={styles.picker}
        >
          <Picker.Item label="Categoría 1" value="categoria1" />
          <Picker.Item label="Categoría 2" value="categoria2" />
          <Picker.Item label="Categoría 3" value="categoria3" />
        </Picker>
        
        <Text style={styles.label}>Graba un audio contando acerca del evento:</Text>
        <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>

        <View style={styles.audioControls}>          
          <TouchableOpacity onPress={startRecording} style={styles.audioControlButton}>
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
          <UserMarker
            map_point='{"latitude": -34.91554, "longitude": -57.91454}'
            center={{ latitude: -34.92317666584001, longitude: -57.94956215165454 }}
            zoom={10}
            onDragEnd={handleDragEnd}
          />

          <Text onPress={handleSubmit} style={styles.submitButton}>
            Crear Evento
          </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 120,
  }, container1: {
    marginTop: 10,
    justifyContent: 'center',
    
  },
  titleHome:{
    padding:10,
    fontSize: 22,
  },
  timer: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputInnerContainer: {
    borderBottomWidth: 0,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: '#f5694d',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  audioControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20, 
    width:200
  },
  audioControlButton: {
    borderColor: 'purple',
    borderWidth: 2, 
    borderRadius: 5,
    padding: 10,    
    marginTop: 10,
    width: 50,
    height: 50,
    margin: 10, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  audioControlButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EventForm;
