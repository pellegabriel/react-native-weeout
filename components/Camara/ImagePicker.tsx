import React, { useState } from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { uploadImage } from '../../api/images';

interface AppImagePickerProps {
  eventId: string | number[],
  handleImageChange: (image: string) => void;
}

const AppImagePicker: React.FC<AppImagePickerProps> = ({ handleImageChange, eventId }) => {
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

    if (result.assets && result.assets.length > 0 && typeof result.assets[0].uri === 'string') {
      const newImages = [...images, result.assets[0].uri];
      setImages(newImages);
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

    if (
      result.assets &&
      result.assets.length > 0 &&
      typeof result.assets[0].uri === 'string'
    ) {
      const newImages = [...images, result.assets[0].uri];
      setImages(newImages);

      const imageUrl = await uploadImage(eventId, result)
      handleImageChange(imageUrl)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={takePhoto} style={styles.button}>
          <Text style={styles.buttonText}>Tomar foto</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Seleccionar imagen</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.imagesContainer}>
        {images.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={styles.preview}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    flexDirection: 'column',
  },
  buttonsContainer: {
    flex: 1,
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
    marginRight: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});


export default AppImagePicker;