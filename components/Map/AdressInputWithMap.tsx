import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBBVk4iIjHSYXgGjZA08-VKCCCbm03Z2is';

const defaultCenter = {
  latitude: -34.92317666584001,
  longitude: -57.94956215165454,
};

interface IProps {
  map_point: string;
  center?: { latitude: number; longitude: number };
}

export const AdressInputWithMap = ({ map_point, center }: IProps) => {
  const [position, setPosition] = useState(center || defaultCenter);
  const [address, setAddress] = useState('');

  const getAddress = async (lat: number, lng: number) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
      );
      if (response.data.results && response.data.results[0]) {
        setAddress(response.data.results[0].formatted_address);
      } else {
        console.error('No results found for this location.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAddress(position.latitude, position.longitude);
  }, [position]);

  const handlePlaceSelect = (data, details) => {
    const { lat, lng } = details.geometry.location;
    setPosition({ latitude: lat, longitude: lng });
    // onDragEnd(details.formatted_address);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        keyboardShouldPersistTaps='always'
        contentContainerStyle={styles.inputContainer}
      >
        <GooglePlacesAutocomplete
          query={{ key: GOOGLE_MAPS_API_KEY, language: 'es' }}
          onPress={handlePlaceSelect}
          fetchDetails={true}
          enablePoweredByContainer={false}
          placeholder="Type a place"
          keyboardShouldPersistTaps='always'
        />
      </ScrollView>

      <MapView
        style={styles.map}
        region={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={position}
          draggable
          onDragEnd={(e) => setPosition(e.nativeEvent.coordinate)}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: Dimensions.get('screen').width - 30,
    height: 200,
    borderRadius: 30,
  },
  inputContainer: {
    flex: 1,
  },
  inputStyle: {
    width: Dimensions.get('screen').width - 30,
    padding: 0,
    margin: 0
  }
});