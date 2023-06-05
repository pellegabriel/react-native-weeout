import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface IEvent {
  id: number;
  latitude: number;
  longitude: number;
  location?: {
    latitude: number;
    longitude: number;
  };
}

interface IProps {
  event: IEvent;
}

const defaultRegion = {
  latitude: -34.92317666584001,
  longitude: -57.94956215165454,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
export const DetailMap: React.FC<IProps> = ({ event }) => {

    return (
      <View style={styles.container}>
        <MapView initialRegion={defaultRegion} style={styles.map}>
          {event?.location && (
            <Marker
              key={event.id}
              coordinate={{ latitude: event.location.latitude, longitude: event.location.longitude }}
            />
          )}
        </MapView>
      </View>
    );
    };


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
  },
  map: {
    flex: 1,
  },
})
