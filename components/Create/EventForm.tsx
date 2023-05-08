import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';
import AppImagePicker from '../Camara/ImagePicker';

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
  return (
    <View style={styles.container}>
      <Text>Título</Text>
      <TextInput
        style={styles.input}
        value={eventData.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <Text>Subtítulo</Text>
      <TextInput
        style={styles.input}
        value={eventData.subtitle}
        onChangeText={(text) => handleChange('subtitle', text)}
      />
      <Text>Descripción</Text>
      <TextInput
        style={styles.input}
        value={eventData.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <Text>Categoría</Text>
      <Picker
        selectedValue={eventData.category}
        onValueChange={(value) => handleChange('category', value)}
        style={styles.picker}
      >
        <Picker.Item label="Categoría 1" value="categoria1" />
        <Picker.Item label="Categoría 2" value="categoria2" />
        <Picker.Item label="Categoría 3" value="categoria3" />
      </Picker>
      <View style={styles.audioControls}>
        <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
        <TouchableOpacity onPress={startRecording} style={styles.audioControlButton}>
          <Text style={styles.audioControlButtonText}>Iniciar grabación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopRecording} style={styles.audioControlButton}>
          <Text style={styles.audioControlButtonText}>Detener grabación</Text>
        </TouchableOpacity>
      </View>
      <AppImagePicker/>
      <Text onPress={handleSubmit} style={styles.submitButton}>
        Crear Evento
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
    timer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  audioControlButton: {
    backgroundColor: 'purple',
    borderRadius: 5,
    padding: 10,
  },
  audioControlButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EventForm;


// import React, { useState, useRef } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// type EventFormProps = {
//   onSubmit: (eventData: EventData) => void;
// };

// type EventData = {
//   title: string;
//   subtitle: string;
//   description: string;
//   category: string;
// };

// const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
//   const [eventData, setEventData] = useState<EventData>({
//     title: '',
//     subtitle: '',
//     description: '',
//     category: '',
//   });

//   const audioRecorderPlayerRef = useRef(new AudioRecorderPlayer());

//   const handleChange = (key: keyof EventData, value: string) => {
//     setEventData((prevData) => ({ ...prevData, [key]: value }));
//   };

//   const handleSubmit = () => {
//     onSubmit(eventData);
//   };

//   const startRecording = async () => {
//     const path = 'sdcard/recorded_audio.mp4'; // Asegúrate de que la ruta de acceso sea válida y tenga permisos de escritura.
//     await audioRecorderPlayerRef.current.startRecorder(path);
//   };

//   const stopRecording = async () => {
//     await audioRecorderPlayerRef.current.stopRecorder();
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Título</Text>
//       <TextInput
//         style={styles.input}
//         value={eventData.title}
//         onChangeText={(text) => handleChange('title', text)}
//       />
//       <Text>Subtítulo</Text>
//       <TextInput
//         style={styles.input}
//         value={eventData.subtitle}
//         onChangeText={(text) => handleChange('subtitle', text)}
//       />
//       <Text>Descripción</Text>
//       <TextInput
//         style={styles.input}
//         value={eventData.description}
//         onChangeText={(text) => handleChange('description', text)}
//       />
//       <Text>Categoría</Text>
//       <Picker
//         selectedValue={eventData.category}
//         onValueChange={(value) => handleChange('category', value)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Categoría 1" value="categoria1" />
//         <Picker.Item label="Categoría 2" value="categoria2" />
//         <Picker.Item label="Categoría 3" value="categoria3" />
//       </Picker>
//       <View style={styles.audioControls}>
//         <TouchableOpacity onPress={startRecording} style={styles.audioControlButton}>
//           <Text style={styles.audioControlButtonText}>Iniciar grabación</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={stopRecording} style={styles.audioControlButton}>
//           <Text style={styles.audioControlButtonText}>Detener grabación</Text>
//         </TouchableOpacity>
//       </View>
//       <Text onPress={handleSubmit} style={styles.submitButton}>
//         Crear Evento
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginBottom: 10,
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     color: 'white',
//     textAlign: 'center',
//     padding: 10,
//     fontWeight: 'bold',
    
//   },
//   audioControls: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   audioControlButton: {
//     backgroundColor: 'purple',
//     borderRadius: 5,
//     padding: 10,
//   },
//   audioControlButtonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// export default EventForm;
