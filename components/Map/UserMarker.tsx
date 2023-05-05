import React, { useCallback, useState } from 'react';
import Geocode from 'react-geocode';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// import useDebouncedSearch from '../../src/hooks/useDebouncedSearch';
// import { Event } from '../../src/models';
import { View, TextInput, StyleSheet } from 'react-native';

Geocode.setApiKey(process.env.NEXT_PUBLIC_MAPS_API_KEY || 'Error');

Geocode.setLanguage('es');
Geocode.setRegion('arg');
Geocode.setLocationType('ROOFTOP');
Geocode.enableDebug();

const containerStyle = {
  width: '100%',
  height: 400,
  borderRadius: 30,
};

const defaultCenter = {
  lat: -34.92317666584001,
  lng: -57.94956215165454,
};

const defaultZoom = 10;

interface IProps {
  map_point: string;
  center?: google.maps.LatLng | google.maps.LatLngLiteral;
  zoom?: number;
  onDragEnd: (event: string) => void;
}

const UserMarker = ({ map_point, center, zoom, onDragEnd }: IProps) => {
  const [map, setMap] = useState<GoogleMap | null>(null);
  const [inputText, setInputText] = useState('');

  const searchAddress = (address: string) => {
    Geocode.fromAddress(address).then(
      (response: any) => {
        const { location } = response.results[0].geometry;
        onDragEnd(`{ "lat": ${location?.lat}, "lng": ${location?.lng} }`);
      },
      (error: any) => {
        console.error(error);
      },
    );
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || 'Error',
  });

  const position = JSON.parse(
    map_point || '{ "lat": -34.91554, "lng": -57.91454 }',
  );

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const handleDragEnd = (e: google.maps.MapMouseEvent) => {
    onDragEnd(
      `{ "lat": ${e.latLng?.lat()}, "lng": ${e.latLng?.lng()} }`,
    );
  };

  return isLoaded ? (
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
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center || defaultCenter}
          zoom={zoom || defaultZoom}
          onLoad={onLoad}
          onUnmount={onUnmount}>
          <Marker
            draggable
            position={position}
            onDragEnd={handleDragEnd}
          />
        </GoogleMap>
      </View>
    </View>
  ) : (
    <></>
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
