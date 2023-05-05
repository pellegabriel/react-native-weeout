import React from 'react';
// import { Event } from '../../src/models';
import { Marker } from 'react-native-maps';

interface IProps {
  event: Event;
}

// const MapMarker = ({ event }: IProps) => {
    const MapMarker = ({ }: IProps) => {

  const position = JSON.parse(
    '{ "lat": -34.91554, "lng": -57.91454 }'
    // (event && event.map_point) || '{ "lat": -34.91554, "lng": -57.91454 }',
  );
  return <Marker coordinate={position} />;
};

export default MapMarker;