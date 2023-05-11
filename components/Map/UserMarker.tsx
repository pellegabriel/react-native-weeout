import MapView, { Marker, LatLng } from 'react-native-maps';
import { NativeSyntheticEvent, View, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY'; // Reemplaza esto con tu API key
const containerStyle = {
  width: '100%',
  height: 400,
  borderRadius: 30,
};

const defaultCenter = {
  latitude: -34.92317666584001,
  longitude: -57.94956215165454,
};

const defaultZoom = 10;

interface IProps {
  map_point: string;
  center?: { latitude: number; longitude: number };
  zoom?: number;
  onDragEnd: (event: string) => void;
}

export const UserMarker = ({ map_point, center, zoom, onDragEnd }: IProps) => {
  const [inputText, setInputText] = useState('');

  const searchAddress = async (address: string) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address,
        )}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const { lat, lng } = response.data.results[0].geometry.location;
      onDragEnd(JSON.stringify({ latitude: lat, longitude: lng }));
    } catch (error) {
      console.error(error);
    }
  };

  const position = JSON.parse(
    map_point || '{ "latitude": -34.91554, "longitude": -57.91454 }',
  );

  const handleDragEnd = (e: NativeSyntheticEvent<{ coordinate: LatLng }>) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    onDragEnd(`{ "latitude": ${latitude}, "longitude": ${longitude} }`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <TextInput
          id="address"
          placeholder="Ingrese la direccion"
          value={inputText}
          onChangeText={(text) => {
            setInputText(text);
            searchAddress(text);
          }}
          style={styles.input}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={containerStyle}
          initialRegion={{
            latitude: center?.latitude || defaultCenter.latitude,
            longitude: center?.longitude || defaultCenter.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker draggable coordinate={position} onDragEnd={handleDragEnd} />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressContainer: {
    paddingTop: 8,
    paddingBottom: 4,
  },
  mapContainer: {
    flex: 1,
  },
  
  input: {}})
