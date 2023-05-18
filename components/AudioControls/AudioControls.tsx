import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import Icons from '@expo/vector-icons/FontAwesome5';

export const AudioControls = ({ onAudioRecorded }: { onAudioRecorded: (audioUri: string) => void }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [sound, setSound] = React.useState<Sound>();
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  
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

  const stopRecording = async () => {
    try {
      console.log('Stopping recording..');
      setRecording(null);
      await recording?.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recording?.getURI() || '';
      setAudioUri(uri);
      onAudioRecorded(uri);
      console.log('Recording stopped and stored at', uri);

      // Detener el contador de tiempo
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return () => {
      if (sound) {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    };
  }, [sound]);
    
  return (
    <View style={styles.audioControls}>          
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>

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
  )
}

const styles = StyleSheet.create({
  audioControls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20, 
    width: '100%',
  },
  audioControlButton: {
    borderColor: '#f5694d',
    borderWidth: 2, 
    borderRadius: 6,
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
  timer: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4b4c4f',
  },
});