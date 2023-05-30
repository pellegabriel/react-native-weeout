import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useGetEvents } from '../../api/events';
import MapMarker from './Market';

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

interface IEvent {
  id: number;
  latitude: number;
  longitude: number;
}

function Map() {
  const { data, loading, error } = useGetEvents(); // Obtener los datos de los eventos usando el hook useGetEvents
  const [map, setMap] = useState(null);

  const onMapReady = useCallback((map: any) => {
    setMap(map);
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
<View style={styles.container}>
  <MapView
    initialRegion={defaultRegion}
    style={styles.container}
    onMapReady={onMapReady}
  >
    {data && Array.isArray(data) && data.map((event: IEvent) => (

<MapMarker key={event.id} loading={loading} error={error} data={event} />
))}
  </MapView>
</View>
  );
}

export default Map;
