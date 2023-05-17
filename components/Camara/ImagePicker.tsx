import React, { useState } from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const AppImagePicker: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const requestPermissions = async () => {
    const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
    if (cameraStatus !== 'granted') {
      alert('Permisos de cámara no otorgados.');
      return false;
    }

    const { status: imagePickerStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (imagePickerStatus !== 'granted') {
      alert('Permisos de galería no otorgados.');
      return false;
    }

    return true;
  };

  const takePhoto = async () => {
    const hasPermissions = await requestPermissions();

    if (!hasPermissions || images.length >= 4) {
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0 && typeof result.assets[0].uri === 'string') {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const pickImage = async () => {
    const hasPermissions = await requestPermissions();

    if (!hasPermissions || images.length >= 4) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0 && typeof result.assets[0].uri === 'string') {
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={takePhoto} style={styles.button}>
        <Text style={styles.buttonText}>Tomar foto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Seleccionar imagen</Text>
      </TouchableOpacity>

      <View style={styles.imagesContainer}>
        {images.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={styles.preview}
            resizeMode="contain"
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1877f2', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 20 ,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  preview: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});


export default AppImagePicker;