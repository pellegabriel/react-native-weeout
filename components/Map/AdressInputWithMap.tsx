import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBBVk4iIjHSYXgGjZA08-VKCCCbm03Z2is';

const defaultCenter = {
  latitude: -34.92317666584001,
  longitude: -57.94956215165454,
};
interface IProps {
  map_point: string;
  center?: { latitude: number; longitude: number };
  onChange: (addressData: { address: string, latitude: number, longitude: number }) => void; // Cambio en la definición de onChange
}

export const AdressInputWithMap = ({ map_point, center, onChange }: IProps) => {
  const [position, setPosition] = useState(center || defaultCenter);
const [address, setAddress] = useState(map_point || '');


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
    const newPosition = { latitude: lat, longitude: lng };
    setPosition(newPosition);
    setAddress(details.formatted_address);
    onChange({ address: details.formatted_address, latitude: lat, longitude: lng });
  };
  
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.inputContainer}
      >
        <GooglePlacesAutocomplete
          fetchDetails={true}
          placeholder="Type a place"
          onPress={handlePlaceSelect}
          query={{ key: GOOGLE_MAPS_API_KEY, language: 'es' }}
        />
      </ScrollView>

      <MapView
        style={styles.map}
        region={{
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          latitude: position.latitude,
          longitude: position.longitude,
        }}
      >
        <Marker
          coordinate={position}
          onDragEnd={(e) => setPosition(e.nativeEvent.coordinate)}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
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
    marginBottom: 20
  },
  inputStyle: {
    width: Dimensions.get('screen').width - 30,
    padding: 0,
    margin: 0
  }
});