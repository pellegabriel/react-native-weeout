import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';
interface MapMarkerProps {
  loading: boolean;
  error: string;
  data: any; 
}

const DetailMarker: React.FC<MapMarkerProps> = ({  data }) => {
  const position = {latitude: data.lat, longitude: data.lng };
  const title = 'Lugar predeterminado';
  const description = 'Descripción del lugar predeterminado';

  return (
    <Marker coordinate={position}>
      <Callout>
        <View>
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </Callout>
    </Marker>
  );
};

export default DetailMarker;