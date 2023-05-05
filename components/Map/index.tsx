import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import { Event } from '../../src/models';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

const defaultRegion = {
  latitude: -34.92317666584001,
  longitude: -57.94956215165454,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

interface IProps {
  events: Array<Event>;
  region?: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

function Map({ events = [], region }: IProps) {
  const [map, setMap] = useState(null);

  const onMapReady = useCallback((map) => {
    setMap(map);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={region || defaultRegion}
        style={styles.container}
        onMapReady={onMapReady}
      >
        {/* {events.map((event) => (
        //   <Marker
        //     key={event.id}
        //     coordinate={{ latitude: event.latitude, longitude: event.longitude }}
        //   />
        ))} */}
      </MapView>
    </View>
  );
}

export default Map;