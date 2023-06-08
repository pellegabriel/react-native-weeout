import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import Icons from '@expo/vector-icons/FontAwesome5';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { uploadAudio } from '../../api/audio';

type TAudioControlProps = {
  eventId: string | number[],
  handleAudioRecorded: (audioUri: string) => void
}
export const AudioControls = ({ handleAudioRecorded, eventId }: TAudioControlProps) => {
  // record audio
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  // play audio
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState<boolean>(false);
  // timer
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const startRecordingTimer = () => {
    setElapsedTime(0);
    const newIntervalId = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  }

  const handleRecording = async () => {
    if (audioUri) {
      setSound(null)
      setRecording(null)
      setAudioUri(null)
      setElapsedTime(0);
    }
    // stop recording
    if (isRecording) {
      try {
        setRecording(null);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({ allowsRecordingIOS: false });
        const uri = recording.getURI();
        const publicUrl = await uploadAudio(eventId, recording)
        
        setAudioUri(uri)
        handleAudioRecorded(publicUrl)
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsRecording(false)
        // Detener el contador de tiempo
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }
    } else {
    // start recording
      try {
        setIsRecording(true)
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        
        const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
        setRecording(recording);
        startRecordingTimer()
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
  };

  const handlePlayAudio = async () => {
    if (isSoundPlaying) {
      await sound.stopAsync();
      setIsSoundPlaying(false)
    } else {
      setIsSoundPlaying(true)
      const { sound } = await Audio.Sound.createAsync({ uri: audioUri })
      setSound(sound);
      await sound.playAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
          setIsSoundPlaying(false)
        }
      : undefined;
  }, [sound]);
    
  return (
    <View style={styles.audioControls}>          
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>

      <TouchableOpacity
        onPress={handleRecording} 
        style={styles.audioControlButton}
      >
        <Icons
          size={15}
          color="#f5694d"
          name={audioUri ? 'undo' : isRecording ? 'stop' : 'microphone'}
        />                
      </TouchableOpacity>

      {audioUri && (
        <TouchableOpacity onPress={handlePlayAudio} style={styles.audioControlButton}>
          <Icons
            size={15}
            color="#f5694d"
            name={isSoundPlaying ? 'pause' : 'play'}
          />                 
        </TouchableOpacity>
      )}
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
    marginBottom: 40
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
    marginRight: 40,
    fontWeight: 'bold',
    color: '#4b4c4f',
  },
});